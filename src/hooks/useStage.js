import { useState, useEffect } from 'react';

// Imported Constants and Functions
import { createStage } from '../helpers';

export const useStage = (player, resetPlayer) => {
  // States
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {

    setRowsCleared(0);

    const sweepRows = newStage => newStage.reduce((unclearedRows, row) => {
      
      // Check if a row has no empty cells
      if (row.findIndex(cell => cell[0] === 0) < 0) {

        // Update the number of rows cleared
        const newRowsCleared = rowsCleared + 1;
        setRowsCleared(prev => newRowsCleared);

        // Replace the bottom row with an empty row and return
        unclearedRows.unshift(new Array(newStage[0].length).fill([0, 'clear']));
          return unclearedRows;
        }

        // Add the uncleared row to the top
        unclearedRows.push(row);
        return unclearedRows;
      }, []);

    const updateStage = prevStage => {

      // Flush the stage
      const newStage = prevStage.map(row =>
        row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
      );

      // Draw the player's tetrimino
      player.tetrimino.forEach((row, y) => {
        row.forEach((value, x) => {

          // Check if the cell is not empty space
          if (value !== 0) {

            // Replace the cells with the tetrimino
            const newPos = {x: x + player.pos.x, y: y + player.pos.y};
            newStage[newPos.y][newPos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`,
            ];
          }
        });
      });

      // Sweep the rows if the player has collided
      if (player.collided) {
        resetPlayer();
        return sweepRows(newStage);
      }

      // Return the new stage
      return newStage;
    };

    // Update the stage with the new stage returned by updateStage
    setStage(prev => updateStage(prev));
  }, [
    player,
    resetPlayer,
    rowsCleared
  ]);

  return [stage, setStage, rowsCleared];
};