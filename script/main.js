// select necessary DOM elements
const completeButtons = document.querySelectorAll('.completed-btn');
const taskCount = document.getElementById('task-count');
const increas = document.getElementById('increase');

let intTaskCount = parseInt(taskCount.textContent); 
let intIncreas = parseInt(increas.textContent); 

// add even listener to each button
completeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        if (intTaskCount > 0) {
           
            intTaskCount--; 
            intIncreas++;   
            
            taskCount.textContent = intTaskCount.toString();
            increas.textContent = intIncreas.toString();

            
            button.disabled=true; // button ke disable kore dei
            button.classList.add('opacity-50', 'cursor-not-allowed');

            // alert added
            alert('taskmeter.netlify.app says \n Board updated successfully');

            

            const taskTitle = button.parentElement.querySelector('h3').textContent;
            const logEntry = document.createElement('p');
            logEntry.textContent = `You have completed the task: ${taskTitle}`;

           
        }
    });
});


