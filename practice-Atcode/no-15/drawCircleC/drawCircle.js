let checker = (X,Y,N,R) => {
let array = new Array(2 * N + 1).fill(null).map(() => new Array(2 * N + 1).fill(null));

for(let i=0;i<2*N+1;i++){
    for(let j=0;j<2*N+1;j++)
    {
        let distance = Math.ceil(Math.sqrt((i-X-N)**2+(j-Y-N)**2));
        array[i][j] = (R<distance) ? ".":"#";
    }
}
//出力
const removedCommas = array.map(row => row.join(' ')).join('\n');
console.log(removedCommas);

};

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin','utf8').trim('');
let values = input.split(' ');

const X = Number(values[0]);
const Y = Number(values[1]);
const R = Number(values[2]);
let N = Number(values[3]);

checker(X,Y,N,R);

//gooood

