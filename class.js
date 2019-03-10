var student = /** @class */ (function () {
    function student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return student;
}());
var greeter = function (person) {
    console.log("name: " + person.firstName + " " + person.lastName);
};
var USER = new student('mei', 'ysq', 'jie');
greeter(USER);
