import React from 'react';

const Slider = ({ isPaused, togglePause, setFrame, frame }) => {

    const handleSliderChange = (e) => {

        console.log(e.target.value)
        setFrame(Math.round(e.target.value * 29.78))
    }

    return (
        <>
            <div>
                <div onClick={togglePause}>
                    {isPaused
                        ? <i className="fa-solid fa-play" style={{ color: 'blue', border: 'none' }}></i>
                        : <i class="fa-solid fa-stop" style={{ color: 'blue', border: 'none' }}></i>}
                </div>

                <input
                    type='range'
                    value={Math.round(frame / 29.78)}
                    onChange={handleSliderChange}
                />
            </div>
        </>
    );
}

export default Slider;
