// Display the current time
function updateTime() {
    const timeElement = document.querySelector('.sidebar-header p');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedTime = `${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
    timeElement.textContent = `${formattedTime} - Online`;
}

// Update tasks dynamically
function updateTasks() {
    const tasks = [
        "Lorem ipsum dolor sit amet.",
        "Voluptate recusandae deleniti officia dignissimos.",
        "Temporibus recusandae molestias libero ea.",
        "Aut est quaerat modi accusamus.",
        "Maxime molestiae non tempora harum. (Doing)",
        "Laudantium pariatur tempora harum repellat! (Due in 5hrs)"
    ];

    const tasksList = document.querySelector('.tasks ul');
    tasksList.innerHTML = ''; // Clear existing tasks

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        tasksList.appendChild(li);
    });

    // Update the tasks count
    document.querySelector('.tasks h2').textContent = `You have ${tasks.length} tasks today.`;
}

// Simulate score calculations
function calculateScores() {
    const dayScore = (Math.random() * 10).toFixed(2);
    const weekScore = (Math.random() * 10).toFixed(2);
    const efficiency = (Math.random() * 100).toFixed(2);

    document.querySelector('.scores p:nth-child(2)').textContent = `Day score: ${dayScore}/10`;
    document.querySelector('.scores p:nth-child(3)').textContent = `Week score: ${weekScore}/10`;
    document.querySelector('.scores p:nth-child(4)').textContent = `Task efficiency (week avg): ${efficiency}%`;
}

// Initialize the dashboard
function initDashboard() {
    updateTime();
    updateTasks();
    calculateScores();

    // Update the time every minute
    setInterval(updateTime, 60000);
}

// Initialize the dashboard when the page loads
document.addEventListener('DOMContentLoaded', initDashboard);
