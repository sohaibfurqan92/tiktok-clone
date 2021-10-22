import React, { useRef, useState } from 'react';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) => {
  const [play, setPlay] = useState(false);

  const videoRef = useRef(null);

  const onVideoPress = () => {
    setPlay(!play);
    if (play) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <div className='video'>
      <video
        src={url}
        className='video-player'
        loop
        ref={videoRef}
        onClick={onVideoPress}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
};

export default Video;
