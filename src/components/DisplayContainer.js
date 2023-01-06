import React from "react";

// Styled Component
import { StyledDisplayContainer } from './styles/StyledDisplayContainer';

// Child Components
import Display from './Display';
import StartButton from './StartButton';
import HighScoreForm from './HighScoreForm';

function DisplayContainer({gameOver, score, rows, level, handleStartGame }) {

    return (
        <StyledDisplayContainer>
          {gameOver ? (
            <>
            <Display gameOver={gameOver} text="Game Over" />
            <HighScoreForm score={score} />
            </>
          ) : (
            <div>
              <Display text={`Score: ${score}`} />
              <Display text={`Rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
            </div>
          )}
          {/*Wait on Alexa to determine whether to change this name to Button*/}
          <StartButton callback={handleStartGame}/>
        </StyledDisplayContainer>
    );
};

export default DisplayContainer;