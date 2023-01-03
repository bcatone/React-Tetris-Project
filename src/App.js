import React, { useState } from "react";
import Tetris from "./components/Tetris";

function App() {
  const [page, setPage] = useState("Tetris");

  return (
    <Tetris />
  )
}

export default App;