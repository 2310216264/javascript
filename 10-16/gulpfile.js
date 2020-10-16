/*
    commonJS规范
    1、require()将这个模块引入
    2、使用这个模块上的函数
*/ 

const gulp = require("gulp");

//编写第一个任务
/**
 * 第一个参数：任务的名字 自定义
 * 第二个参数：回调函数 任务执行的功能
 */

gulp.task("hello",function(){
    console.log("hello world");
});

/**
 * gulp.src() 找到源文件路径    *.后缀名 所有同意为此后缀名的文件
 * gulp.dest() 找到目的文件路径 【注】如果设置的这个目的文件路径不存在，会自动创建
 * pipe()      理解程序运行管的
 */

 //1、整理.html文件
 gulp.task("copy-html",function(){
     return gulp.src("*.html").pipe(gulp.dest("dist/"))
     
 })