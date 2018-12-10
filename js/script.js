
function toDoList() {
	var item = document.getElementById('todo-input').value;
	var text = document.createTextNode(item);
	var newItem = document.createElement('li');
	newItem.appendChild(text);
	document.getElementById('toDoList').appendChild(newItem);
	document.getElementById('todo-input').value = '';
}

