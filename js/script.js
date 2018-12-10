document.getElementById('addTask').addEventListener('click', function() {
	toDoList();
});

function toDoList() {
	var item = document.getElementById('todo-input').value;
	var text = document.createTextNode(item);
	var newItem = document.createElement('li');
	newItem.appendChild(text);
	newItem.onclick = removeItem;

	if (item === '') {
		alert('You need to write something!');
	} else {
		document.getElementById('toDoList').appendChild(newItem);
	}
	document.getElementById('todo-input').value = '';
}

function removeItem(e) {
	e.target.parentElement.removeChild(e.target);
}