/**
 * object.assign合并对象
 * 【注】将所有传入的对象，都合并到第一个对象中
 * 
 * 浅拷贝：只拷贝地址
 * 深拷贝：
 */
var obj1 = {
    a:10
}

var obj2 = {
    b:20,
    c:30
}

var obj3 = {
    d:40,
    f:["hello","word",true]
}

obj2.b = 30;
console.log(Object.assign(obj1,obj2,obj3));