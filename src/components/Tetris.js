import React, { useState } from 'react';

// Custom Hooks
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';

// Imported Functions
import { createStage, checkCollision as isCollisionDetected } from '../helpers';

// Styled Components
import {StyledTetrisWrapper} from './styles/StyledTetrisWrapper';
import { StyledTetris } from './styles/StyledTetris';

// Child Components
import Stage from './Stage';
import DisplayContainer from './DisplayContainer';

import NavBar from "./NavBar"
import HighScoreForm from "./HighScoreForm";

function Tetris({settings}) {

  // States
  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [gameOver, setGameOver] = useState(false);
  const [dropTime, setDropTime] = useState(null);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

  console.log(settings.baseSpeed);

  // Game Statuses
  const handleStartGame = () => {
    setDropTime(settings.baseSpeed);
    setStage(createStage());
    resetPlayer();
    setScore(0);
    setRows(0);
    setLevel(1);
    setGameOver(false);
  };

  // Starts dropping the tetrimino when the game starts
  useInterval(() => {
    drop();
  }, dropTime);

  const activateDropTime = (modifier) => {
    setDropTime(settings.baseSpeed / level + modifier);
  };

  const handleNextLevel = () => {
    // Increase level number
    let nextLevel = level + 1;
    setLevel(prev => nextLevel);

    // Increase player speed
    activateDropTime(100);
  };

  // Player Movement
  const drop = () => {

    // Advance to next level when 10 rows are cleared
    if (rows > (level + 1) * 10) {
      handleNextLevel();

      // Drop the player down if no collision is detected
    } else if (!isCollisionDetected(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });

      // Game over if the player is above the top boundary
    } else if (player.pos.y < 1) {
      if (player.pos.y < 1) {
        setGameOver(true);
        setDropTime(null);
      }

      // Mark the cells as collided so they do not disappear when the player is reset
    } else {
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };


  // Player Controls
  const movePlayerHoriontally = dir => {
    if (!isCollisionDetected(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };


  // Handle keyboard controls
  const move = ({ keyCode }) => {
    if (!gameOver) {
      switch(keyCode) {

        // Left arrow: move left
        case 37: {
          movePlayerHoriontally(-1);
          break;
        }

        // Right arrow: move right
        case 39: {
          movePlayerHoriontally(1);
          break;
        }

        // Down arrow: drop
        case 40: {
          dropPlayer();
          break;
        }

        // Up arrow: rotate player
        case 38: {
          playerRotate(stage);
          break;
        }

        // Do nothing if another key is pressed
        default: break;
      }
    }

   };

   // Handle key release
  const onKeyUp = ({ keyCode }) => {
    if (!gameOver) {

      switch (keyCode) {

        // Down key released: reactivate the interval
        case 40: {
          activateDropTime(0);
          break;
        }
        default: {
          break;
        }
      }
    }
  };

  return (
    <div>
      <NavBar />
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={e => move(e)}
      onKeyUp={onKeyUp}
    >
      <StyledTetris>
        <Stage stage={stage} />
        <DisplayContainer 
          gameOver={gameOver} 
          score={score}
          rows={rows}
          level={level}
          handleStartGame={handleStartGame}
        />
      </StyledTetris>
    </StyledTetrisWrapper>
    </div>
  );
};


export default Tetris;