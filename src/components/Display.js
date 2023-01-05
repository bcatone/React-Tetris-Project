import React from "react";

// Styled Component
import { StyledDisplay } from "./styles/StyledDisplay";

function Display({gameOver, text}) {
    // Display the string in the prop text and style the StyledDisplay based on the gameOver status
    return (
        <StyledDisplay gameOver={gameOver}>
            {text}
        </StyledDisplay>
    )
};

export default Display;