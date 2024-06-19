import React, { useState } from "react";
import { inboxData } from "./MockData";
import Image from "next/image";
import { ArrowLeftIcon } from "../../dashboardretailer/svg/SvgIcons";
import ChatBox from "./ChatBox";
import EmptyInbox from "./assets/emptyinbox.png"


export default function Inbox() {
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  const handleBackClick = () => {
    setSelectedChat(null);
  };

  return (
    <div className="bg-white rounded-xl border border-[#E3E5E5] w-[100%] pb-4 h-auto">
      <div className="py-[13px] whitespace-nowrap text-[14px] flex items-center gap-2.5 leading-[21.79px] font-semibold px-5">
        {selectedChat ? (
          <>
            <ArrowLeftIcon onClick={handleBackClick} className="cursor-pointer" />
            <Image src={selectedChat.avatar} width={30} height={30} className="rounded-full mr-2" alt="" />
            {selectedChat.receiver_name}
          </>
        ) : (
          "Inbox"
        )}
      </div>
      <hr className="bg-[#DADADA]" />
      {!selectedChat && (
        <div className="flex flex-col chat_list w-full h-[570px] overflow-y-auto border-r">
          {inboxData.length === 0 ? (
            <div className="mx-auto max-w-[600px] p-4 text-center flex flex-col mt-[120px] items-center justify-center font-medium">
            <Image src={EmptyInbox} width={192.81} height={150} alt="" />
            <p className="text-2xl font-semibold mb-2.5 mt-5">You don't have any messages</p>
            <p className="text-sm">In this space, you'll have access to every message we send your way. Keep an eye out!</p>
          </div>
          ) : (
            inboxData.map((chat) => (
              <div
                key={chat.id}
                className="flex gap-2.5 hover:bg-gray-100 p-5 cursor-pointer"
                onClick={() => handleChatClick(chat)}
              >
                <Image src={chat.avatar} width={48} height={48} className="rounded-full" alt="" />
                <div className="flex flex-col w-full">
                  <div className="flex justify-between w-full">
                    <span className="receiver_name">{chat.receiver_name}</span>
                    <span className="lastMsgDate">{chat.lastMsgDate}</span>
                  </div>
                  <span className="lastMsg">{chat.lastMsg}</span>
                </div>
              </div>
            ))
          )}
        </div>
      )}
      {selectedChat && <ChatBox selectedChat={selectedChat} handleBackClick={handleBackClick} />}
    </div>
  );
}
 