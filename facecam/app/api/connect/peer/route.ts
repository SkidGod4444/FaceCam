import { addUserToRoom } from "@/components/firebase/algo/algo";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId, roomId, creatorId } = await req.json();

    if (!userId || !roomId || !creatorId) {
      
      return new NextResponse("Missing required fields", {status: 400})
    }

    if(userId === creatorId){
      return new NextResponse("You cannot connect to your room!", {status: 400})
    }

    await addUserToRoom(userId, roomId, creatorId);
    
    return new NextResponse("Success", {status: 200})
    
  } catch (error: any) {
    return new NextResponse(error.message, {status: 500})
  }
  
}
