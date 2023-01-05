import React, { useState, useEffect } from "react";
import Tetris from "./components/Tetris"
import Settings from "./components/Settings"
import HighScores from "./components/HighScore"
import NavBar from "./components/NavBar"
import HighScoreSorter from "./components/HighScoresSorter"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Tetris />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
    {
    path: "/highscores",
    element: <HighScoreSorter /> ,
  },
]);



function App() {      
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;

