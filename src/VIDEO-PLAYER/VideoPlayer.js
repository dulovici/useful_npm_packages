import React from 'react';
import './videoPlayer.scss';
import ReactPlayer from 'react-player';

export const VideoPlayer = () => {
    return (
        <div className='video'>
            <ReactPlayer 
            url='https://www.youtube.com/watch?v=7sDY4m8KNLc&list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM&index=13&ab_channel=Codevolution' 
            controls
            width='480px'
            height='240px'
            onReady={() => console.log('onReady callback')}
            onStart={() => console.log('onStart callback')}
            onPause={() => console.log('onPause callback')}
            onEnded={() => console.log('onEnded callback')}
            onError={() => console.log('onError callback')}
            />
        </div>
    )
}



// https://www.npmjs.com/package/react-player  REACT-PLAYER DOCUMENTATION;