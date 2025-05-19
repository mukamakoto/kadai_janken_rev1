// じゃんけんの手と画像ファイル名の対応
const hands = [
  { name: "グー", img: "img/gu.jpg" },
  { name: "チョキ", img: "img/choki.jpg" },
  { name: "パー", img: "img/pa.jpg" }
];

// 勝敗判定用（[自分][相手]の順で結果を格納）
const resultTable = [
  // グー
  ["あいこ", "勝ち", "負け"],
  // チョキ
  ["負け", "あいこ", "勝ち"],
  // パー
  ["勝ち", "負け", "あいこ"]
];

// 画像クリックイベント
["gu", "choki", "pa"].forEach((id, idx) => {
  document.getElementById(id).onclick = () => playJanken(idx);
});

function playJanken(userIdx) {
  // コンピューターの手をランダムで決定
  const cpuIdx = Math.floor(Math.random() * 3);

  // 画像表示
  document.getElementById("userHand").src = hands[userIdx].img;
  document.getElementById("userHand").alt = hands[userIdx].name;
  document.getElementById("cpuHand").src = hands[cpuIdx].img;
  document.getElementById("cpuHand").alt = hands[cpuIdx].name;

  // 勝敗判定
  const result = resultTable[userIdx][cpuIdx];
  document.getElementById("result").textContent = `あなたは「${hands[userIdx].name}」、みゃくみゃくは「${hands[cpuIdx].name}」 → ${result}！`;
}

// // 手のIDと画像パスの対応
// const hands1 = {
//   gu: '/gu.jpg',
//   choki: '/choki.jpg',
//   pa: '/pa.jpg'
// };

// // ポップアップ用画像とメッセージ
// const popupData = {
//   win:   { img: '/win.png',  msg: 'やったね！あなたの勝ち！' },
//   lose:  { img: '/lose.png', msg: '残念…あなたの負け！' },
//   draw:  { img: '/draw.png', msg: 'あいこです！' }
// };

// const handKeys = Object.keys(hands);

// // じゃんけん判定
// function judge(user, cpu) {
//   if (user === cpu) return 'draw';
//   if (
//     (user === 'gu' && cpu === 'choki') ||
//     (user === 'choki' && cpu === 'pa') ||
//     (user === 'pa' && cpu === 'gu')
//   ) return 'win';
//   return 'lose';
// }

// // 手をクリックしたときの処理
// document.querySelectorAll('.janken-img').forEach(img => {
//   img.addEventListener('click', () => {
//     const userHand = img.id;
//     const cpuHand = handKeys[Math.floor(Math.random() * 3)];

//     // 手画像の表示
//     document.getElementById('userHand').src = hands[userHand];
//     document.getElementById('cpuHand').src = hands[cpuHand];

//     // 勝敗判定
//     const result = judge(userHand, cpuHand);

//     // ポップアップ表示
//     showPopup(result);

//     // 通常の結果表示（必要なら）
//     document.getElementById('result').textContent = '';
//     document.getElementById('result1').textContent = '';
//   });
// });

// // ポップアップ表示関数
// function showPopup(result) {
//   document.getElementById('popupImage').src = popupData[result].img;
//   document.getElementById('popupMessage').textContent = popupData[result].msg;
//   document.getElementById('popupOverlay').style.display = 'flex';
// }

// // ポップアップ閉じる
// document.getElementById('popupClose').addEventListener('click', () => {
//   document.getElementById('popupOverlay').style.display = 'none';
// });
