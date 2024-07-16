import React from "react";

const Video = ({ snippet, statistics }) => {
  return (
    <div className="w-64 shadow-lg hover:scale-110 ease-in-out duration-500">
      <div className="p-2">
        <img
          className="w-full rounded-lg"
          src={snippet.thumbnails.medium.url}
          alt="thumbnail"
        />
        <div className="text-sm font-bold">{snippet.title}</div>
        <div className="text-sm font-semibold">{snippet.channelTitle}</div>
        <div className="flex justify-between">
          <div className="text-sm">👁️ {statistics.viewCount}</div>
          <div className="text-sm">
            👍{" "}
            {statistics.likesCount
              ? statistics.likesCount
              : statistics.likeCount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
