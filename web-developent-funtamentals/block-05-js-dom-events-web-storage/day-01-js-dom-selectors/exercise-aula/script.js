let colorCyan = ['#EE9C84', '#AE6EF2', '#F9DB5E', '#232525'];

let divsEmergency = document.querySelectorAll('.emergency-tasks div');

let subTitlesEmergency = document.querySelectorAll('.emergency-tasks h3');

let divsNoEmergency = document.querySelectorAll('.no-emergency-tasks div');

let subTitlesNoEmergency = document.querySelectorAll('.no-emergency-tasks h3');

for (i = 0; i < divsEmergency.length; i += 1) {
  divsEmergency[i].style.background = colorCyan[0];
  subTitlesEmergency[i].style.background = colorCyan[1];
}

for (i = 0; i < divsEmergency.length; i += 1) {
  divsNoEmergency[i].style.background = colorCyan[2];
  subTitlesNoEmergency[i].style.background = colorCyan[3];
}
