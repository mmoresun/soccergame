import './App.css';
import data from './data';
import { useState, useEffect } from 'react';
import Canvas from './components/Canvas';
import Slider from './components/Slider';
import Timer from './components/Timer';

const App = () => {

  const [isPaused, setIsPaused] = useState(false);

  const [frame, setFrame] = useState(0);

  const togglePause = () => {

    setIsPaused(!isPaused);

  };

  const playerPosition = data.player_positions[frame];

  useEffect(() => {

    if (isPaused || frame === data.player_positions.length - 1) { // do nothing if paused or the last frame is reached
      return;
    }

    const frameTimeOut = setTimeout(() => { // counter that adds +1 to frames every 100ms (as it set in data.js)

      setFrame((prevFrame) => prevFrame + 1);

    }, data.interval);

    return () => {

      clearTimeout(frameTimeOut);
    };

  }, [frame, isPaused]);

  return (

    <div className="App">

      <Canvas
        playerPosition={playerPosition}
        togglePause={togglePause}
      />

      <Slider
        isPaused={isPaused}
        togglePause={togglePause}
        setFrame={setFrame}
        frame={frame}
      />

      <Timer
        frame={frame}
      />

      <h6><a href="https://github.com/mmoresun/soccergame/">Source code on Github</a></h6>
    </div>

  );
}

export default App;
