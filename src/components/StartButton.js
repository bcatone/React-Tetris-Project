import React from "react";
import { StyledStartButton } from "./styles/StyledStartButton";

function StartButton({callback}) {
    return (
        <StyledStartButton onClick={callback}>Start</StyledStartButton>
    )
};

export default StartButton;