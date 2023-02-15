import "../assets/styles/VideoItem.css";

import React from "react";

const VideoItem = ({ video, setSelectedVideo }) => {
  const handleSelectedVideo = () => {
    setSelectedVideo(video);
  };

  return (
    <div className="item video-item" onClick={handleSelectedVideo}>
      <div className="ui small image">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.desciption}
        />
      </div>

      <div className="video-list-title">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
