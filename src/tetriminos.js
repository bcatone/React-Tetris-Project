export const TETRIMINOS = {
    0: {shape: [[0]], color: "0, 0, 0"},
    I: {
        shape: [
            [0, 'I', 0, 0], 
            [0, 'I', 0, 0], 
            [0, 'I', 0, 0], 
            [0, 'I', 0, 0]
        ], 
        color: "45, 242, 242"
    },
    J: {
        shape: [
            [0, 'J', 0], 
            [0, 'J', 0], 
            ['J', 'J', 0] 
        ], 
        color: "0, 42, 241"
    },
    L: {
        shape: [
            [0, 'L', 0], 
            [0, 'L', 0], 
            [0, 'L', 'L'] 
        ], 
        color: "238, 156, 0"
    },
    O: {
        shape: [
            ['O', 'O'], 
            ['O', 'O'] 
        ], 
        color: "240, 237, 0"
    },
    S: {
        shape: [
            [0, 'S', 'S'], 
            ['S', 'S', 0], 
            [0, 0, 0] 
        ], 
        color: "49, 239, 10"
    },
    T: {
        shape: [
            [0, 'T', 0], 
            ['T', 'T', 'T'], 
            [0, 0, 0] 
        ], 
        color: "157, 34, 241"
    },
    Z: {
        shape: [
            ['Z', 'Z', 0], 
            [0, 'Z', 'Z'], 
            [0, 0, 0] 
        ], 
        color: "237, 0, 0"
    },
};

export const randomTetrimino = () => {
    const tetriminos = "IJLOSTZ";
    const randomTetrimino = tetriminos[Math.floor(Math.random() * tetriminos.length)];

    return TETRIMINOS[randomTetrimino];
};