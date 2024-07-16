import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import Comments from "./Comments";
import LiveChat from "./LiveChat";
import { addChatMessages } from "../utils/chatSlice";

const WatchVideo = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const [params] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const handleLiveMessageSubmit = () => {
    dispatch(
      addChatMessages({
        name: "Sai Kumar",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex">
        <div>
          <iframe
            width="800"
            height="400"
            src={
              "https://www.youtube.com/embed/" +
              params.get("v") +
              "?si=h78PdLYVzpTWU5sc"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
          <form
            className="relative mx-2 mt-2 h-[40px]"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(
                addChatMessages({
                  name: "Sai Kumar",
                  message: liveMessage,
                })
              );
              setLiveMessage("");
            }}
          >
            <input
              className=" w-full border h-[90%] border-green-400 rounded-lg p-2"
              type="text"
              value={liveMessage}
              onChange={(e) => setLiveMessage(e.target.value)}
            />
            <img
              className="absolute h-9 top-0 right-1 p-1 cursor-pointer"
              src="https://static.thenounproject.com/png/3553333-200.png"
              alt="send"
              onClick={() => handleLiveMessageSubmit()}
            />
          </form>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default WatchVideo;
