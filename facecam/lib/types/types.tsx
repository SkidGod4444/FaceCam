interface Message {
  id: string;
  text: string;
  timestamp: string;
}

interface User {
  userId: string;
  email: string;
  gender: string;
  language: string;
  region: string;
  age: number;
  status: string;
  connectedTo: string;
}

export interface FullMessageType {
  sender: User;
  seenBy: User[];
}

export interface FullConvoType {
  users: User[];
  messages: FullMessageType[];
}
