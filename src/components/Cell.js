import React from "react";

import { StyledCell } from "./styles/StyledCell";
import { TETRIMINOS } from "../tetriminos";

function Cell({type}) {
     return (
        // Passes the tetrimino color into the StyledCell component to color the cell
         <StyledCell type={type} color={TETRIMINOS[type].color} />
     )
};

export default Cell;