import React from 'react';
import Timer from './Timer';

const Slider = ({ isPaused, togglePause, setFrame, frame, data }) => {

    const handleSliderChange = (e) => {

        setFrame(Math.round(e.target.value * 29.78))
    }

    return (
        <div className='slider'>
            <div>
                <i
                    className="fa-solid fa-backward"
                    onClick={() => frame > 100 ? setFrame((prevFrame) => prevFrame - 100) : setFrame(0)}
                    title='Rewind 10 seconds'
                />

                {isPaused
                    ? <i
                        className="fa-solid fa-play"
                        onClick={togglePause}
                        title='Play'
                    />
                    : <i
                        className="fa-solid fa-stop"
                        onClick={togglePause}
                        title='Stop'
                    />
                }

                <i
                    className="fa-solid fa-forward"
                    onClick={() => frame < data.player_positions.length - 100 ? setFrame((prevFrame) => prevFrame + 100) : setFrame(data.player_positions.length - 1)}
                    title='Fast forward 10 seconds'
                />

            </div>

            <input
                type='range'
                value={Math.floor(frame / 29.78)}
                onChange={handleSliderChange}
            />

            <Timer
                frame={frame}
            />

        </div>
    );
}

export default Slider;
