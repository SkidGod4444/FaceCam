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

import { initStream } from "@/components/firebase/algo/peer/caller";
import { MessageArea } from "@/components/settings/TextArea";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Peer from "peerjs";
import { useEffect, useRef, useState } from 'react';

initStream();
const VideoConnectPage = () => {

  const handleSkipButtonClick = () => {
    // Perform the action you want when the "Skip" button is clicked
    console.log("Skip button clicked");
    // Add your logic here
  };

  const handleSendButtonClick = () => {
    // Perform the action you want when the "Send" button is clicked
    console.log("Send button clicked");
    // Add your logic here
  };

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key === 's') {
        // Trigger the "Skip" button action when the "s" key is pressed
        handleSkipButtonClick();
      } else if (event.key === 'Enter') {
        // Trigger the "Send" button action when the "Enter" key is pressed
        handleSendButtonClick();
      }
    };

    // Add event listener for key press
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      // Remove event listener when the component is unmounted
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return (
    <>
      <div className="flex flex-row grey-color ">
        <div className="flex flex-col  ">
          <div className=" flex justify-center items-center ml-1.5 mt-1 w-[350px]">
            <AspectRatio ratio={4/3}>
              <Image src="/aprTest.jpg" alt="FaceCam" layout="fill" className="rounded-md object-cover" />
              <Image
                src="/facecamoverlay.png"
                alt="Overlay"
                width="300"
                height="300"
                className="absolute opacity-80 inset-0 ml-auto mr-auto mt-auto mb-4"
              />
            </AspectRatio>
          </div>
          <div className=" flex justify-start ml-1.5 mt-1 mb-1.5 w-[350px]">
            <AspectRatio ratio={4/3}>
              <video src=""
                id = "callerStream"
                autoPlay
                muted
                loop={true}
                className="rounded-md object-cover"/>
            </AspectRatio>
          </div>
        </div>
        <div className=" flex justify-center gap-x-2 ml-4 mt-1 mb-1.5 w-[900px] border bg-white rounded-md">
          <div className="flex items-center mt-auto mb-2 ml-5 ">
            <Button
              size="lg"
              variant="outline"
              className="h-[80px]"
              onClick={handleSkipButtonClick}
            >
              Skip
            </Button>
          </div>
          <div className="flex items-center mt-auto mb-2 w-[700px]">
            <MessageArea />
          </div>
          <div className="flex items-center mt-auto mb-2 mr-5">
            <Button
              size="lg"
              variant="outline"
              className="h-[80px]"
              onClick={handleSendButtonClick}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoConnectPage;
