// 答え
let kotae = Math.floor(Math.random()*10) + 1;
let kotaen = Number(kotae);
console.log('答え（デバッグ用）: ' + kotae);
let result = document.querySelector('p#result');

// 入力回数（予想回数）
let kaisu = 0;
let finish = false;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b = document.querySelector('button#print');
b.addEventListener('click', hantei);


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  kaisu ++;

  let yoso = document.querySelector('input[name="num"]');
  let yoson = Number(yoso.value);
  document.querySelector('span#answer').textContent = kaisu + "回目の予想:" + yoson;

  let result = document.querySelector('p#result');

  if (finish || kaisu > 3){
    result.textContent = "答えは" + kotaen + "でした．すでにゲームは終わっています";
    return;
  }else if (kotaen === yoson){
    result.textContent = "正解です．おめでとう!";
    finish = true;
    return;
  }else if (kaisu === 3 && kotaen !== yoson){
    result.textContent = "まちがい．残念でした答えは" + kotaen + "です";
    return;
  }else if (kaisu < 3 && kotaen > yoson){
    result.textContent = "まちがい．答えはもっと大きいですよ";
    return;
  }else if (kaisu < 3 && kotaen < yoson){
    result.textContent = "まちがい．答えはもっと小さいですよ";
    return;
  }
  
}