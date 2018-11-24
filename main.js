// 課題: forループで以下の機能を実装する
//   - forループの最初の記述で以下の内容をセットする
//     - 変数の初期化: 変数i を作り、1を代入する
//     - ループ条件の設定: 変数iの値が100未満である限りループ処理を行う
//     - 1ループ終わるごとの処理: 変数iの値をインクリメントする
//   - forループ内の処理は次のように実装する
//     - 変数iの値が3の倍数でもあり5の倍数でもあるときは `FizzBuzz`という文字列と、変数iの値をコンソールに出力する。(ifを使う)
//       - 倍数の確認方法は「剰余 (%)」を使うことで実現できる。(「14 % 7 === 0」 より14は7の倍数ということがわかる。(余りが無いため))
//     - 変数iの値が3の倍数のときは `Fizz`という文字列と、変数iの値をコンソールに出力する。(else ifを使う)
//     - 変数iの値が5の倍数のときは `Buzz`という文字列と、変数iの値をコンソールに出力する。(else ifを使う)
//     - 変数iの値が3の倍数でも5の倍数でもないときは特に何もしない
for (let i = 1; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz", i);
  } else if (i % 3 === 0) {
    console.log("Fizz", i);
  } else if (i % 5 === 0) {
    console.log("Buzz", i);
  }
}