const xValues = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October','November', 'December'];
const yValues = [65, 59, 80, 81, 56, 55, 40, 33, 41, 45, 77, 66];
const barColors = ["red", "green","blue","orange","brown","yellow","pink", "purple", "grey", "lightblue","teal", "maroon"];

new Chart("myBarChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calender');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth'
    });
    calendar.render();
  });

let timerInterval; // Declare timerInterval in the global scope
let seconds = 0;
let minutes = 0;
let hours = 0;
  function startTimer() {
    clearInterval(timerInterval); // Clear any existing timer
    timerInterval = setInterval(() => {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
        document.getElementById('timer').textContent = 
            (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + 
            (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + 
            (seconds > 9 ? seconds : "0" + seconds);
    }, 1000);

    const now = new Date();
    const clockInTime = now.toTimeString().split(' ')[0]; // Get current time as HH:MM:SS
    const clockInParagraph = document.getElementById('Clock-in-time').querySelector('p');
    clockInParagraph.innerHTML = `Clock In Time: <span class="clock-time">${clockInTime}</span>`;
}

// Function to format date as DD-MMM-YYYY
function formatDate(date) {
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  return date.toLocaleDateString('en-GB', options).replace(/ /g, '-');
}

// Set the date paragraph with today's date
document.addEventListener("DOMContentLoaded", function() {
  const today = new Date();
  document.querySelector('.datetime').textContent = formatDate(today);
});
