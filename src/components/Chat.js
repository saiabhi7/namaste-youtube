import React from "react";

const Chat = ({ name, message }) => {
  return (
    <div className="p-2">
      <div className="flex items-center shadow-lg p-2">
        <img
          className="h-8 w-8"
          src="https://static-00.iconduck.com/assets.00/user-icon-1024x1024-dtzturco.png"
          alt="user"
        />
        <div className="px-2 font-bold text-xs">{name}</div>
        <div className="text-xs px-2 text-wrap whitespace-nowrap">
          {message}
        </div>
      </div>
    </div>
  );
};

export default Chat;
