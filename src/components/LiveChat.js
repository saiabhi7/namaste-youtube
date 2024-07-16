import React, { useEffect } from "react";
import Chat from "./Chat";
import { useDispatch, useSelector } from "react-redux";
import { addChatMessages } from "../utils/chatSlice";
import {
  generateRandomName,
  generateRandomString,
} from "../utils/randomNameGenerator";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addChatMessages({
          name: generateRandomName(),
          message: generateRandomString(30),
        })
      );
    }, 15000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mx-2 border bg-green-200 h-[350px] overflow-y-scroll flex flex-col-reverse">
      {chatMessages.map((chat, index) => (
        <Chat key={index} name={chat.name} message={chat.message} />
      ))}
    </div>
  );
};

export default LiveChat;
