Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};
function unique(arr) {
    var formArr = arr.sort()
    var newArr=[formArr[0]]
    for (let i = 1; i < formArr.length; i++) {
        if (formArr[i]!==formArr[i-1]) {
            newArr.push(formArr[i])
        }
    }
    return newArr;
}
function CREATE2(){
    let A = document.createElement("div");
    A.style.position = "absolute";
    A.style.whiteSpace = "pre-wrap";//保留空格
    A.style.boxSizing="border-box";
    A.style.lineHeight="10px";
    document.body.appendChild(A);
    return A;
}


function CREATE(){
    let A = document.createElement("div");
    A.style.position = "absolute";
    A.style.whiteSpace = "pre-wrap";//保留空格
    A.style.paddingLeft="6px";
    //A.style.paddingTop="1px";
    A.style.boxSizing="border-box";
    document.body.appendChild(A);
    return A;
}
function EDIT(A){
    A.setAttribute("contenteditable","true");
}


function 循环X次执行Y(X,Y){
    for(let i=0;i<X;i++){
        Y(i);
    }
}
