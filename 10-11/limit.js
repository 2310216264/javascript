/*
    限制出界的拖拽，要拥有拖拽原有的所有功能
*/ 

function LimitDrag(id){
    //继承父一级所有的属性
    Drag.apply(this,[id]);
}

//继承方法 原型链
for(var funcName in Drag.prototype){
    LimitDrag.prototype[funcName] = Drag.prototype[funcName];
}
LimitDrag.prototype.funcMove = function(ev){
    var e = ev || window.event;
    var l = e.clientX - this.offsetX;
    if(l<=0){
        l=0;
    } 
    var windowWidth = document.documentElement.clientWidth ||document.body.clientWidth;
    var windowheigth = document.documentElement.clientHeight ||document.body.clientHeight;
 
    if(l+this.odiv. offsetWidth >windowWidth){
        l = windowWidth - this.odivoffsetWidth;
    }
    
    
    var t = e.clientY -  this.offsetY;

    if(t<=0){
        t =0;
    }
    if(t>=windowheigth - this.odiv.offsetHeight){
        t = windowheigth - this.odiv.offsetHeight;
    }

    this.odiv.style.left = l + 'px';
    this.odiv.style.top = t + 'px';
}