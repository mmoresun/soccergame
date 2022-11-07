import './App.css';
import data from './data';
import { useState, useEffect } from 'react';
import Canvas from './components/Canvas';
import Slider from './components/Slider';
import Header from './components/Header';

const App = () => {

  const [isPaused, setIsPaused] = useState(false);

  const [frame, setFrame] = useState(0);

  const togglePause = () => {

    setIsPaused(!isPaused);

  };

  // this streams players IDs and positions

  const playerPosition = data.player_positions[frame];

  useEffect(() => {

    if (isPaused || frame === data.player_positions.length - 1) { // do nothing if last frame is reached or pause button pressed
      return;
    }

    const frameTimeOut = setTimeout(() => {

      setFrame((prevFrame) => prevFrame + 1); // counter adds +1 to frames every 100ms

    }, data.interval); // ... as it set in data.js

    return () => {

      clearTimeout(frameTimeOut);
    };

  }, [frame, isPaused]);

  return (

    <div className="App">

      <Header />

      <Canvas
        playerPosition={playerPosition}
        togglePause={togglePause}
      />

      <Slider
        isPaused={isPaused}
        togglePause={togglePause}
        setFrame={setFrame}
        frame={frame}
        data={data}
      />

      <h6>All players positions are stored in a huge array of almost 3000 elements. "Frames" change 10 times per second. Poweed by React. <a href="https://github.com/mmoresun/soccergame/">Source code on Github</a></h6>      
    </div>
  );
}

export default App;
