var fruits = ['リンゴ', 'モモ', 'バナナ'];
var ul = document.getElementById('fruit_list');

for(var cnt = 0; cnt < fruits.length; cnt++) {
  var li = document.createElement('li');
  var text = document.createTextNode(fruits[cnt]);
  li.appendChild(text);
  ul.appendChild(li);
}
