// import { checkIfUserExists } from "@/components/firebase/algo/algo";
// import { FullMessageType } from "@/lib/types/types";
// import clsx from "clsx";
// import { useState } from "react";

// interface MessageBoxProps {
//     data: FullMessageType;
//     isLast?: boolean;
//     }

// const MessageBox: React.FC<MessageBoxProps> = ({ 
//         data, 
//         isLast
//       }) => {
//         const user = checkIfUserExists();
//         const [imageModalOpen, setImageModalOpen] = useState(false);
      
      
//         const isOwn = user?.email === data?.sender?.email
//         const seenList = (data.seenBy || [])
//           .filter((user) => user.email !== data?.sender?.email)
//           .map((user) => user.userId)
//           .join(', ');
      
//         const container = clsx('flex gap-3 p-4', isOwn && 'justify-end');
//         const avatar = clsx(isOwn && 'order-2');
//         const body = clsx('flex flex-col gap-2', isOwn && 'items-end');
//         const message = clsx(
//           'text-sm w-fit overflow-hidden', 
//           isOwn ? 'bg-sky-500 text-white' : 'bg-gray-100'
//         );
      
//         return ( 
//           <div className={container}>
//             <div className={body}>
//               <div className="flex items-center gap-1">
//                 <div className="text-sm text-gray-500">
//                   {data.sender.userId}
//                 </div>
//               </div>
//               <div className={message}>
            
//                   <div>{data.body}</div>
//               </div>
//               {isLast && isOwn && seenList.length > 0 && (
//                 <div 
//                   className="
//                   text-xs 
//                   font-light 
//                   text-gray-500
//                   "
//                 >
//                   {`Seen by ${seenList}`}
//                 </div>
//               )}
//             </div>
//           </div>
//          );
//       }
       
//       export default MessageBox;