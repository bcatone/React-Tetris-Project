export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () => Array(STAGE_WIDTH).fill([0, 'clear']));

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  
  // All of the tetriminos have square arrays
  const playerSize = player.tetrimino.length;

  for (let r = 0; r < playerSize; r++) {
    for (let c = 0; c < playerSize; c++) {

      // Check that the tetrimino cell is not empty
      if (player.tetrimino[r][c] !== 0) {

        // Calculate projected position
        const projPos = {x: c + player.pos.x + moveX, y: r + player.pos.y + moveY};

        // Make sure position is inside the stage
        if (projPos.y < 0 || projPos.y >= STAGE_HEIGHT) {
          return true;
        }

        if (projPos.x < 0 || projPos.x >= STAGE_WIDTH) {
          return true;
        }

        if (!stage[projPos.y][projPos.x]) {
          return true;
        }

        if (stage[projPos.y][projPos.x][1] !== "clear") {
          return true;
        }
      }
    }

  }

  // If this point is reached, no collision was detected.
  return false;
};