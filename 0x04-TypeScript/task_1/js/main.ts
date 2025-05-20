interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}


interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};
console.log(printTeacher('John', 'Doe'));

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
interface DirectorInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workTeacherTask: () => string;
}

interface TeacherInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workTeacherTask: () => string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workTeacherTask(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'cannot have a break';
  }

  workTeacherTask(): string {
    return 'Getting to work';
  }
}
function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}
console.log(createEmployee(200));