import React, { useEffect, useState } from "react";
import HighScore from "./HighScore";
import NavBar from "./NavBar";

function HighScoreSorter({highScores}) {

    // Moved this to the App component
    // const [highScores, setHighScores] = useState([]);
    // useEffect(() => {
    //     fetch("http://localhost:8000/Highscores")
    //         .then(resp => resp.json())
    //         .then(scores => setHighScores(scores))
    // }, [])

    // Sort from highest to lowest score
    const sortedHighScores = [...highScores].sort((a, b) => {
        if (a["highscore"] < b["highscore"]) {
          return -1;
        }
        if (a["highscore"]  > b["highscore"]) {
          return 1;
        }
        return 0;
      }).reverse();

    return (
        <div>
            <NavBar />
            <ul>
                {sortedHighScores.map(highScore => (
                    <HighScore  key={highScore.id} name={highScore.name} highscore={highScore.highscore}/>
                ))}
            </ul>
        </div>
    );
}

export default HighScoreSorter;