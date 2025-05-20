var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'black',
    location: 'Nairobi',
    contract: false,
};
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
console.log(printTeacher('John', 'Doe'));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workTeacherTask = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'cannot have a break';
    };
    Teacher.prototype.workTeacherTask = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}

console.log(createEmployee(200));