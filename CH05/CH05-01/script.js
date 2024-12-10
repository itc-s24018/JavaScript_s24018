/*---id名を取得---*/ 
var el = document.getElementById('text');
el.innerHTML='Hello JavaScript';

/*クラス名を取得（複数存在するので配列によく似た値を返す）*/
var btns = document.getElementsByClassName('btn'); 
for(var i = 0; i < btns.lenght; i++){
	var el =btns[i];
	console.log(el.innerHTML);
}
