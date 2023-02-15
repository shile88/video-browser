import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, setSelectedVideo }) => {
  return (
    <div className="ui divided items">
      {videos.map((video) => {
        return (
          <VideoItem
            key={video.id.videoId}
            video={video}
            setSelectedVideo={setSelectedVideo}
          />
        );
      })}
    </div>
  );
};

export default VideoList;
