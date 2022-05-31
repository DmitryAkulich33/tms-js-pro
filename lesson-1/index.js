const subjects = {
  mathematics: {
    students: 200,
    teachers: 6,
  },
  biology: {
    students: 120,
    teachers: 6,
  },
  geography: {
    students: 60,
    teachers: 2,
  },
  chemistry: {
    students: 100,
    teachers: 3,
  },
};

// Task 1
const subjectsInLine = Object.keys(subjects).join(', ');

// Task 4
const arrayFromValues = Object.values(subjects);

// Task 2
const peopleCount = arrayFromValues.reduce(
  (acc, elem) => acc + elem.students + elem.teachers,
  0
);

// Task 3
const studentsCount = arrayFromValues.reduce(
  (acc, elem) => acc + elem.students,
  0
);
const averageCountOfStudents = studentsCount / arrayFromValues.length;

// Task 5
const sortedArrayByTeachers = [...arrayFromValues];
sortedArrayByTeachers.sort((a, b) => b.teachers - a.teachers);

const users = [
  {
    id: 7,
    email: 'michael.lawson@reqres.in',
    first_name: 'Michael',
    last_name: 'Lawson',
    avatar: 'https://reqres.in/img/faces/7-image.jpg',
    age: 23,
  },
  {
    id: 8,
    email: 'lindsay.ferguson@reqres.in',
    first_name: 'Lindsay',
    last_name: 'Ferguson',
    avatar: 'https://reqres.in/img/faces/8-image.jpg',
    age: 20,
  },
  {
    id: 9,
    email: 'tobias.funke@reqres.in',
    first_name: 'Tobias',
    last_name: 'Funke',
    avatar: 'https://reqres.in/img/faces/9-image.jpg',
    age: 40,
  },
  {
    id: 10,
    email: 'byron.fields@reqres.in',
    first_name: 'Byron',
    last_name: 'Fields',
    avatar: 'https://reqres.in/img/faces/10-image.jpg',
    age: 36,
  },
  {
    id: 11,
    email: 'george.edwards@reqres.in',
    first_name: 'George',
    last_name: 'Edwards',
    avatar: 'https://reqres.in/img/faces/11-image.jpg',
    age: 70,
  },
  {
    id: 12,
    email: 'rachel.howell@reqres.in',
    first_name: 'Rachel',
    last_name: 'Howell',
    avatar: 'https://reqres.in/img/faces/12-image.jpg',
    age: 45,
  },
];

const newObj = users.reduce((acc, user) => {
  const lastName = user.last_name;
  const key = lastName.trim()[0].toLocaleLowerCase();
  if (acc.hasOwnProperty(key)) {
    acc[key].push(lastName);
  } else {
    acc[key] = [lastName];
  }
  return acc;
}, {});
console.log(newObj);
