//my code
let scoreI = [55580908 ,183811851 ,247188750 ,266233976 ,335843599 ,344138315 ,389659771 ,389921297, 698238479, 720357617];
let scoreLength = scoreI.length;

function answer(scoreI){
const scoreIMax = Math.max(...scoreI);
const big = Math.pow(10, 9);//(1e9)
const value = [];
for(let j= 0;j < scoreLength; j++ ) {
const scoreIRelative = Math.round(big * scoreI[j] / scoreIMax);
value.push(scoreIRelative);
};
console.log(value);
};


answer(scoreI);


//より効率的なやつ
//mapメソッドは、配列の各要素に対して指定した関数を適用し、新しい配列を生成

// function calculateRelativeScores(N, scores) {
//     // 最大のスコアを取得
//     let maxScore = Math.max(...scores);

//     // 相対スコアを計算
//     let relativeScores = scores.map(score => Math.round((1e9 * score) / maxScore));

//     return relativeScores;
// }

// // 標準入力から値を取得
// let input = require('fs').readFileSync('/dev/stdin', 'utf8');
// let lines = input.trim().split('\n');
// let N = parseInt(lines[0]);
// let scores = lines[1].split(' ').map(Number);

// // 相対スコアを計算
// let result = calculateRelativeScores(N, scores);

// // 結果を出力
// console.log(result.join(' '));


