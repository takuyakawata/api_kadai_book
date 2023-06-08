'use strict';

// 検索をかける
const libUrl =
  "https://api.calil.jp/check?appkey={da280c479ff3323463183ff2c51aa5f5}&isbn=4834000826&systemid=Aomori_Pref&format=json";

axios
  .get(libUrl)
  .then(function (response) {
    // リクエスト成功時の処理（responseに結果が入っている）
    console.log(response);
  })
  .catch(function (error) {
    // リクエスト失敗時の処理（errorにエラー内容が入っている）
    console.log(error);
  })
  .finally(function () {
    // 成功失敗に関わらず必ず実行
    console.log("done!");
  });