var list = [];
var root = document.getElementById("root");
var timer = null;

function preOrder(node) {
    if(!(node === null)) {
        list.push(node);
        preOrder(node.firstElementChild);
        preOrder(node.lastElementChild);
    }
}

function inOrder(node) {
    if(!(node === null)) {
        inOrder(node.firstElementChild);
        list.push(node);
        inOrder(node.lastElementChild);
    }
}

function postOrder(node) {
    if(!(node === null)) {
        postOrder(node.firstElementChild);
        postOrder(node.lastElementChild);
        list.push(node);
    }
}

//改变颜色
function changeColor() {
	var i = 0;
	list[i].style.background = "#f46666";
	timer = setInterval(function() {
		i++;
		if(i < list.length) {
			list[i - 1].style.backgroundColor = "#fff";
			list[i].style.backgroundColor = "#f46666";
		} else {
			reset();
		}
	} ,500);
}
//重设
function reset() {
	clearInterval(timer);
	for(var i = 0; i < list.length; i++) {
		list[i].style.backgroundColor = "#fff";
	}
	list = [];
}
//绑接按纽
var btn1 = document.getElementsByTagName("input")[0];
var btn2 = document.getElementsByTagName("input")[1];
var btn3 = document.getElementsByTagName("input")[2];

btn1.onclick = function() {
	reset();
    preOrder(root);
    changeColor()
}
btn2.onclick = function() {
	reset();
    inOrder(root);
    changeColor()
}
btn3.onclick = function() {
	reset();
    postOrder(root);
    changeColor()
}
