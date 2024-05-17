let habits = [];

function handleButtonClick() {
    const button = document.getElementById('habit-button');
    const name = document.getElementById('name-of-the-habit').value;
    const dateStopped = document.getElementById('date-of-the-habit').value;

    console.log('Button Clicked:', button.textContent); // Debugging statement
    console.log('Name:', name); // Debugging statement
    console.log('Date Stopped:', dateStopped); // Debugging statement

    if (button.textContent === 'Add Habit') {
        addHabit(name, dateStopped);
    }
}

function addHabit(name, dateStopped) {
    if (name && dateStopped) {
        const habit = {
            name: name,
            dateStopped: new Date(dateStopped)
        };

        habits.push(habit);
        displayHabits();

        document.getElementById('name-of-the-habit').value = '';
        document.getElementById('date-of-the-habit').value = '';
    } else {
        alert('Please enter both the name of the habit and the date stopped.');
    }
}

function displayHabits() {
    const habitList = document.getElementById('habit-list');
    habitList.innerHTML = '<h2>Tracked Habits:</h2>';

    habits.forEach(habit => {
        const daysPassed = calculateDaysPassed(habit.dateStopped);
        const habitElement = document.createElement('div');
        habitElement.className = 'habit';
        habitElement.textContent = `${habit.name} - ${daysPassed} days since you stopped.`;
        habitList.appendChild(habitElement);
    });
}

function calculateDaysPassed(dateStopped) {
    const now = new Date();
    const timeDiff = now - new Date(dateStopped);
    const daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return daysPassed;
}

displayHabits();

