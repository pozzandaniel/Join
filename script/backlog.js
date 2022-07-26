let backlogArray;
let backlogStories;
let task;
let categorycolor;

/**
 * The backlog tasks are rendered according to their belong to "backlog" category. 
 * In other words when the attribute "position" inside the main array "allTasks" is set to "backlog".
 */
async function renderBacklogTasks() {
    await loadAllTasks();
    backlogStories = document.getElementById('backlogStories-container');
    backlogArray = allTasks.filter(t => t['position'] == 'backlog');
    backlogStories.innerHTML = '';




    for (let i = 0; i < backlogArray.length; i++) {
        task = backlogArray[i];
    
        if (task['category'] == "Management" ) {
            categorycolor = '#E26EFF';
    }
    if (task['category'] == "Software Development" ) {
        categorycolor = '#FFAF6E';
    }
    if (task['category'] == "UX/UI Design" ) {
        categorycolor = '#55AE66';
    }
    if (task['category'] == "Human Ressources" ) {
        categorycolor = '#66A2DB';
    }

        backlogStories.innerHTML += templateBacklogTasks(categorycolor);


    }


}

function templateBacklogTasks(categorycolor) {

    return /*html*/`
    <div onclick = "addBoard()" class = "backlog-table-tasks">
    
    <div style = "background-color:${categorycolor}" id = "priority_color">
        
    </div>
    
    <div>
            <p>${task['assignedTo']}</p>
        </div>
        <div>
            <p>${task['category']}</p>
        </div>
        <div>
            <p>${task['description']}</p>
        </div>
    </div>
`;
}

/**
 * On click the related element inside the main array "allTasks", changes the attribute "position" to "board".
 * Then after 2 seconds the BacklogTasks are newly rendered. That causes the disappearing of the element, because
 * the attribute "position" is no more set on "backlog".
 */
function addBoard() {
    let idTask = task['id'];
    let array = allTasks.filter(t => t['id'] == idTask);
    array[0].position = 'board';
    saveAllTasks();
    callDialog();

    setTimeout(() => {
        renderBacklogTasks();
    }, 2000);
}

/**
 * A dialog window is open, when a task in backlog is clicked. After 2 seconds the window is automatically close.
 */
function callDialog() {
    let dialog = document.getElementById('dialogBacklog');
    dialog.classList.remove('d-none');

    setTimeout(() => {
        dialog.classList.add('d-none');
    }, 2000);
}




