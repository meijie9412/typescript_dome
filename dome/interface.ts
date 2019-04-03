interface Person {
    firstName:string,
    lastName:string,
}

const greeter2 = (person:Person) => {
    console.log(`hello ${person.firstName} ${person.lastName}`);
}

const user2 = {
    firstName:'123',
    lastName:'321',
}

greeter2(user2);