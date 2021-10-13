import React from 'react';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker';

const VideoFooter = () => {
  return (
    <div className='videoFooter'>
      <div className='videoFooter_text'>
        <h3>@sohaibfurqan</h3>
        <p>This is a description</p>
        <div className='videoFooter_ticker'>
          <MusicNoteIcon className='videoFooter_icon' />
          <Ticker mode='smooth'>
            {({ index }) => (
              <>
                <p>Yooooo people! I love you!</p>
              </>
            )}
          </Ticker>
        </div>
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
