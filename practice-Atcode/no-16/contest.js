// let A = [21,32,34,53,12,34,24,90]
// let quizNumbers = 300;
// let value =[];
// let quizNumber = quizNumbers / 8;

// //修正後の自分のコード
// function checkNumbers(A,quizNumbers){
//     for (let j = 0; j < A.length; j++){
//     if(A[j]<quizNumber){
//         value.push(A[j]);// A[j]がquizNumber以下である場合にvalue配列に追加
//     }
// }
// // console.log(value);
// };

// //forEachを使って
// // function checkNumbers(A,quizNumbers){
// // A.forEach((number) => {
// //     if(number <= quizNumber){
// //         value.push(number);
// //     }
// // })
// // console.log(value);
// // };

// //chatgpt(filter)
// // function checkNumbers(A, quizNumbers) {
// //     let filteredArray = A.filter(num => num <= quizNumber);
// //     value.push(...filteredArray);  // spread構文を使用して配列を展開してpushする
// // //numはアロー関数のパラメーターとして定義。配列Aの各要素に対して条件を適用。普通に矢印で関数作るやつ。
// //     console.log(value);
// // };

// while(true){
    
// }

// checkNumbers(A,quizNumbers);


//Answeer




function maxContests(N, A) {
    let count = new Array(9).fill(0);  // 難易度1から8までの出現回数を格納する配列を初期化
    
    // 各難易度の出現回数をカウント
    for (let i = 0; i < N; i++) {
        count[A[i]]++;
    }
    count[0] = N;

    // 出現した回数の中で最小の数が答え
    let minContests = Math.min(...count);

    // 最小の出現回数が0以下の場合、コンテストは開催できない
    if (minContests <= 0) {
        return "コンテストは開催できません。";
    }
    
    return minContests;
}

let N = 2;
let A = [2,2];

let result = maxContests(N, A);
console.log(result);  // 出力：1

