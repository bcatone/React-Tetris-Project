import React, { useState } from "react";
import {StyledHighScore} from './styles/StyledHighScore';

function HighScore( { name, highscore} ) {
  return (
    <StyledHighScore>
        <h1>{name}</h1>
        <h1>{highscore}</h1>
    </StyledHighScore>
  );
}

export default HighScore;


