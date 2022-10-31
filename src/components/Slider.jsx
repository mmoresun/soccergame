import React from 'react';

const Slider = ({ isPaused, togglePause, setFrame, frame, data }) => {

    const handleSliderChange = (e) => {

        setFrame(Math.round(e.target.value * 29.78))
    }

    return (
        <>
            <div>
                <i
                    className="fa-solid fa-backward"
                    onClick={() => frame > 100 ? setFrame((prevFrame) => prevFrame - 100) : setFrame(0)}
                    style={{ color: 'blue' }}
                    title='Rewind 10 seconds'
                />

                {isPaused
                    ? <i
                        className="fa-solid fa-play"
                        style={{ color: 'blue', border: 'none', margin: '0 10px' }}
                        onClick={togglePause}
                        title='Play'
                    />
                    : <i
                        className="fa-solid fa-stop"
                        style={{ color: 'blue', border: 'none', margin: '0 10px' }}
                        onClick={togglePause}
                        title='Stop'
                    />
                }

                <i
                    className="fa-solid fa-forward"
                    onClick={() => frame < data.player_positions.length - 100 ? setFrame((prevFrame) => prevFrame + 100) : setFrame(data.player_positions.length - 1)}
                    style={{ color: 'blue' }}
                    title='Fast forward 10 seconds'
                />

            </div>

            <input
                type='range'
                value={Math.floor(frame / 29.78)}
                onChange={handleSliderChange}
            />

        </>
    );
}

export default Slider;
