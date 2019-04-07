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