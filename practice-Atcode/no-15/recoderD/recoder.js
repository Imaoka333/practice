let checker = (A,B,C,D,R) => {
    //配列を作る
    const boxb = Math.floor(B / D);
    const boxc = Math.floor(C / D);
    const boxar = Math.floor((A+R)/ D);
    let arr = new Array(Math.ceil((C + R)/ D)).fill('');
    arr[boxb]="B";
    arr[boxc]="C";
    const conditions = [A<C,C<A+R,boxar - boxc !== 0]
    if(conditions.every(condition => condition)){
        arr[boxc]="B";
    }
    console.log((arr.includes('B')) ? "Yes":"No");
}

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin','utf8').trim();
let values = input.split(' ').map(Number);
const A =values[0];
const B =values[1];
const C =values[2];
const D =values[3];
const R =values[4];


checker(A,B,C,D,R);



//なんかめっちゃ無理矢理っぽいけど一応ちゃんと動く。





