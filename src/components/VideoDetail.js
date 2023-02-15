import '../assets/styles/VideoDetail.css';

import React from "react";
import VideoComments from "./VideoComments";

const VideoDetail = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <div className="ui active loader"></div>;
  }

  return (
    <div>
      <div className="ui embed ">
        <iframe src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`} allowFullScreen title="Video player" />
      </div>
      <div className="ui red inverted segment">
        <h2 className="ui header">{selectedVideo.snippet.title}</h2>
        <p>{selectedVideo.snippet.description}</p>
      </div>
      <div className="ui divided items">
        <div className='comments-section-title'>Comments section</div>
        <VideoComments selectedVideo={selectedVideo} />
      </div>
    </div>
  );
};

export default VideoDetail;
