import React, { useEffect, useState } from "react";
import HighScore from "./HighScore";
import NavBar from "./NavBar";

function HighScoreSorter(props) {

    const [highScores, setHighScores] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/Highscores")
            .then(resp => resp.json())
            .then(scores => setHighScores(scores))
    }, [])

    return (
        <div>
            <NavBar />
            <ul>
                {highScores.map(highScore => (
                    <HighScore  key={highScore.id} name={highScore.name} highscore={highScore.highscore}/>
                ))}
            </ul>
        </div>
    );
}

export default HighScoreSorter;