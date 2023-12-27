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

import { ref, set } from "firebase/database";
import { FirebaseDatabase } from "../firebaseConfig";
import * as crypto from 'crypto';
const generateRandomKey = () => {
  return crypto.randomBytes(220); // 256 bits
};
const key = generateRandomKey();

const randomId = generateRandomId(22);

export function writeUsersData(
  userId: string,
  email: string,
  gender: string,
  language: string,
  region: string,
  age: number,
  status: string,
  connectedTo: string,
) {
  set(ref(FirebaseDatabase, "USERS/" + userId), {
    email: email,
    gender: gender,
    language: language,
    region: region,
    age: age,
    status: status,
    connectedRoom: connectedTo,
    facecamKey: key,
    peerId: randomId,
  });

}

function generateRandomId(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let randomId = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    randomId += characters.charAt(randomIndex);
  }

  return randomId;
}
