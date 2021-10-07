const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

const getNumberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
};
console.log(getNumberOfStudents(allLessons));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const countStudent = (obj, math) => {
  let tot = 0;
  for (key in obj) {
    if (obj[key].materia === math) {
      tot += obj[key].numeroEstudantes;
    }
  }
  return tot;
} 

console.log(countStudent(allLessons, 'Matemática'))
