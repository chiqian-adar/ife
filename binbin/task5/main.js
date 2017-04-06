var data = [];
var myInput = document.getElementById("inputbox");

//核对数据
function numCheck() {
    if(myInput.value === "" || isNaN(myInput.value)) {
        alert("请输入数字")
        return false;
    }
    if(myInput.value >= 100
        || myInput.value < 10
    )
    {
        alert("请输入的数字在10~100范围内");
        return false;
    }
    if(data.length >= 60) {
        alert("数据已满");
        return false;
    }
}

function creatList() {
    var myUl = document.getElementById("list");
    myUl.innerHTML = "";
    for(var i =0; i < data.length; i++) {
        var myLi = document.createElement("li");
        myLi.innerHTML = data[i];
        myLi.style.height = data[i] * 2.5 + "px";
        myLi.setAttribute("id", "li-" + i);
        myUl.appendChild(myLi);
    }
    myInput.value = "";
}
//点击事件
function leftIn() {
    if(numCheck() === false) {return;}
    data.splice(0, 0, myInput.value);
    creatList();
}

function rightIn() {
    if(numCheck() === false) {return;}
    data.push(myInput.value);
    creatList();
}

function leftOut() {
    if(data.length === 0) {
        alert("没有数啦")
        return;
    }
    alert(data.splice(0, 1));
    creatList();
}

function rightOut() {
    if(data.length === 0) {
        alert("没有数啦");
        return;
    }
    alert(data.pop());
    creatList();
}

//随机生成数据

function random() {
    for(var i = 0; i < 55; i++) {
        data[i] = Math.floor(Math.random() * 90 + 10);
    }
    creatList();
}

//点击删除
window.onload =function() {
    var myUl = document.getElementById("list")
    myUl.onclick = function(ev) {
        var ev = ev || window.event
        var target = ev.target || ev.srcElement;
        if(target.nodeName.toLowerCase() === "li") {
            target.parentNode.removeChild(target);
        }
    }
}

//排序
function sortList() {
    function numAscSort(a, b) {
        return a -b;
    }
    data.sort(numAscSort);
    creatList();
   }
//事件绑定
var btn1 = document.getElementById("left-in");
btn1.onclick = leftIn;
var btn2 = document.getElementById("right-in");
btn2.onclick = rightIn;
var btn3 = document.getElementById("left-out");
btn3.onclick = leftOut;
var btn4 = document.getElementById("right-out");
btn4.onclick = rightOut;
var btn5 = document.getElementById("random");
btn5.onclick = random;
var btn6 = document.getElementById("sortlist");
btn6.onclick = sortList;

