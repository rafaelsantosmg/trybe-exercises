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
  
  let weekDays = document.querySelector('#days');

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
function changeColorHolidays() {
  
  const holiday = document.querySelectorAll('.holiday');
  if (buttonHolidayOnOff === true) {
    for (index = 0; index < holiday.length; index += 1) {
      holiday[index].style.backgroundColor = 'white';
    }
    return buttonHolidayOnOff = false;
  } else {
  for (index = 0; index < holiday.length; index += 1) {
    holiday[index].style.backgroundColor = 'rgb(238,238,238)';
    holiday[index].style.color = '#777';
    }
    return buttonHolidayOnOff = true;
  }
}

let buttonHolidayOnOff = true;
let buttonHoliday = document.querySelector('#btn-holiday');

buttonHoliday.addEventListener('click', changeColorHolidays);

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
  const fridays = [4, 11, 18 ,25];
  const friday = document.querySelectorAll('.friday');
  if (buttonFridayOnOff === true) {
    for (index = 0; index < friday.length; index += 1) {
      friday[index].innerHTML = 'Happy hour';
    }
    return buttonFridayOnOff = false;
  } else {
  for (index = 0; index < fridays.length; index += 1) {
    friday[index].innerHTML = fridays[index];
    }
    return buttonFridayOnOff = true;
  }
}

let buttonFridayOnOff = true;
let buttonFriday = document.querySelector('#btn-friday');

buttonFriday.addEventListener('click', changeTextFriday);
