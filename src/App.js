import React from 'react';
import Video from './Video';

const App = () => {
  return (
    <div className='app'>
      <div className='app_videos'>
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
};

export default App;
