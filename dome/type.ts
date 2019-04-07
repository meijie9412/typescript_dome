 //基本类型
let isDone:boolean = true;

let num:number = 6;

let myName:string = 'meijie';

let list:number[] = [1,2,3];

let list2:Array<number> = [1,2,3];

let x:[string,number];
x = ['1',2];


//枚举
enum Color {red,green};
let c: Color = Color.green;

//不检查,任意类型   
let notsure:any = 4; 

// void 没有任何类型，没有返回值得函数，只能赋予 null，undefined
const warn = ():void => {
    console.log('11')
}
const unusbale:void = null;

 //never 无法执行到终点（无线循环）、抛出异常时使用

 const error = (message:string):never => {
     throw new Error(message);
 }
 const whileFun = ():never => {
     while(true){

     }
 }

 //object 非原始类型
 let myObject:object = {name:'meijie'}

 //类型断言
 let someString:any = 'this is string';
 let someNumber:number = (someString as string).length;