//1
interface labelObj {
    label:string
}

const log_label = (person:labelObj):void => {
    console.log(person.label);
}

const myobj = {label:"this is label",name:"meijie"};

log_label(myobj);


//2
interface config {
    color?:string,
    width?:number
}

const create_config = (options:config) => {
    let defaultConfig:{
        color:string,
        area:number,
    }
    defaultConfig = {
        color:'red',
        area:100,
    };
    if(options.color){
        defaultConfig.color = options.color;
    };
    if(options.width){
        defaultConfig.area = options.width * options.width;
    }
    return defaultConfig;
}

let myConfig = create_config({color:'red'});


//3 函数类型
interface searchFunc {
    (source:"string",substring:"string"):void
}

let mySearch:searchFunc;
mySearch = (source:string,substring:string) => {
    let result = source.search(substring);
   
}

//4 接口只读属性
interface readonly_ife {
    readonly name:string,
    num:number,
}

const readonly_func = (obj:readonly_ife):void => {
    obj.num = 1;
    // obj.name = "meijie";
}

//可索引的类型
interface myArrIfe {
    [index:number]:string
};

let myArr:myArrIfe;
myArr = ['123','321'];

let myArrStr:string = myArr[0]

//类 类型 实现接口

interface classIfe {
    name:string,
    nowDate:Date,
}

class myClass implements classIfe {
    name='1234';
    nowDate:Date;
    constructor(){

    }
}

//接口继承

interface oneIfe {
    name:string
}

interface twoIfe extends oneIfe {
    color:string
}

let squery :twoIfe ;
squery as {};

squery.name = '123';