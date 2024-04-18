let sum = (n, k) => {
    //階乗を計算する再起的なコード
    const functorial = (n) => {
        if(n === 0 || n===1){
            return 1;
        }
        return n * functorial(n-1);
    };
    //combination
    const combination = (n, k) =>{
        if (k<0 || k>n){
            return 0;
        }
        return functorial(n)/(functorial(n-k)*functorial(k));
    };
    const howManyTimes = (combination(n, k) * k) / n ;
    let sumPoint = quizPoint.reduce((accumulator, currentValue) => {
        return accumulator + currentValue * howManyTimes;
    }, 0);//配列の全てを足す。

    // const totalCombinations = combination(n, k);
    // let sumPoint = 0;

    // for (let i = 0; i < n; i++) {
    //     const howManyTimes = combination(n - 1, k - 1); // i番目の問題が選ばれる回数
    //     sumPoint += quizPoint[i] * howManyTimes;//ここの表現ができなかった
    // }

    // console.log(sumPoint);//こっちを元々書きたかった
    
};

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin','utf8').trim();
let lines = input.split('\n');
let values1 = lines[0].split(' ').map(Number);
let quizPoint = lines[1].split(' ').map(Number);

let n = values1[0];
let k = values1[1];

sum(n, k);

//oooooookkkkkkkkk
