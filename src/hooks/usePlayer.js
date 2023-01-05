import { useState, useCallback } from 'react';

// Imported Constants and Functions
import { TETRIMINOS, randomTetrimino } from '../tetriminos';
import { STAGE_HEIGHT, STAGE_WIDTH, checkCollision } from '../helpers';

export const usePlayer = () => {

  // State
  const [player, setPlayer] = useState({
    tetrimino: TETRIMINOS[0].shape,
    pos: { x: 0, y: 0 },
    collided: false,
  });

  // Reset player
  const resetPlayer = useCallback(() => {
    const newTetrimino = randomTetrimino().shape;
    let offsetX;

    // Place tetrimino in the top-center of the stage
    switch (newTetrimino.length) {
      case 2: { offsetX = -1; break; }
      case 3: { offsetX = -2; break; }
      case 4: { offsetX = -2; break; }
      default: { offsetX = 0; break; }
    };

    setPlayer({
      pos: { x: STAGE_WIDTH / 2 + offsetX, y: 0 },
      tetrimino: newTetrimino,
      collided: false,
    });
  }, []);

  // Update Player

  const rotate = (prevMtrx, dir) => {
    
    // Transpose rows and columns
    const rotatedMtrx = prevMtrx.map((row, i) => prevMtrx.map(column => column[i]));

    // dir = 1 is clockwise, dir = -1 is counterclockwise
    // Reverse each row
    return (dir > 0) ? rotatedMtrx.map(row => row.reverse()) : rotatedMtrx.reverse();
  };

  const rotatePlayer = (stage) => {
    // Defaults to clockwise rotation
    let dir = 1;

    // Deep clone the player object
    const clonedPlayer = JSON.parse(JSON.stringify(player));

    // Rotate the cloned player's tetrimino
    clonedPlayer.tetrimino = rotate(clonedPlayer.tetrimino, dir);

    // Account for rotation during collision

    // Holds the current x position of the player
    const tempPos = clonedPlayer.pos.x;
  
    // Amount of spaces to shift the player
    let offset = 1;

    // Shift the player while colliding
    while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
      
      // Shift the player's x position
      clonedPlayer.pos.x += offset;

      // Change the offset to one more unit in the opposite direction
      offset = -1 * (offset + (offset > 0 ? 1 : -1));
      
      if (offset > clonedPlayer.tetrimino[0].length) {
        // Rotate the player counterclockwise if the offset is greater than the tetrimino side length
        rotate(clonedPlayer.tetrimino, -dir);

        // Set the player's x position to the original x position
        clonedPlayer.pos.x = tempPos;
        return;
      };
    };

    setPlayer(clonedPlayer);
  };

  const updatePlayerPos = ({ x, y, collided }) => {
    // The position to set the player to
    const newPos = {x: player.pos.x + x, y: player.pos.y + y};

    // Adjust position to handle collision at right stage boundary
    newPos.x = newPos.x > STAGE_WIDTH - x ? STAGE_WIDTH - x : newPos.x;

    // Adjust position to handle collision at bottom stage boundary
    newPos.y = newPos.y > STAGE_HEIGHT - y ? STAGE_HEIGHT - y : newPos.y

    setPlayer(prev => ({
      pos: { x: newPos.x, y: newPos.y },
      tetrimino: prev.tetrimino,
      collided: collided,
    }));
  };

  return [player, updatePlayerPos, resetPlayer, rotatePlayer];

};