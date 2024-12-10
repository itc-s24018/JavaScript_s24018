/*EventTarget.addEventListener(イベント名, リスナー);
ボタン要素のElementオブジェクト.addEcentListener(クリック,ボタンクリック時に実行したい処理);
*/
var btn = document.getElementById('alert_btn');

btn.addEventListener('click', function(){
  alert('ボタンがクリックされたよ');
});
