import React from "react";

const Comment = ({ comment }) => {
  return (
    <div className="flex flex-row shadow-lg">
      <img
        className="h-10 m-2"
        src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
        alt="user"
      />
      <div className="flex flex-col">
        <div className="font-bold text-lg">{comment.name}</div>
        <div className="text-sm">{comment.text}</div>
      </div>
    </div>
  );
};

export default Comment;
