var myUl = document.getElementById("place");

function leftIn() {
    var myInput = document.getElementById("text");
    var text = myInput.value;
    var reg = /^\d+$/;
    if(reg.test(text) == false) {
        alert("请输入数字");
        return true;
    }
    else {
    var myLi = document.createElement("li");
        myLi.innerHTML = text;
        myInput.value = "";
        myUl.insertBefore(myLi, myUl.firstChild);
    }
}

function rightIn() {
    var myInput = document.getElementById("text");
    var text = myInput.value;
    var reg = /^\d+$/;
    if(reg.test(text) == false) {
        alert("请输入数字");
    }
    else {
    var myLi = document.createElement("li");
    myLi.innerHTML = text;
        myInput.value = "";
        myUl.appendChild(myLi);
    }
}

function leftOut() {
    var myInput = document.getElementById("text");
    var text = myInput.value;
    var myLi = myUl.getElementsByTagName("li");
    if(myLi.length === 0) {
        alert("已经没有数字啦")
    }
    alert(myUl.firstChild.innerHTML);
    myUl.removeChild(myUl.firstChild);
}

function rightOut() {
    var myInput = document.getElementById("text");
    var text = myInput.value;
    var myLi = myUl.getElementsByTagName("li");
    if(myLi.length === 0) {
        alert("已经没有数字啦")
    }
    alert(myUl.lastChild.innerHTML);
    myUl.removeChild(myUl.lastChild);
}

var btn1 = document.getElementById("left-in");
btn1.onclick = leftIn;
var btn2 = document.getElementById("right-in");
btn2.onclick = rightIn;
var btn3 = document.getElementById("left-out");
btn3.onclick = leftOut;
var btn4 = document.getElementById("right-out");
btn4.onclick = rightOut;

myUl.onmouseover = function liDelete() {
    var lis = document.getElementsByTagName("li");
    for(var i=0; i<lis.length; i++) {
        lis[i].onclick = function() {
            this.parentNode.removeChild(this);
        }
    }
}
