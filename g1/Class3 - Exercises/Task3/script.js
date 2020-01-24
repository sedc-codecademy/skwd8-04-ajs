// Create a reminder app
// There should be:
// An input for entering title
// An input for entering priority
// An input for color
// A textarea for adding description
// A button for adding the reminder
// A button for showing all reminders
// When the button for adding is clicked an object needs to be created with the properties from the inputs (title, priority, color and description)
// The object should then be added to an array of reminders
// When the button for showing all reminders is clicked it should show a table with title, priority and description columns
// The title should be the color of the "color" property

let reminders = [];

// Contructor
function Reminder(title, priority, color, description) {
  this.title = title;
  this.priority = priority;
  this.color = color;
  this.description = description;
}

// Selectors

let title = document.getElementById('title');
let priority = document.getElementById('priority');
let color = document.getElementById('color');
let description = document.getElementById('description');
let tbody = document.querySelector('tbody');
let addReminder = document.getElementById('add-reminder');
let showRemindersBtn = document.getElementById('show-reminders');

// Events
addReminder.addEventListener('click', function() {
  let titleValue = title.value;
  let priorityValue = priority.value;
  let colorValue = color.value;
  let descriptionValue = description.value;

  let newReminder = new Reminder(titleValue, priorityValue, colorValue, descriptionValue);

  reminders.push(newReminder);
  showReminders();
});

showRemindersBtn.addEventListener('click', showReminders);

function showReminders() {
  for (const reminder of reminders) {
    let tr = document.createElement('tr');

    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');

    td1.innerText = reminder.title;
    td1.style.color = reminder.color;
    td2.innerText = reminder.priority;
    td3.innerText = reminder.description;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tbody.appendChild(tr);
  }
}
