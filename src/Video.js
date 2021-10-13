import React, { useRef, useState } from 'react';
import VideoFooter from './VideoFooter';

const Video = () => {
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
        src='https://v39-eu.tiktokcdn.com/348cd1567bd893c1d3d56d9b142ae597/61671070/video/tos/useast2a/tos-useast2a-ve-0068c001/2939b8addd4d4c19ba0da6539fb2e033/?a=1233&br=4534&bt=2267&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=98CxReTx4kag3&l=202110131059180101890741450701E848&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajR4bmg6ZmczODMzNzczM0ApNWU5ZmU3NGQ0NzU1MztkNWcycGJvcjRvY2dgLS1kMTZzczMvXzUwLWExLjZiYDNhM2M6Yw%3D%3D&vl=&vr='
        className='video-player'
        loop
        ref={videoRef}
        onClick={onVideoPress}
      ></video>
      <VideoFooter />
    </div>
  );
};

export default Video;
