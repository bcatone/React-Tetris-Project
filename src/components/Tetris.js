import React, { useState } from "react";

import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";

import { createStage, checkCollision } from "../helpers";

import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";

import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

function Tetris() {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer] = usePlayer();
    const [stage, setStage] = useStage(player);

    const startGame = () => {
        setStage(createStage());
        resetPlayer();
    }

    const drop = (dir) => {
        if (!checkCollision(player, stage, {x: 0, y: 1}))
        updatePlayerPos({x: 0, y: 1, collided: false})
    };

    const dropPlayer = () => {
        drop();
    };

    const move = ({keyCode}) => {
        if (!gameOver) {
            console.log(keyCode);
            switch (keyCode) {
                case 37: {
                    movePlayer(-1);
                    break;
                }
                case 39: {
                    movePlayer(1);
                    break;
                }
                case 40: {
                    dropPlayer();
                    break;
                }
                default: {
                    break;
                }
            }
        }
    };

    const movePlayer = (dir) => {
        if (!checkCollision(player, stage, {x: dir, y: 0}))
        updatePlayerPos({x: dir, y: 0, collided: false});
    };

    return (
        <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
            <StyledTetris>
                <Stage stage={stage} />
                <aside>
                    {gameOver ? (
                        <Display gameOver={gameOver} text="Game Over" />
                    ) : (
                        <div>
                            <Display text="Score" />
                            <Display text="Rows" />
                            <Display text="Level" />
                        </div>
                    )}
                    <StartButton callback={startGame}/>
                </aside>

            </StyledTetris>
        </StyledTetrisWrapper>
    );
}

export default Tetris;