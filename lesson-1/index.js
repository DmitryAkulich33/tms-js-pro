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
