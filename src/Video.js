import React, { useRef, useState } from 'react';

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
        src='https://v39-eu.tiktokcdn.com/92b9ee95a4f7ee889b112fecc1840391/6165d0c3/video/tos/useast2a/tos-useast2a-ve-0068c004/a5bb44a416824f6f90f439e95d16bf5a/?a=1233&br=1782&bt=891&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=98CxReTx4kag3&l=2021101212152301018907221650056E7D&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3V2dmc6Znc6ODMzNzczM0ApOjQ6ZjM5PDs4N2RoODppZ2dxbGovcjRnbWZgLS1kMTZzczI2XzJgMzU1Li9eMjVeYjU6Yw%3D%3D&vl=&vr='
        className='video-player'
        loop
        ref={videoRef}
        onClick={onVideoPress}
      ></video>
    </div>
  );
};

export default Video;
