import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../constants/constants";
import Video from "./Video";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getMostPopularVideos();
  }, []);

  const getMostPopularVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const json = await response.json();

    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap mt-5 cursor-pointer rounded-lg">
      {videos.map((video) => {
        const { snippet, statistics } = video;
        return (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <Video snippet={snippet} statistics={statistics} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
