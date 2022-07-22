let allTasks = [];
let countId = 0;
let dropdown = false;

function renderAdToTask() {
    let adToTask = document.getElementById('workspace');
    adToTask.innerHTML = '';
    adToTask.innerHTML += adToTaskTemplate();
}


function openDropdown() {
    document.getElementById('assigned-input').classList.remove('d-none');
    // document.getElementById('dialogAdTask').classList.add('d-none');

}


function requestForm() {
    event.preventDefault();
    if (dropdown == true) {
        createTask();
    } else {
        document.getElementById('assigned-input').classList.remove('d-none');
        document.getElementById('assigned-input').required = true;
        document.getElementById('dialogAdTask').classList.remove('d-none');

    }
}


function createTask() {
    countId++;
    let task_title = document.getElementById('title-input');
    let task_due_date = document.getElementById('date-input');
    let task_category = document.getElementById('category-input');
    let task_urgency = document.getElementById('urgency-input');
    let task_description = document.getElementById('description-input');
    let task_assigned = document.getElementById('assigned-input');

    document.getElementById('assigned-input').classList.add('d-none');

    let completeTask = {
        'id': countId,
        'title': task_title.value,
        'dueDate': task_due_date.value,
        'category': task_category.value,
        'urgency': task_urgency.value,
        'description': task_description.value,
        'assignedTo': task_assigned.value,
        'createdAt': new Date().getTime()
    };

    task_title.value = '';
    task_due_date.value = '';
    task_category.value = '';
    task_urgency.value = '';
    task_description.value = '';
    task_assigned.value = '';

    console.log(allTasks);
    dropdown = false;
    saveAllTasks(completeTask);
    renderBacklog();
}


// ##### SPEICHERN IM BACKEND: #####
setURL('http://gruppe-252.developerakademie.net/smallest_backend_ever');

function saveAllTasks(completeTask) {
    allTasks.push(completeTask);
    backend.setItem('allTasks', JSON.stringify(allTasks));
    backend.setItem('countId', JSON.stringify(countId));
}


// ##### LADEN AUS DEM BACKEND: #####
async function loadAllTasks() {
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];
    countId = JSON.parse(backend.getItem('countId')) || [];
}


function changePhoto() {
    dropdown = true;

    document.getElementById('assigned-input').classList.remove('d-none');

    let photo = document.getElementById('profilepicture');
    let input = document.getElementById('assigned-input');

    photo.classList.remove('d-none')

    if (input.value == 'Kevin') {
        photo.src = "img/Icons/kevin.jpg"
        photo.src = "img/Icons/kevin.jpg"
    } else if (input.value == 'Feros') {
        photo.src = "img/Icons/feros.jpeg"
        photo.src = "img/Icons/feros.jpeg"
    } else if (input.value == 'Daniel') {
        photo.src = "img/Icons/daniel.jpg"
        photo.src = "img/Icons/daniel.jpg"
    } else if (input.value == 'Norbert') {
        photo.src = "img/Icons/norbert.jpg"
        photo.src = "img/Icons/norbert.jpg"
    };
}


function adToTaskTemplate() {
    return /*html*/`
        <div class="add-task-main-container">
            <!-- <div class="add-task-container"> -->

            <form onsubmit="requestForm()" class="add-task-container">

                <div class="top-row">
                    <div class="title-input-container">
                        <h2>Title</h2>
                        <input required id="title-input" type="text">
                    </div>
                    <div class="date-container">
                        <h2>Due Date</h2>
                        <input required id="date-input" type="date">
                    </div>
                </div>


                <div class="mid-row">
                    <div class="category-container">
                        <h2>Category</h2>
                        <select name="" id="category-input">
                            <option value="Management">Management</option>
                            <option value="Software Development">Software Development</option>
                            <option value="UX/UI Design">UX/UI Design</option>
                            <option value="Human Ressources">Human Ressources</option>
                        </select>
                    </div>
                    <div class="urgency-container">
                        <h2>Urgency</h2>
                        <select name="" id="urgency-input">
                            <option value="High">High</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                </div>


                <div class ="bottom-row">
                    <div class="description-container">
                        <h2>Description</h2>
                        <textarea required name="" id="description-input" cols="30" rows="10"></textarea>
                    </div>
                    <div class="assigned-to-container">
                        <h2>Assigned to</h2>
                        <div class="placeholder-container">
                            <div class="icon-container">
                                <img id="profilepicture" class="profilepicture d-none" src="" alt="">
                                <div id="addButtonCont" onclick="openDropdown()" class="add-button-container">
                                    <img id="addButton"  class="add-button" src="img/Icons/add-icon.png" alt="">
                                </div>
                                <select name="assigned-input" onchange="changePhoto()" id="assigned-input" 
                                class="choose-name-input d-none">
                                    <option value="" selected disabled>Select your option</option>
                                    <option value="Kevin">Kevin</option>
                                    <option value="Feros">Feros</option>
                                    <option value="Norbert">Norbert</option>
                                    <option value="Daniel">Daniel</option>
                                </select>
                                
                            </div>
                            <div id="dialogAdTask" class="dialog-adToTask d-none">
                                <p>Dem Feld <span>Assigned to</span> muss jemanden zugewiesen werden.</p>
                            </div>
                            <div class="button-container">
                                <button>Cancel</button>
                                <button id="button-form">Create Task</button>
                            </div>
                        </div>
                    </div>
                </div>

                
            </form>
            <!-- </div> -->

        </div>
    `;
}


function showMenu() {
    document.getElementById('overmenu').classList.add('showoverlay');
}


function closeMenu() {
    document.getElementById('overmenu').classList.remove('showoverlay');
} 