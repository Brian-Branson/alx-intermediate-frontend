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
console.log(printTeacher("John", "Doe"));
