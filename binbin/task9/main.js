var list = [];
var root = document.getElementById("root");
var timer = null;
//广度优先
function levelOrderTraversal(node) {
    if(!node) {
        throw new Error('空的树集');
        return;
    }
    var que = [];
    que.push(node);
    while(que.length !== 0) {
        node = que.shift();
        list.push(node);
        var nodeChilds = node.children;
        if(nodeChilds.length !== 0) {
            for(var i = 0; i<nodeChilds.length; i++) {
                que.push(nodeChilds[i]);
            }
        }
    }

}
//深度优先
function preOrderUnRecur(node) {
    if(!node) {
        throw new Error('空的树集');
        return;
    }
    var stack = [];
    stack.push(node);
    while(stack.length !== 0) {
        node = stack.pop();
        list.push(node);
        var nodeChilds = node.children;
        if(nodeChilds.length !== 0) {
            for(var i = nodeChilds.length - 1; i >= 0; i--) {
                stack.push(nodeChilds[i]);
            }
        }
    }
}

//改变颜色
function changeColor() {
    var i = 0;
    var key = true;
    var notFound = true;
    list[i].style.background = "#f46666";
    timer = setInterval(function() {
        var text = document.getElementById("text").value.trim();
        //如果输入框不为空
        if(text !== "") {
            i++;
            if(i < list.length) {
            //利用key来选择是否保留颜色
                if(key === true) {
                    list[i - 1].style.backgroundColor = "#fff";
                } else {
                    key = true;
                }

                list[i].style.backgroundColor = "#f46666";
                cleanWhitespace(list[i]);

                if(list[i].childNodes[0].nodeValue !== null) {
                    if(text === list[i].childNodes[0].nodeValue.trim()) {
                        list[i].style.backgroundColor = "#6aea7a";
                        key = false;
                        notFound = false;
                    }
                }

            } else {
                //如果最后的一个为查找的对象则设置颜色为显示状态
                if(list[list.length - 1].style.backgroundColor === "rgb(106, 234, 122)") {
                    list[list.length - 1].style.backgroundColor = "#6aea7a";
                } else {
                    list[list.length - 1].style.backgroundColor = "#fff";
                }
                if(notFound === true) {
                    alert("没找到，害我找那么久 =_=!");
                }
                clearInterval(timer);

            }
        } else {
            //如果为空
            i++;
            if(i < list.length) {
                list[i - 1].style.backgroundColor = "#fff";
                list[i].style.backgroundColor = "#f46666";
            } else {
                list[list.length - 1].style.backgroundColor = "#fff";
                clearInterval(timer);
            }
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

//删除空白节点
function cleanWhitespace(element)
{
    for(var i=0; i<element.childNodes.length; i++)
    {
        var node = element.childNodes[i];
        if(node.nodeType == 3 && !/\S/.test(node.nodeValue))
        {
            node.parentNode.removeChild(node);
        }
    }
}

window.onload = function() {
    //点击元素呈样式
    root.onclick = function(ev) {
        colorReset();
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if(target.nodeName.toLowerCase() == "div"){
            target.style.background = "#de7eee";
        }
    }
}

//重置点击产生的颜色
function colorReset() {
    var mydiv = root.getElementsByTagName("div");
    for(var i = 0; i < mydiv.length; i++) {
    mydiv[i].style.backgroundColor = "#fff";
    }
    root.style.backgroundColor = "#fff";
}

//删除节点
function deleteNode() {
    var mydiv = root.getElementsByTagName("div");
    for(var i = 0; i < mydiv.length; i++) {
        if(mydiv[i].style.backgroundColor === "rgb(222, 126, 238)")
            mydiv[i].parentNode.removeChild(mydiv[i]);
    }
}

//添加节点
function add() {
    var text = document.getElementById("text-input").value.trim();
    var newDiv = document.createElement("div");
    newDiv.innerHTML = text;
    var mydiv = root.getElementsByTagName("div");
    //判断当前节点
    if(root.style.backgroundColor === "rgb(222, 126, 238)") {
        root.appendChild(newDiv);
    }
    for(var i = 0; i < mydiv.length; i++) {
        if(mydiv[i].style.backgroundColor === "rgb(222, 126, 238)") {
            mydiv[i].appendChild(newDiv);
        }
    }
    colorReset();
}

//绑接按纽
var btn1 = document.getElementById("out-search");
var btn2 = document.getElementById("in-search");
var btn3 = document.getElementById("add");
var btn4 = document.getElementById("delete");
btn1.onclick = function() {
    reset();
    levelOrderTraversal(root)
    changeColor()
}
btn2.onclick = function() {
    reset();
    preOrderUnRecur(root)
    changeColor()
}
btn3.onclick = add;
btn4.onclick = deleteNode;

