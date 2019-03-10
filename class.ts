class student {
    fullName:string;
    constructor(public firstName,public middleInitial,public lastName){
        this.fullName = `${firstName} ${middleInitial} ${lastName}`
    }
}

interface Person {
    firstName:string,
    lastName:string,
}

const greeter = (person:Person) => {
    console.log(`name: ${person.firstName} ${person.lastName}`);
}

const USER = new student('mei','ysq','jie');

greeter(USER);