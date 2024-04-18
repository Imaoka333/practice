let penaltyScore = (A, T) =>{
console.log(5 * A + T);
};

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin', 'utf8');
let values = input.split(' ');
let A = Number(values[0]);
let T = Number(values[1]);

penaltyScore(A, T);