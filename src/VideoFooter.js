import React from 'react';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const VideoFooter = () => {
  return (
    <div className='videoFooter'>
      <div className='videoFooter_text'>
        <h3>@sohaibfurqan</h3>
        <p>This is a description</p>
        <MusicNoteIcon />
      </div>
      <img
        src='https://static.thenounproject.com/png/934821-200.png'
        alt=''
        className='videoFooter_record'
      />
    </div>
  );
};

export default VideoFooter;
