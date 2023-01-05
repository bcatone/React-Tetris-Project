import React from "react";
import { StyledNavBar } from "./styles/StyledNavBar";
import { Link } from "react-router-dom";


function NavBar({ onChangePage }) {

    return (
        <StyledNavBar>
            <nav>
                <Link to={`/`}>Tetris</Link>
                <Link to={`/settings`}>Settings</Link>
                <Link to={`/highscores`}>HighScores</Link>
            </nav>
        </StyledNavBar>
    );
}

export default NavBar;