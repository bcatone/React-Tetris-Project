import React, { useState } from "react";

function HighScoreForm( props ) {
    const [name, setName] = useState("")
    const [highscore, setHighscore] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:8000/Highscores", {
            method: "POST",
            headers: {
            "Content-Type": 'application/json',
            },
            body: JSON.stringify({name, highscore})
        })
        .then(resp => resp.json())
        .then(newHighScore =>  console.log('New High score', newHighScore))
    }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Player's name" value={name}  onChange={(e) => setName(e.target.value)}/>
        <input type="number" name="score" placeholder="HighScore" value={highscore}  onChange={(e) => setHighscore(e.target.value)}/>
        <button type="submit">Add HighScore!</button>
      </form>
    </div>
  );
}

export default HighScoreForm;


