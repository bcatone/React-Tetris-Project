import React, { useState, useEffect } from "react";
import Tetris from "./components/Tetris"
import Settings from "./components/Settings"
import HighScoreSorter from "./components/HighScoresSorter"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  // State      
  const [settings, setSettings] = useState({
    theme: "retro",
    baseSpeed: 1000
  });

  const handleSubmitSettings = (newSettings) => {
    if (settings !== newSettings) {
      setSettings(newSettings);
    }
  };

  // React Router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Tetris settings={settings}/>,
    },
    {
      path: "/settings",
      element: <Settings settings={settings} handleSubmitSettings={handleSubmitSettings}/>,
    },
    {
      path: "/highscores",
      element: <HighScoreSorter /> ,
    }
  ]);

  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;

