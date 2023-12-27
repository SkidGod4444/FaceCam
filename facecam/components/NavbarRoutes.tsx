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

import { Logo } from '@/app/(routes)/_components/logo';
import { SigninDialog } from './SignInDialog';
import { ShareDialog } from './ShareDialog';
import { ExtrasDialog } from './ExtrasDialog';
import Image from 'next/image';

export const NavbarRoutes = () => {
  return (
    <>
    <div className='flex gap-x-2 mr-auto'>
      <Logo />
    </div>
    <div className='flex mr-auto '>
      <Image
        src="/talk2strangers.png"
        alt="FaceCam-Talk2Strangers"
        width={250}
        height={250}
      />
    </div>
    <div className="flex gap-x-2 ml-auto">
        <ShareDialog />
        <SigninDialog />
        <ExtrasDialog />
    </div>
    </>
  );
};
