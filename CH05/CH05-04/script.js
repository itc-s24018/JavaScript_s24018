/*
日時に関する情報を取得/操作したいときは、Dateオブジェクトを利用する
Dateオブジェクトは初期化を行ってから使用する必要がある
オブジェクトには、利用時に初期化が必要なものが存在し、初期化は「new」で行う
「setInterval」を使用すると、一定間隔をおいて処理を繰り返すことができる
*/
setInterval(function(){
    var time_el = document.getElementById('time_el');
  
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    time_el.innerHTML = hour+':'+min+':'+sec;
  }, 1000);
  
  