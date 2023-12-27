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

import { writeUsersData } from "@/components/firebase/models/usersModal";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {
      userId,
      email,
      gender,
      language,
      region,
      age,
      status,
      connectedTo
    } = await req.json();
    if (
      !userId ||
      !email ||
      !gender ||
      !language ||
      !region ||
      !age ||
      !status ||
      !connectedTo
    ) {
      return new NextResponse("Missing request body!", { status: 400 });
    }
    await writeUsersData(
      userId,
      email,
      gender,
      language,
      region,
      age,
      status,
      connectedTo
    );
    // Assuming `writeUsersData` returns the appropriate data for your response
    return new NextResponse("User created successfully!", { status: 200 });
  } catch (e: any) {
    console.error(e);
    // Return an appropriate error response
    return new NextResponse("Oops, Error Occured!", { status: 500 });
  }
}
