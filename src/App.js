import React, { useState, useEffect } from "react";
import Tetris from "./components/Tetris";
import Settings from "./components/Settings";
import About from "./components/About";
import HighScoreSorter from "./components/HighScoresSorter";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { StyledHighScore } from "./components/styles/StyledHighScore";

function App() {
  const [highScores, setHighScores] = useState([])
  const [settings, setSettings] = useState({
    theme: "retro",
    baseSpeed: 1000,
  });



  const handleHighScoreSubmit = ({name, highscore}) => {
  
          fetch("http://localhost:8000/Highscores", {
            method: "POST",
            headers: {
            "Content-Type": 'application/json',
            },
            body: JSON.stringify({name, highscore})
        })
        .then(resp => resp.json())
        .then(newHighScore =>  {
          console.log(highScores)
          console.log(newHighScore)
          console.log('updated',[...highScores, newHighScore])
          setHighScores([...highScores, newHighScore])
        })
    };

    const handleSubmitSettings = (newSettings) => {
    if (settings !== newSettings) {
      setSettings(newSettings);
    }
  };


const router = createBrowserRouter([
  {
    path: "/",
    element: <Tetris settings={settings} handleHighScoreSubmit={handleHighScoreSubmit}/>,
  },
  {
    path: "/settings",
    element: <Settings settings={settings} handleSubmitSettings={handleSubmitSettings}/>,
  },
  {
    path: "/highscores",
    element: <HighScoreSorter highScores={highScores}/> ,
  },
  {
    path: "/about",
    element: <About />,
  }
]);

   useEffect(() => {
        fetch("http://localhost:8000/Highscores")
            .then(resp => resp.json())
            .then(scores => setHighScores(scores))
    }, [])



  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;

