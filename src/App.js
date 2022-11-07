import './App.css';
import data from './data';
import { useState, useEffect } from 'react';
import Canvas from './components/Canvas';
import Slider from './components/Slider';
import Header from './components/Header';

const App = () => {

  // create local state to manage start/pause 
  const [isPaused, setIsPaused] = useState(false);

  // create local state to control the frames
  const [frame, setFrame] = useState(0);

  // function that switch betweeb start and pause
  const togglePause = () => {

    setIsPaused(!isPaused);

  };

  // stream players IDs and positions

  const playerPosition = data.player_positions[frame]; // every 100ms a new array of players data (IDs, coordinates) saves to playerPosition variable. playerPosition transfers as a props to Canvas.jsx

  useEffect(() => {

    if (isPaused || frame === data.player_positions.length - 1) {
      return; // do nothing if last frame is reached or pause button pressed
    }

    const frameTimeOut = setTimeout(() => {

      setFrame((prevFrame) => prevFrame + 1); // add +1 to frame counter every 100ms and save the frame array to the playerPosition, that transfers as a props to Canvas.jsx

    }, data.interval); // interval value (100ms) is set in data.js

    return () => {

      clearTimeout(frameTimeOut); // clearing timeout
    };

  }, [frame, isPaused]); // conditions to respond

  return (

    <div className="App">

      <Header />

      <Canvas
        playerPosition={playerPosition} // tranfer playerPosition to Canvas.jsx as a props to further data processing

        togglePause={togglePause} // I wanna to control start/pause by clicking on the game field, so I have to transfer this toggle function tp the Canvas.jsx too
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
