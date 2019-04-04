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

console.log(Color);
console.log(c);
