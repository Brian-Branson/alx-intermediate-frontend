interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string; }

  const student1: Student = {
    firstName: "John",
    lastName: "blackthorn",
    age: 17,
    location: "Nairobi",
  };

  const student2: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 18,
    location: "Nairobi",
  };

const studentList: Student[] = [student1, student2];


const table = document.createElement("table");
const header = table.insertRow();
header.innerHTML = "<th>First Name</th><th>Location</th>";

 studentList.forEach((student) => {
  const row = table.insertRow();
  row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
});
 
document.body.appendChild(table);

