function generate(numRows: number): number[][] {
    let pascal = new Array(numRows)
    for (let i = 0; i < numRows; i++) {
        pascal[i] = new Array(i+1)
        pascal[i][0] = 1
        pascal[i][i] = 1
    }
    for (let i = 2; i < numRows; i++) {
        for(let j = 1; j < i; j++){
            pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j]
        }
    }
    return pascal
};