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

import {  AlignLeft } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";
// import { Sidebar } from "./sidebar";

export const MobileSidebar = () => {
    return (
       <Sheet>
        <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        < AlignLeft/>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 bg-white">
            {/* <Sidebar /> */}
        </SheetContent>
       </Sheet>
    )
};