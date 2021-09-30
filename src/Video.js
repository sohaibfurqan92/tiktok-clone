import React from 'react';

const Video = () => {
  return (
    <div className='video'>
      <video
        src='https://v39-eu.tiktokcdn.com/c407606226e6be6d0e2c6e53202f7a92/61560a10/video/tos/alisg/tos-alisg-pve-0037/3307d00d0a7b4c3dae6118a9ea899e8b/?a=1180&br=5860&bt=2930&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&ft=98CxReTx4kag3&l=202109301303180101890651052F0F244B&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3Y6eWk6ZjpwODMzODgzNEApZDw4OjVpZ2U3N2U7MzVmO2dzaWpqcjRnZTNgLS1kLy1zc2MtMF9gMC4xYjY1NDEzMGI6Yw%3D%3D&vl=&vr='
        className='video-player'
        loop
      ></video>
    </div>
  );
};

export default Video;
