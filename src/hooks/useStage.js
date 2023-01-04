import { useState, useEffect } from "react";

import { createStage, STAGE_HEIGHT, STAGE_WIDTH } from "../helpers";

export const useStage = (player, resetPlayer) => {
    const [stage, setStage] = useState(createStage());

    useEffect(() => {
        const updateStage = prevStage => {
            // Flush the stage
            const newStage = prevStage.map(row => row.map(cell => 
                cell[1] === "clear" ? [0, "clear"] : cell
            ));

            // Draw the tetrimino
            player.tetrimino.forEach((row, y) => {
                row.forEach((value, x) => {

                    // Check if the cell is an actual tetrimino piece and not empty space
                    if (value !== 0) {
                        const newY = y + player.pos.y >= STAGE_HEIGHT ? STAGE_HEIGHT - y : y + player.pos.y
                        console.log(newY);

                        const newX = Math.abs(x + player.pos.x >= STAGE_WIDTH ? STAGE_WIDTH - x : x + player.pos.x)
                        
                        newStage[newY][x + player.pos.x] = [
                            value,
                            `${player.collided ? "merged" : "clear"}`
                        ]
                    };
                });
            });

            // Check collision
            if (player.collided) {
                resetPlayer();
            };

            return newStage;
        };
        
        let next = updateStage(stage);
        setStage(prev => next);

    }, [player, resetPlayer]);

    

    return [stage, setStage];
};