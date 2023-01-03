export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => {
    return Array.from(Array(STAGE_HEIGHT)).fill(Array(STAGE_WIDTH).fill([0, "clear"]));
    
};

export const checkCollision = (player, stage, {x: moveX, y: moveY}) => {
    const stageHeight = stage.length;
    const stageWidth = stage.width;

    for (let y = 0; y < player.tetrimino.length; y++) {
        for (let x = 0; x < player.tetrimino[y].length; x++) {
            if (player.tetrimino[y][x] !== 0) {
                let newPosY = y + player.pos.y + moveY;
                let newPosX = x + player.pos.x + moveX;

                if (
                    (newPosY < 0 || newPosY > stageHeight) ||
                    (newPosX < 0 || newPosX > stageWidth) ||
                    (stage[newPosY][newPosX] !== "clear")
                    ) {
                        return true;
                    }
            }
        }
    };

    return false;
};