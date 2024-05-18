import React, { useState, useRef } from "react";
import './VideoComponent.css';

const VideoComponent = ({ video }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);
  const isPlayingRef = useRef(false); // Ref to track if the video is playing

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current.play()
      .then(() => {
        isPlayingRef.current = true;
      })
      .catch((error) => {
        console.error("Failed to play video:", error);
      });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (isPlayingRef.current) { // Check if video is playing before pausing
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      isPlayingRef.current = false;
    }
  };

  return (
      <video
        ref={videoRef}
        src={video.link} 
        loop
        muted
        className="video-thumbnail"
        style={{ filter: isHovered ? "none" : "brightness(0.5)",border: isHovered ? "2px solid green" : "2px solid #751177" }}
        autoPlay={false}
        onError={(e) => console.error("Video error:", e)}
        onCanPlay={() => console.log("Video can play")}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
  );
};

export default VideoComponent;
