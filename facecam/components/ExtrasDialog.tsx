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

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { IoSettingsOutline } from "react-icons/io5";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { LangPicker } from "./settings/LangPicker";
import { RegionPicker } from "./settings/RegionPicker";
import { Logo } from "@/app/(routes)/_components/logo";
import { GenderPicker } from "./settings/GenderPicker";
import { AgePicker } from "./settings/AgePicker";

export function ExtrasDialog() {
  return (
    <Sheet>
      <SheetTrigger>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button size="sm" variant="outline">
                    <IoSettingsOutline className="h-4 w-4 text-black" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Open Settings</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
      </SheetTrigger>
      <SheetContent className="w-[100%] h-[150px] " side="bottom">
        <SheetHeader>
          <SheetTitle>Change settings as per your mood.</SheetTitle>
          <SheetDescription>
            Remember you will get matches as per your selected region,age & gender!
          </SheetDescription>
        </SheetHeader>
        
        <div className="flex items-center gap-x-5 gap-y-2">
            <Logo />
          <LangPicker />
          <RegionPicker />
        <GenderPicker />
        <AgePicker />
        <div className="flex ml-auto mr-5">
        <Button size="sm" variant="default">
         Save Changes
        </Button>
        </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
