import React, { useEffect, useState } from "react";
import HighScore from "./HighScore";
import NavBar from "./NavBar";
import { StyledHighScoreSorter } from "./styles/StyledHighScoreSorter";

function HighScoreSorter({highScores}) {


    return (
        <StyledHighScoreSorter>
            <NavBar />
            <ul>
                {highScores.map(highScore => (
                    <HighScore  key={highScore.id} name={highScore.name} highscore={highScore.highscore}/>
                ))}
            </ul>
        </StyledHighScoreSorter>
    );
}

export default HighScoreSorter;