let backlogArray;
let backlogStories;
let task;
let categorycolor;
let profileImg;


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
        
        categoryColor();
        
        
        
        backlogStories.innerHTML += templateBacklogTasks(categorycolor , profileImg);
        
        
    } 
    
    displayCollaborators();
}

function categoryColor() {

    if (task['category'] == "Management") {
        categorycolor = '#E26EFF';
    }
    if (task['category'] == "Software Development") {
        categorycolor = '#FFAF6E';
    }
    if (task['category'] == "UX/UI Design") {
        categorycolor = '#55AE66';
    }
    if (task['category'] == "Human Ressources") {
        categorycolor = '#66A2DB';
    }
}

function displayCollaborators(){

   
    if(task['assignedImg'][0] === undefined ){
        let firstColl = document.getElementById(`user_img_1_${task['id']}`).classList.add('d-none');
    }
    if(task['assignedImg'][1] === undefined ){
        let secondColl = document.getElementById(`user_img_2_${task['id']}`).classList.add('d-none');
    }
    if(task['assignedImg'][2] === undefined ){
        let thirdColl = document.getElementById(`user_img_3_${task['id']}`).classList.add('d-none');
    }
    if(task['assignedImg'][3] === undefined ){
        let fourthColl = document.getElementById(`user_img_4_${task['id']}`).classList.add('d-none');
    }
}


function templateBacklogTasks(categorycolor , profileImg) {

    return /*html*/`
    <div onclick = "addBoard()" class = "backlog-table-tasks">
    
    <div style = "background-color:${categorycolor}" id = "priority_color">
    </div>
    
    <div class = "assigned_to" id="${task['id']}">
        <div >
            <img src="${task['assignedImg'][0]}" id="user_img_1_${task['id']}" class="backlog_profil_img, backlog_profil_img">
            <img src="${task['assignedImg'][1]}" id="user_img_2_${task['id']}" class="backlog_profil_img, backlog_profil_img">
            <img src="${task['assignedImg'][2]}" id="user_img_3_${task['id']}" class="backlog_profil_img, backlog_profil_img">
            <img src="${task['assignedImg'][3]}" id="user_img_4_${task['id']}" class="backlog_profil_img, backlog_profil_img">

        </div>
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