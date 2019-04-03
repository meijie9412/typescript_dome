class student {
    fullName:string;
    constructor(public firstName,public middleInitial,public lastName){
        this.fullName = `${firstName} ${middleInitial} ${lastName}`;
    }
}

interface Person {
    firstName:string,
    lastName:string,
}

const greeter3 = (person:Person) => {
    console.log(`hello ${person.firstName} ${person.lastName}`)
}

const user3 = new student('mei','1','jie');

greeter3(user3);