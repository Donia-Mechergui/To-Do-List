
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert('You must write something!');
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; 
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    } else if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem('tasks', listContainer.innerHTML);
}

function showData() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        listContainer.innerHTML = savedTasks;
        const listItems = listContainer.querySelectorAll('li');
        listItems.forEach((li) => {
            li.addEventListener('click', function (e) {
                if (e.target.tagName === 'SPAN') {
                    e.target.parentElement.remove();
                    saveData();
                } else if (e.target.tagName === 'LI') {
                    e.target.classList.toggle('checked');
                    saveData();
                }
            });
        });
    }
}

showData();
