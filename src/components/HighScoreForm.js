import React, { useState } from "react";
import {StyledHighScoreForm} from "./styles/StyledHighScoreForm";


function HighScoreForm( {score, handleHighScoreSubmit, isVisable} ) {
    const [name, setName] = useState("")
    // const {highscore, open, close} = props;

    const handleSubmit = (e) => {
        e.preventDefault()
        handleHighScoreSubmit({name, highscore: score})
    }

  return (
    <StyledHighScoreForm style={{display: isVisable ? 'block' : 'none'}}>
      <form onSubmit={handleSubmit}>
        <p style={{color: 'white'}} >YOUR SCORE: {score}</p>
        <input type="text" name="name" placeholder="Player's name" value={name}  onChange={(e) => setName(e.target.value)}/>
        <br />
        <button type="submit">Add HighScore!</button>
        {/* <button onClick={handleFormClose}>button</button> */}
      </form>
      </StyledHighScoreForm>
  );

}

export default HighScoreForm;


