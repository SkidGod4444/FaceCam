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

"use client";

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LogIn } from 'lucide-react';
import { Logo } from "@/app/(routes)/_components/logo";

export function SigninDialog() {
  return (
    <Dialog>
      <DialogTrigger>
      <TooltipProvider>
        <Tooltip>
        <TooltipTrigger>
          <Button size="sm" variant="outline">
          <LogIn className="h-4 w-4 mr-2 text-black" />
          Login
        </Button>
        </TooltipTrigger>
        <TooltipContent>
      <p>Login for better experience.</p>
    </TooltipContent>
    </Tooltip>
    </TooltipProvider>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>FaceCam Auth.</DialogTitle>
          <DialogDescription>
            <p>
            Login to FaceCam for better experience. <br></br>
            Don&apos;t worry you are still a stranger for others.
            </p>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Enter your mail"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Enter your password."
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <div className="mr-20">
        <Logo />
          </div>
          <Button type="submit">
            Continue
          </Button>
          
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}