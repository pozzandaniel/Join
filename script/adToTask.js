let allTasks = [];
let generateId = 0;
let dropdown = false;
let selectedUsers = [];
let selected = {
    'kevin': false,
    'feros': false,
    'norbert': false,
    'daniel': false
}

function openDropdown() {
    if (dropdown == false) {
        document.getElementById('dialogAdTask').classList.add('d-none');
        document.getElementById('avatarPicker').classList.remove('d-none');
        dropdown = true;
    } else if (dropdown == true) {
        document.getElementById('dialogAdTask').classList.add('d-none');
        document.getElementById('avatarPicker').classList.add('d-none');
        dropdown = false;
    }

}

function requestForm() {
    event.preventDefault();
    if (selectedUsers.length > 0) {
        document.getElementById('button-form').disabled = true;
        document.getElementById('button-form').style = 'opacity: 0.6';
        createTask();
    } else {
        document.getElementById('avatarPicker').classList.remove('d-none');
        document.getElementById('dialogAdTask').classList.remove('d-none');
        dropdown = true;

    }
}


function createTask() {
    generateId = Math.round(Math.random()*10000);
    let task_title = document.getElementById('title-input');
    let task_due_date = document.getElementById('date-input');
    let task_category = document.getElementById('category-input');
    let task_urgency = document.getElementById('urgency-input');
    let task_description = document.getElementById('description-input');
        
    let completeTask = {
        'id': generateId,
        'title': task_title.value,
        'dueDate': task_due_date.value,
        'category': task_category.value,
        'urgency': task_urgency.value,
        'description': task_description.value,
        'assignedTo': selectedUsers,
        'createdAt': new Date().getTime()
    };
    
    task_title.value = '';
    task_due_date.value = '';
    task_category.value = '';
    task_urgency.value = '';
    task_description.value = '';
    
    dropdown = false;
    saveAllTasks(completeTask);
    
    setTimeout( () => {
        window.location = './backlog.html'
    }, 2000)
    
}

// ##### SPEICHERN IM BACKEND: #####

setURL('http://gruppe-252.developerakademie.net/smallest_backend_ever');

function saveAllTasks(completeTask) {
    allTasks.push(completeTask);
    backend.setItem('allTasks', JSON.stringify(allTasks));
}

// ##### LADEN AUS DEM BACKEND: #####

async function loadAllTasks() {
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];
}

function selectAvatar(id) {
    if (selected[id] == false) {
        selected[id] = true;
        document.getElementById(id).classList.add('selected-picture');
        document.getElementById('dialogAdTask').classList.add('d-none')
        selectedUsers.push(id);

    } else if (selected[id] == true) {
        selected[id] = false;
        document.getElementById(id).classList.remove('selected-picture');
        let indexAvatar = selectedUsers.indexOf(id);
        selectedUsers.splice(indexAvatar, 1);
    }
}
