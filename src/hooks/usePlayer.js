import { useCallback, useState } from "react";
import { STAGE_WIDTH } from "../helpers";

import { TETRIMINOS, randomTetrimino } from "../tetriminos";

export const usePlayer = () => {
    const [player,  setPlayer] = useState({
        pos: {x: 0, y: 0},
        tetrimino: TETRIMINOS[0].shape,
        collided: false,
    });

    const updatePlayerPos = ({x, y, collided}) => {
        setPlayer(prev => ({
            ...prev,
            pos: {x: (prev.pos.x += x), y: (prev.pos.y += y)},
            collided
        }));
    };

    const resetPlayer = useCallback(() => {
        const newTetrimino = randomTetrimino();
        let offsetX;
        console.log(newTetrimino.shape.length);

        switch (newTetrimino.shape.length) {
            case 2: {offsetX = -1; break;}
            case 3: {offsetX = -2; break;}
            case 4: {offsetX = -2; break;}
            default: {offsetX = 0; break;}
        };
        
        setPlayer({
            pos: {x: STAGE_WIDTH / 2 + offsetX, y: 0},
            tetrimino: newTetrimino.shape,
            collided: false
        });

    }, []);

    return [player, updatePlayerPos, resetPlayer];
};