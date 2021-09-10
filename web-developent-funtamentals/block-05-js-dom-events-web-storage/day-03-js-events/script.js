let = colorDay = '';


function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Exersise 1
function createWeekDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  const weekDays = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = dezDaysList[index];
    dayListItem.classList.add('day');
    if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
      dayListItem.classList.add('holiday');
    }
    if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25) {
      dayListItem.classList.add('friday');
    }
    weekDays.appendChild(dayListItem);
  }
}

createWeekDays();

// exercise 2
function createButtonHoliday(string) {
  const button = document.querySelector('.buttons-container');
  const createButton = document.createElement('button');
  createButton.innerHTML = string;
  createButton.id = 'btn-holiday';

  button.appendChild(createButton);
}

createButtonHoliday('Feriados');

// Exercise 3
const buttonHoliday = document.querySelector('#btn-holiday');

buttonHoliday.addEventListener('click', function () {
  const holiday = document.querySelectorAll('.holiday');
  for (index = 0; index < holiday.length; index += 1) {
    if (holiday[index].style.backgroundColor === 'white') {
      holiday[index].style.backgroundColor = 'unset';
    } else {
      holiday[index].style.backgroundColor = 'white';
    }
  }
});

// Exercise 4
function createButtonFriday(string) {
  const button = document.querySelector('.buttons-container');
  const createButton = document.createElement('button');
  createButton.innerHTML = string;
  createButton.id = 'btn-friday';

  button.appendChild(createButton);
}

createButtonFriday('Sexta-feira');

// Exercise 5
const buttonFriday = document.querySelector('#btn-friday');
buttonFriday.addEventListener('click', function () {
  const fridays = [4, 11, 18, 25];
  const friday = document.querySelectorAll('.friday');
  for (index = 0; index < friday.length; index += 1) {
    if (friday[index].innerHTML === 'Happy hour') {
      friday[index].innerHTML = fridays[index];
    } else {
      friday[index].innerHTML = 'Happy hour';
    }
  }
});

// Exercise 6
const days = document.querySelectorAll('.day');
for (let index = 0; index < days.length; index += 1) {
  days[index].addEventListener('mouseover', function() {
    const days = document.querySelectorAll('.day');
    days[index].style.fontSize = '30px';
    days[index].fontWeight = '600';
  });

  days[index].addEventListener('mouseout', function() {
    const days = document.querySelectorAll('.day');
    days[index].style.fontSize = '20px';
    days[index].fontWeight = '200';
  });
}

// Exercise 7
function createMyTasks(string) {
  const changeTasks = document.querySelector('.my-tasks');
  let createTasks = document.createElement('span');
  createTasks.innerText = string;
  changeTasks.appendChild(createTasks);
}

createMyTasks('Programar');

// Exercise 8
function createColorMyTasks(string) {
  colorDay = string;
  const changeTasks = document.querySelector('.my-tasks');
  let createDiv = document.createElement('div');
  createDiv.classList.add('task');
  createDiv.style.backgroundColor = colorDay;
  changeTasks.appendChild(createDiv);
}

createColorMyTasks('red');

// Exercise 9
let selectTask = true;
const changeSelectTasks = document.querySelector('.my-tasks div');
function changeSelectMyTasks(event) {
  if (selectTask) {
    event.target.classList.remove('task');
    event.target.classList.add('task-selected');
    return selectTask = false;
  }
  event.target.classList.remove('task-selected');
  event.target.classList.add('task');
  return selectTask = true;
}

changeSelectTasks.addEventListener('click', changeSelectMyTasks);

// Exercise 10
const colorItensDay = document.querySelectorAll('.day');

function changeColorDays(event) {
  if (document.querySelector('.my-tasks div').classList.contains('task-selected')) {
    return event.target.style.color = colorDay;
  }
  return event.target.style.color = '#777';
}

for (let index = 0; index < colorItensDay.length; index += 1) {
  colorItensDay[index].addEventListener('click', changeColorDays);
}

// Bônus
/**  Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".

    Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
    Ao pressionar a tecla "enter" o evento também deverá ser disparado.  */
const buttonAdd = document.getElementById('btn-add');

buttonAdd.addEventListener('click', function () {
  const receiveText = document.querySelector('#task-input');
  const createListTask = document.querySelector('.task-list');
  let createList = document.createElement('li');
  createList.innerHTML = receiveText.value;
  createListTask.appendChild(createList);
  receiveText.value = '';
});

