//基本类型
var isDone = true;
var num = 6;
var myName = 'meijie';
var list = [1, 2, 3];
var list2 = [1, 2, 3];
var x;
x = ['1', 2];
//枚举
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
})(Color || (Color = {}));
;
var c = Color.green;
//不检查,任意类型   
var notsure = 4;
// void 没有任何类型，没有返回值得函数，只能赋予 null，undefined
var warn = function () {
    console.log('11');
};
var unusbale = null;
//never 无法执行到终点（无线循环）、抛出异常时使用
var error = function (message) {
    throw new Error(message);
};
var whileFun = function () {
    while (true) {
    }
};
//object 非原始类型
var myObject = { name: 'meijie' };
//类型断言
var someString = 'this is string';
var someNumber = someString.length;
