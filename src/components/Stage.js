import React from "react";
import { StyledStage } from "./styles/StyledStage";

import Cell from "./Cell";

function Stage({stage}) {

    return (
        <StyledStage 
          height={stage.length} 
          width={stage[0].length}
        >
            {stage.map(row => row.map((cell, i) => 
              <Cell key={i} type={cell[0]} />))}
        </StyledStage>
    )
};

export default Stage;