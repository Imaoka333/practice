// let checker = (n, s, t) => {
//     const alice = 0;
//     const bob = 1;
//     let firstPerson;
//     let nextPerson

//     if(s === 0){
//     firstPerson = alice;
//     nextPerson = bob;
//     } else if(s===1){
//     firstPerson = bob;
//     nextPerson = alice;
//     }


//     let lastPerson;
//     let preLastperson;

//     if(n%2===0){
//     lastPerson = nextPerson;
//     preLastperson = firstPerson;
//     } else {
//     lastPerson = firstPerson;
//     preLastperson = nextPerson
//     }
    
//     const printName = (num) => {
//         if (num===0){
//             console.log('Alice');
//         } else {
//             console.log('Bob');
//         }
//     }

//     if(t === 0){
//         printName(lastPerson);
//     }else if(t === 1){
//         printName(preLastperson);
//     }
// }

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin','utf8').trim();
// let values = input.split(' ').map(Number);

// const n = values[0];
// const s = values[1];
// const t = values[2];

// checker(n,s,t);


//chat gpt
const whoWins = (N, S, T) => {
    // 先手がAliceの場合
    if (S === 0) {
        // 勝つ条件：Nが偶数かつTが0 または Nが奇数かつTが1
        if ((N % 2 === 0 && T === 0) || (N % 2 === 1 && T === 1)) {
            return 'Alice';
        } else {
            return 'Bob';
        }
    } 
    // 先手がBobの場合
    else {
        // 勝つ条件：Nが偶数かつTが1 または Nが奇数かつTが0
        if ((N % 2 === 0 && T === 1) || (N % 2 === 1 && T === 0)) {
            return 'Bob';
        } else {
            return 'Alice';
        }
    }
};

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin', 'utf8').trim();
let lines = input.split('\n').map(Number);

const N = lines[0];
const S = lines[1];
const T = lines[2];

console.log(whoWins(N, S, T));

//なんこれうま



