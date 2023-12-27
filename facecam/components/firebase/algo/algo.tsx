// FaceCam is an online web application that allows you to video chat with strangers.
//     It is a free and open source software/platform that is licensed under the GNU General Public License v3.0.
//     Copyright (C) 2023  Saidev Dhal

//     This program is free software: you can redistribute it and/or modify
//     it under the terms of the GNU General Public License as published by
//     the Free Software Foundation, either version 3 of the License, or
//     (at your option) any later version.

//     This program is distributed in the hope that it will be useful,
//     but WITHOUT ANY WARRANTY; without even the implied warranty of
//     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//     GNU General Public License for more details.

//     You should have received a copy of the GNU General Public License
//     along with this program.  If not, see <https://www.gnu.org/licenses/>.

import { User, fetchSignInMethodsForEmail, onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth, FirebaseDatabase } from "../firebaseConfig";
import { get, onValue, ref, remove, set } from "firebase/database";
import Peer from "peerjs";
import { NextResponse } from "next/server";

// check if user is logged in or not
export function checkIfUserExists(): Promise<User> {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(FirebaseAuth, (user) => {
      if (user) {
        resolve(user);
      } else {
        // User is signed out
        reject(new Error("User is signed out!"));
      }
    });
  });
}

// check if already user email exists in firebase auth
export async function checkIfUserRegistered(email: string): Promise<boolean> {
  try {
    const signInMethods = await fetchSignInMethodsForEmail(FirebaseAuth, email);

    // If signInMethods is empty, the email is not associated with any account
    return signInMethods.length > 0;
  } catch (error) {
    console.error("Error checking if email exists:", error);
    throw error;
  }
}
// check if user is in DB
export async function checkIfUserInDB(userId: string) {
  try {
    const userRef = ref(FirebaseDatabase, "USERS/" + userId);
    const userShot = await get(userRef);
    const user = userShot.val();

    if (!user) {
      return false;
    }
    return true;
  }
  catch (error) {
    console.error("Error checking if user exists:", error);
    throw error;
  }
}
// match waiting user requirements with waiting status room creators
export async function scanAndGetRoom(userId: string) {
  try {
    const userRef = ref(FirebaseDatabase, "USERS/" + userId);
    const roomsRef = ref(FirebaseDatabase, "ROOMS/");
    const roomsSnapshot = await get(roomsRef);
    const rooms = roomsSnapshot.val();

    if (!rooms) {
      throw new Error("No rooms found!");
    }

    // get the rooms with status waiting
    const waitingRooms = Object.keys(rooms).filter(
      (room) => rooms[room].status === "waiting"
    );

    if (waitingRooms.length === 0) {
      // No waiting rooms, return accordingly
      return false;
    }

    const userSnapshot = await get(userRef);
    const user = userSnapshot.val();

    if (!user) {
      throw new Error("No user found!");
    }

    const userRegion = user.region;
    const userAge = user.age;
    const userGender = user.gender;

    // Loop through each waiting room
    for (const roomId of waitingRooms) {
      const roomCreatorIdRef = ref(
        FirebaseDatabase,
        `USERS/${rooms[roomId].createdBy}`
      );
      const roomCreatorIdSnapshot = await get(roomCreatorIdRef);
      const roomCreatorId = roomCreatorIdSnapshot.val();

      if (roomCreatorId && roomCreatorId.gender !== userGender && roomCreatorId.region === userRegion && roomCreatorId.age === userAge) {
        const peerId = rooms[roomId].peerId;
        return { roomCreatorId, roomId, peerId };
      }
    }

    // No matching room found
    return false;
  } catch (error: any) {
    console.error('Error scanning rooms:', error.message);
    throw error;
  }
}

export async function scanAndGetUser(creatorId: string) {
  try {
    const creatorRef = ref(FirebaseDatabase, "USERS/" + creatorId);
    const roomRef = ref(FirebaseDatabase, "ROOMS/" + creatorId);
    const usersRef = ref(FirebaseDatabase, "USERS/");
    
    const [usersSnapshot, roomSnapshot, creatorSnapshot] = await Promise.all([
      get(usersRef),
      get(roomRef),
      get(creatorRef),
    ]);

    const users = usersSnapshot.val();

    if (!users) {
      throw new Error("No users found!");
    }

    // get the users with status waiting
    const waitingUsers = Object.keys(users).filter(
      (userId) => users[userId].status === "waiting"
    );

    if (waitingUsers.length === 0) {
      // No waiting users, return accordingly
      return false;
    }

    const room = roomSnapshot.val();
    const creator = creatorSnapshot.val();

    if (!creator) {
      throw new Error("Creator not found!");
    }
    if (!room) {
      throw new Error("Room not found!");
    }

    const creatorRegion = creator.region;
    const creatorAge = creator.age;
    const creatorGender = creator.gender;

    // Loop through each waiting user
    for (const userId of waitingUsers) {
      const user = users[userId];
      if ( user.gender !== creatorGender && user.region === creatorRegion && user.age === creatorAge) {
        const peerId = room.peerId; // Assuming 'peerId' is a property of the room
        return { creatorId, roomId: creatorId, peerId };
      }
    }

    // No matching room found
    return false;
  } catch (error: any) {
    console.error('Error scanning users:', error.message);
    throw error;
  }
}

export async function addUserToRoom(userId: string, roomId: string, createdBy: string) {
  const userRef = ref(FirebaseDatabase, "USERS/" + userId);
  const roomRef = ref(FirebaseDatabase, "ROOMS/" + roomId);
  const creatorRef = ref(FirebaseDatabase, "USERS/" + createdBy);

  const roomSnapshot = await get(roomRef);
  const room = roomSnapshot.val();
  // check if room creator id is same as created by id
  if (room.createdBy === createdBy) {
    // Update room status to 'inLive'
    set(creatorRef, { status: "inRoom" });
    set(userRef, { status: "inRoom" });
    set(roomRef, { status: "isLive" });
    set(room, { connectedBy: userId })
  }

  // if not matches then return false
  return false;
}

// delete room and chat from firebase database
export async function closeRoom(roomId: string) {
  const roomRef = ref(FirebaseDatabase, "ROOMS/" + roomId);
  const roomSnapshot = await get(roomRef);
  const room = roomSnapshot.val();
  if (room) {
    set(roomRef, { status: "closed" });
    return true;
  } else {
    return false;
  }
}


export function DeleteRoomsOnInactive() {
  const roomsRef = ref(FirebaseDatabase, 'ROOMS');

  // Listen for changes in the rooms node
  onValue(roomsRef, (snapshot) => {
    const rooms = snapshot.val();

    // Check if rooms exist
    if (rooms) {
      Object.keys(rooms).forEach((roomId) => {
        const room = rooms[roomId];

        // Check if the room status is "closed"
        if (room.status === 'closed') {
          // Room is closed, delete the room
          deleteRoom(roomId);

          // Also delete corresponding chat
          deleteChat(roomId);
        }
      });
    }
  });
}

export function deleteRoom(roomId: string) {
  const chatRef = ref(FirebaseDatabase, `ROOMS/${roomId}`);
  remove(chatRef)
    .then(() => {
      console.log('Room deleted successfully:', roomId);
    })
    .catch((error: any) => {
      console.error('Error deleting room:', error.message);
    });
}

export function deleteChat(roomId: string) {
  const chatRef = ref(FirebaseDatabase, `CHATS/${roomId}`);
  remove(chatRef)
    .then(() => {
      console.log('Chat deleted successfully:', roomId);
    })
    .catch((error: any) => {
      console.error('Error deleting chat:', error.message);
    });
}

interface DBUser {
      userId: string,
      email: string,
      gender: string,
      language: string,
      region: string,
      age: string,
      status: string,
      connectedTo: string,
      peerId: string
}
export async function fetchUser(userId: string): Promise<DBUser> {
  return new Promise(async (resolve, reject) => {
    try {
      const userRef = ref(FirebaseDatabase, "USERS/" + userId);
      const userShot = await get(userRef);
      const user = userShot.val();

      if (!user) {
        reject("User not found"); // Change false to an appropriate rejection message
      }
      
      resolve(user); // Resolve with the user object if it exists
    } catch (error) {
      console.error("Error checking if user exists:", error);
      reject(error); // Reject with the caught error
    }
  });
}


export async function fetchPeerId(userId: string) {
  try {
    const user = await fetchUser(userId);
    if(!user) {
      return false;
    }
    const peerId = user?.peerId;
    return peerId;
  } catch (error: any) {
    return error.message;
  }
}

