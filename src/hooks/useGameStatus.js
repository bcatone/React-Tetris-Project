import { useState, useEffect, useCallback, useMemo } from 'react';

export const useGameStatus = rowsCleared => {
  // States
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);

  const linePoints = useMemo(() => [40, 100, 300, 1200], []);

  const calculateScore = useCallback(() => {

    console.log(rowsCleared);
    
    // Check if user scored
    if (rowsCleared > 0) {

      // Use original Tetris score calculation formula
      setScore(prev => prev + linePoints[rowsCleared - 1] * (level + 1));
      setRows(prev => prev + rowsCleared);
    }
  }, [level, linePoints, rowsCleared]);

  useEffect(() => {
    calculateScore();
  }, [calculateScore, rowsCleared, score]);

  return [score, setScore, rows, setRows, level, setLevel];
};