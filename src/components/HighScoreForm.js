import React, { useState } from "react";

function HighScoreForm({score, handleHighScoreSubmit}) {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()

        // Moved this to the App component
        // fetch("http://localhost:8000/Highscores", {
        //     method: "POST",
        //     headers: {
        //     "Content-Type": 'application/json',
        //     },
        //     body: JSON.stringify({name, score})
        // })
        // .then(resp => resp.json())
        // .then(newHighScore => console.log('New High score', newHighScore))

        handleSubmit({name, score});
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Player's name" 
          value={name}  
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add HighScore!</button>
      </form>
    </div>
  );
}

export default HighScoreForm;


