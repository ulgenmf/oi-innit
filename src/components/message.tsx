import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import React from "react";
import { useChat } from "ai/react";

function Message() {
 const { messages, input, handleInputChange, handleSubmit } = useChat();

 return (
  <div className="space-y-4 flex flex-col items-center">
   <div className="flex space-x-3">
    <Avatar className="h-8 w-8">
     {/* <AvatarImage alt="Quinn" src="/quinn-avatar.jpg" /> */}
     <AvatarFallback>Q</AvatarFallback>
    </Avatar>
    <div className="p-3 rounded-full    font-plus-jakarta-medium bg-gradient-to- text-stem-green-500 from-purple-400 to-blue-500 ">
     Hello! How can I assist you today?
    </div>
   </div>
   <div className="flex space-x-3 justify-end">
    <div className="p-3 rounded bg-white text-gray-900">
     I need help with my account.
    </div>
   </div>
  </div>
 );
}

export default Message;
