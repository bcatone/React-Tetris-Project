import React from "react";

import { StyledCell } from "./styles/StyledCell";
import { TETRIMINOS } from "../tetriminos";

function Cell({type}) {
     return (
         <StyledCell type={type} color={TETRIMINOS[type].color} />
     )
};

export default Cell;