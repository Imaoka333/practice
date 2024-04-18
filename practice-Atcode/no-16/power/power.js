let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.trim().split('\n');
let X = parseInt(lines[0]);

const logarithmX = Math.log10(X);
//logarithmXより大きい最小の自然数nを求める＝＞答え
let powerNumber = (X) => {
    const n = Math.ceil(logarithmX);//小数点点切り上げ
    console.log((Number.isInteger(logarithmX)) ? logarithmX: n);//整数かどうかの判定
};

powerNumber(X);

//chatgptに勝ちました！！！

