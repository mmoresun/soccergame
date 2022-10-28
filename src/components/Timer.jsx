import React from 'react';

const Timer = ({ frame }) => {

    const minutes = Math.floor(frame / 600 % 60);    
    const seconds = Math.floor(frame / 10 - minutes * 60);

    return (
        <div>
            <h3>{minutes}:{seconds < 10 ? '0'+seconds : seconds}</h3>
        </div>
    );

}

export default Timer;
