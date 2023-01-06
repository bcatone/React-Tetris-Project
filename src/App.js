import React, { useState, useEffect } from "react";
import Tetris from "./components/Tetris"
import Settings from "./components/Settings"
import HighScoreSorter from "./components/HighScoresSorter"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  // States      
  const [settings, setSettings] = useState({
    theme: "retro",
    baseSpeed: 1000,
  });
  const [highScores, setHighScores] = useState([]);
    
  useEffect(() => {
        fetch("http://localhost:8000/Highscores")
            .then(resp => resp.json())
            .then(highScores => setHighScores(highScores))
    }, []);


  const handleSubmitSettings = (newSettings) => {
    if (settings !== newSettings) {
      setSettings(newSettings);
    }
  };

  const handleHighScoreSubmit = ({newName, newScore}) => {

    // Alexa's POST request from the HighScoreForm component
    fetch("http://localhost:8000/Highscores", {
            method: "POST",
            headers: {
            "Content-Type": 'application/json',
            },
            body: JSON.stringify({newName, newScore})
        })
        .then(resp => resp.json())
        .then(newHighScore => setHighScores([...highScores, {newName: newScore}]))
  };

  // React Router
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
    }
  ]);

  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;

