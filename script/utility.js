// select necessary dom elements
const taskCountEl = document.getElementById('task-count');
const completedCountEl = document.querySelector('.rounded-md span');
const completedButtons = document.querySelectorAll('.completed-btn');
const activityLog = document.getElementById('clearHistory').parentElement;
const clearHistoryBtn = document.getElementById('clearHistory');
const currentDateEl = document.getElementById('currentDate');
const themeImage = document.getElementById('themeImage');
let taskCount = parseInt(taskCountEl.textContent);
let completedCount = parseInt(completedCountEl.textContent);

// real-time clock
function getTime() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

// real-time date
function updateDate() {
    const now = new Date();
    const options = { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' };
    currentDateEl.textContent = now.toLocaleDateString('en-US', options);
}

// theme color
function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// changing theme color
themeImage.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
});

// update date 
updateDate();

// handle task completion
completedButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (taskCount > 0) {
            taskCount--;
            completedCount++;
            taskCountEl.textContent = taskCount.toString();
            completedCountEl.textContent = completedCount.toString();
            button.disabled = true;
            button.classList.add('opacity-50', 'cursor-not-allowed');

            // add log entry
            const taskTitle = button.parentElement.querySelector('h3').textContent;
            const logEntry = document.createElement('p');
            logEntry.textContent = `You have Completed The Task ${taskTitle} at ${getTime()}`;
            activityLog.insertBefore(logEntry, clearHistoryBtn);

            alert('taskmeter.netlify.app says \n Board updated successfully');

            // check if all tasks are completed
            if (taskCount === 0) {
                setTimeout(() => {
                    alert('taskmeter.netlify.app says \n Congrats!! You have completed all the current tasks.');
                }, 100);
            }
        }
    });
});

// clear history
clearHistoryBtn.addEventListener('click', () => {
    const logs = activityLog.querySelectorAll('p');
    logs.forEach(log => log.remove());

    completedCount = 0;
    completedCountEl.textContent = completedCount.toString();
    updateDate();
});



