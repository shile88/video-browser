import "../assets/styles/VideoComments.css";

import React, { useEffect, useState } from "react";

import youtubeComments from "../api/youtubeComments";

const VideoComments = ({ selectedVideo }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function getComments() {
      await youtubeComments
        .get("/commentThreads", {
          params: {
            videoId: selectedVideo.id.videoId,
          },
        })
        .then((response) => {
          setComments(response.data.items);
        })
        .catch((reason) => {
          console.log(reason);
        });
    }
    getComments();
  }, [selectedVideo.id.videoId]);

  return (
    <>
      {comments.map((comment) => {
        return (
          <div className="item comments-item" key={comment.id}>
            <div className="ui avatar image">
              <img
                src={
                  comment.snippet.topLevelComment.snippet.authorProfileImageUrl
                }
                alt=""
              />
            </div>
            <div className="content comments-content">
              <h2 className="header">
                {comment.snippet.topLevelComment.snippet.authorDisplayName}
              </h2>

              <div className="description">
                <p>{comment.snippet.topLevelComment.snippet.textOriginal}</p>
              </div>
              <div className="extra">
                <div className="ui right floated label">
                  <i className="thumbs up icon"></i>
                  {comment.snippet.topLevelComment.snippet.likeCount}
                </div>
                <div className="ui label">
                  {comment.snippet.topLevelComment.snippet.publishedAt
                    .replace("T", " / ")
                    .replace("Z", " ")}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default VideoComments;
