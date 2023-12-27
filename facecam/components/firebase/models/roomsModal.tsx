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

export function writeRoomsData(
  roomId: string,
  userIdA: string,
  userIdB: string,
  userApeerId: string,
  userBpeerId: string,
  status: string
) {
  set(ref(FirebaseDatabase, "ROOMS/" + roomId), {
    createdBy: userIdA,
    creatorPeerId: userApeerId,
    connectedBy: userIdB,
    connectorPeerId: userBpeerId,
    status: status,
  });
}

