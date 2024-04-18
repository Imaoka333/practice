let checker = (H) =>{
    console.log((2800 <= H) ? "o" : "x" );
};

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin', 'utf8').trim();
let values = input.split(' ');
let H = Number(values[1]);

checker(H);
