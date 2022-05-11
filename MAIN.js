const 身份证号域 = {};
身份证号域.计算校验码 = function (X) {
    let A = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    let B = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];
    let C = 0;
    for (let i = 0; i < 17; i++) {
        C += X[i] * A[i];
    }
    return B[C % 11];
};

const 按钮域 = {};
按钮域.弹窗 = function (K) {
    alert(K);
}
按钮域.书写 = function (K) {
    let X = CREATE();
    X.style.top = "100px";
    X.style.left = "200px";
    X.innerHTML = K;
}
按钮域.创建按钮 = function (A) {
    let X = CREATE();
    X.style.top = "100px";
    X.style.left = "100px";
    X.style.width = "30px";
    X.style.height = "30px";
    X.style.borderColor = "rgb(0,0,0)";
    X.style.borderStyle = "solid";
    X.style.borderWidth = "1px";
    X.onclick = function () {
        A("XXX");
    }
}

const 数独域 = {};

const 数学域 = {};
数学域.移除集合X中的元素Y = function (X, Y) {
    let A = X.indexOf(Y);
    if (A !== -1) {
        X.splice(A, 1);
    }
}
数学域.移除集合X中的重复元素 = function (X) {
    let Y = [];
    for (let i = 0; i < X.length; i++) {
        if (Y.indexOf(X[i]) !== -1) {
            Y.push(X[i]);
        }
    }
    return Y;
}

const 画布域 = {};
画布域.创建画布 = function () {
    let A = document.createElement("div");
    A.style.position = "absolute";//并非【相对定位】
    A.style.whiteSpace = "pre-wrap";//并非【无视空格】
    A.style.boxSizing = "border-box";//并非【边距影响尺寸】
    document.body.appendChild(A);
    return A;
}
HTMLDivElement.prototype.设置文字 = function (X) {
    this.innerHTML = X;
    return this;
}
HTMLDivElement.prototype.允许编辑 = function () {
    this.setAttribute("contenteditable", "true");
    return this;
}
HTMLDivElement.prototype.添加边框 = function () {
    this.style.borderColor = "rgb(0,0,0)";
    this.style.borderStyle = "solid";
    this.style.borderWidth = "1px";
    return this;
}
HTMLDivElement.prototype.设置坐标尺寸 = function (X, Y, Z, W) {
    this.style.left = X + "px";
    this.style.top = Y + "px";
    this.style.width = Z + "px";
    this.style.height = W + "px";
    return this;
}
HTMLDivElement.prototype.设置背景颜色 = function (X, Y, Z) {
    this.style.backgroundColor = "rgb(" + X + "," + Y + "," + Z + ")";
    return this;
}
//relative，fixed
HTMLDivElement.prototype.设置父节点 = function (X) {
    X.appendChild(this);
    return this;
}
HTMLDivElement.prototype.小号字体 = function () {
    this.style.fontSize = "6px";
    this.style.lineHeight = "10px";
    return this;
}
HTMLDivElement.prototype.设置左上边距 = function (X,Y) {
    this.style.paddingLeft = X+"px";
    this.style.paddingTop = Y+"px";
    return this;
}
HTMLDivElement.prototype.设置ID = function (X) {
    this.id=X;
    return this;
}

const 生命游戏域={};
生命游戏域.创建一个格子=function (){

}
生命游戏域.创建九百格子=function (){

}
生命游戏域.创建开始按钮=function (){

}
生命游戏域.创建暂停按钮=function (){

}
生命游戏域.创建随机填充按钮=function (){

}



function 循环X次执行Y(X, Y) {
    for (let i = 0; i < X; i++) {
        Y(i);
    }
}

function 创建空集() {
    return [];
}

function 获取名为X的画布(X) {
    return document.getElementById(X);
}

function 在集合X中添加元素Y(X, Y) {
    X.push(Y);
}

function 获取画布X上的文字(X) {
    return X.innerHTML;
}

function 对数字X取整数(X) {
    return parseInt(X);
}

function 将集合X与集合Y拼接成一个集合(X, Y) {
    return X.concat(Y);
}
