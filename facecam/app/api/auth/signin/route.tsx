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

import { checkIfUserRegistered } from "@/components/firebase/algo/algo";
import { FirebaseAuth } from "@/components/firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    try {
      const ifUserExists = await checkIfUserRegistered(email);

      if (ifUserExists) {
        return signInWithEmailAndPassword(FirebaseAuth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            return new NextResponse('User signed in!', { status: 200 });
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.error('Error signing in:', errorMessage);
            return new NextResponse(`ErrorMessage: ${errorMessage}`, { status: 500 });
          });
      } else {
        // This branch is missing a return statement
        // Add a response here, for example:
        return new NextResponse("User does not exist!", { status: 404 });
      }
    } catch (error) {
      console.error('Error checking if user exists:', error);
      return new NextResponse("Internal Server Error", { status: 500 });
    }
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
