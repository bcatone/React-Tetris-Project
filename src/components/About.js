import React from "react";
import {StyledAbout} from './styles/StyledAbout';
import NavBar from "./NavBar";

function About() {
    return (
        <StyledAbout>
            <NavBar />
          <div>
            <p>
                How do you play?
                <br />
                 The Tetris® game requires players to strategically rotate, move, and drop a procession of Tetriminos that fall into the rectangular Matrix at increasing speeds. 
                 Players attempt to clear as many lines as possible by completing horizontal rows of blocks without empty space, but if the Tetriminos surpass the Skyline the game is over! 
                 It might sound simple, but strategy and speed can go a long way! 
                <br /> 
                 Are YOU up for the challenge?
                <br />
                <a href="https://tetris.com/about-us" target="blank"><em>Learn more about Tetris</em></a>
            </p>
          </div>
        </StyledAbout>
    )
};

export default About;