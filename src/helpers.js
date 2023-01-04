export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => {
    return Array.from(Array(STAGE_HEIGHT)).fill(Array(STAGE_WIDTH).fill([0, "clear"]));
    
};

export const checkCollision = (player, stage, {x: moveX, y: moveY}) => {
    const stageHeight = stage.length;
    const stageWidth = stage[0].length;
    const playerHeight = player.tetrimino.length;
    //const playerWidth = player.tetrimino.shape[0].length;

    for (let r = 0; r < playerHeight; r++) {
        for (let c = 0; c < playerHeight; c++) {

            // Check if the cell is an actual tetrimino piece and not empty space
            if (player.tetrimino[r][c] !== 0) {

                // The projected moves to be checked
                const projPosY = r + player.pos.y + moveY;
                const projPosX = c + player.pos.x + moveX;

                // Check collisions
                if (
                    // Projected position is undefined
                    (!stage[projPosY] || !stage[projPosY][projPosX]) ||

                    // Projected position would hit the boundaries
                    //(projPosX < 0 || projPosX >= playerHeight - c || projPosY >= stageHeight - r) ||

                    // Projected position is already occupied
                    stage[projPosY][projPosX][1] !== "clear"
                ) {
                    return true;
                };
            };
        };

        // If this point is reached, no collision was detected
        return false;
    };
};