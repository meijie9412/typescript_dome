var student = /** @class */ (function () {
    function student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return student;
}());
var greeter3 = function (person) {
    console.log("hello " + person.firstName + " " + person.lastName);
};
var user3 = new student('mei', '1', 'jie');
greeter3(user3);
