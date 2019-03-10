interface Person{
    firstName:string;
    lastName:string;
}

const greeter = (person:Person) => {
    console.log(`name:${person.firstName},${person.lastName}`);
}

const USER = {firstName:'mei',lastName:'jie'};

greeter(USER);