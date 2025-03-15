// script.js

let result = await fetch("http://localhost:3000/get");
let totalTasks = 10; // total number of tasks
let completedTasks = 0; // number of tasks completed




const progressImage = document.getElementById("progress-image");
const completeTaskBtn = document.getElementById("complete-task-btn");

completeTaskBtn.addEventListener("click", function() {
    if (completedTasks < totalTasks) {
        completedTasks++;
        updateProgressImage();
    }
});

function updateProgressImage() {
    const percentageCompleted = (completedTasks / totalTasks) * 100;
    
    // Change image based on task completion
    if (percentageCompleted === 100) {
        progressImage.src = '/images/FullMoon.png'; // Change to completed image
    } else if (percentageCompleted >= 50) {
        progressImage.src = '/images/HalfMoon.png'; // Change to half completed image
    } else {
        progressImage.src = '/images/NewMoon.png'; // Initial incomplete image
    }
}