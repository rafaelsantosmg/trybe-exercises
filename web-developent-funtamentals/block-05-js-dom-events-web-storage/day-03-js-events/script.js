let = colorDay = '';
let buttonHolidayOnOff = true;

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
  const createButton = document.createElement('input');
  createButton.type = 'button';
  createButton.value = string;
  createButton.id = 'btn-holiday';

  button.appendChild(createButton);
}

createButtonHoliday('Feriados');

// Exercise 3

const buttonHoliday = document.querySelector('#btn-holiday');

buttonHoliday.addEventListener('click', function () {

  const holiday = document.querySelectorAll('.holiday');
  if (buttonHolidayOnOff === true) {
    for (index = 0; index < holiday.length; index += 1) {
      holiday[index].style.backgroundColor = 'white';
    }
    return buttonHolidayOnOff = false;
  }
  for (index = 0; index < holiday.length; index += 1) {
    holiday[index].style.backgroundColor = 'rgb(238,238,238)';
    holiday[index].style.color = '#777';
  }
  return buttonHolidayOnOff = true;
});

// Exercise 4
function createButtonFriday(string) {
  const button = document.querySelector('.buttons-container');
  const createButton = document.createElement('input');
  createButton.type = 'button';
  createButton.value = string;
  createButton.id = 'btn-friday';

  button.appendChild(createButton);
}

createButtonFriday('Sexta-feira');

// Exercise 5
function changeTextFriday() {
  const fridays = [4, 11, 18, 25];
  const friday = document.querySelectorAll('.friday');
  if (buttonFridayOnOff) {
    for (index = 0; index < friday.length; index += 1) {
      friday[index].innerHTML = 'Happy hour';
    }
    return buttonFridayOnOff = false;
  }
  for (index = 0; index < fridays.length; index += 1) {
    friday[index].innerHTML = fridays[index];
  }
  return buttonFridayOnOff = true;
}

let buttonFridayOnOff = true;
const buttonFriday = document.querySelector('#btn-friday');

buttonFriday.addEventListener('click', changeTextFriday);

// Exercise 6
const listItens = document.querySelectorAll('.day');
let textInDe = true;

function increaseText(event) {
  if (textInDe) {
    event.target.style.fontSize = '25px';
    event.target.style.fontWeight = '900';
    return textInDe = false;
  }
  event.target.style.fontSize = '20px';
  event.target.style.fontWeight = '400';
  return textInDe = true;
}

for (let index = 0; index < listItens.length; index += 1) {
  listItens[index].addEventListener('mouseenter', increaseText);
  listItens[index].addEventListener('mouseout', increaseText);
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

buttonAdd.addEventListener('click', function() {
  const receiveText = document.querySelector('#task-input');
  const createListTask = document.querySelector('.task-list');
  let createList = document.createElement('li');
  createList.innerHTML = receiveText.value;
  createListTask.appendChild(createList);
  receiveText.value = '';
});

