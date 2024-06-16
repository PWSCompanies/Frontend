import Image from "next/image";
import React from "react";
import { Button } from "../../CustomComponent";
import { AttachmentIcon, SendIcon } from "../svg/SvgIcons";

export default function ChatBox({ selectedChat }) {
  const formatDate = (date) => {
    const options = { weekday: "long", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const currentDate = formatDate(new Date());

  return (
    <div className="w-full relative h-[570px]">
      <div className="max-h-[510px] min-h-[510px] overflow-y-auto p-5">
        <div className="text-center text-gray-500 text-sm mb-1">
          {currentDate}
        </div>
        {selectedChat.conversation.map((msg) => (
          <div key={msg.id} className="grid mb-2">
            <div className={`flex gap-2.5 ${ msg.sender === "You" ? "flex-row-reverse" : "" }`} >
              <div className="">
                <Image src={msg.avatar} width={30} height={32} className={`rounded-full ${ msg.sender === "You" ? "ml-2" : "mr-2" }`} alt="" />
              </div>
              <div className="">
                <h5 className={`text-gray-900 text-sm font-semibold leading-snug pb-1 ${ msg.sender === "You" ? "text-right" : "" }`} >
                  {msg.sender}
                </h5>
                <div className={`px-3.5 py-2 rounded justify-start flex items-center gap-3 ${ msg.sender === "You" ? "bg-green-200 text-black" : "bg-gray-100 text-gray-900" }`} >
                  {msg.message ? (
                    <p className="text-sm font-normal">{msg.message}</p>
                  ) : (
                    <Image src={msg.imageUrl} width={150} height={150} className="rounded-md" alt="Sent Image" />
                  )}
                </div>
                <div className="mb-2">
                  <h6 className={`text-gray-500 text-xs font-normal leading-4 py-1 ${ msg.sender === "You" ? "text-left" : "text-right" }`} >
                    {msg.time}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute px-5 bottom-0">
        <div className="w-full pl-3 pr-1 py-1 rounded-3xl border border-gray-200 items-center gap-2 flex justify-between">
          <div className="w-full">
            <input className="grow shrink basis-0 w-full text-black text-sm font-normal leading-4 border-none outline-none focus:border-transparent focus:ring-0" placeholder="Type here..."/>
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="file-input" className="cursor-pointer flex items-center" >
              <AttachmentIcon />
            </label>
            <input type="file" id="file-input" className="hidden" />
          </div>
          <div className="flex items-center gap-2">
            <Button
              customStyles={{
                padding: "px-3 py-2",
                rounded: "rounded-full",
                customClasses: "max-w-max h-[40px]",
              }}
            >
              <SendIcon />
              <h3 className="text-white text-xs font-semibold leading-4 px-2">
                Send
              </h3>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
