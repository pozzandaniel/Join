let allTasks = [];

function renderAdToTask() {
    let adToTask = document.getElementById('workspace');
    adToTask.innerHTML = '';
    adToTask.innerHTML += adToTaskTemplate();
}


function openDropdown() {
    document.getElementById('assigned-input').classList.remove('d-none');
}

function createTask() {
    let task_title = document.getElementById('title-input');
    let task_due_date = document.getElementById('date-input');
    let task_category = document.getElementById('category-input');
    let task_urgency = document.getElementById('urgency-input');
    let task_description = document.getElementById('description-input');
    let task_assigned = document.getElementById('assigned-input');

    document.getElementById('assigned-input').classList.add('d-none');

    let completeTask = {
        'title': task_title.value,
        'due-date': task_due_date.value,
        'category': task_category.value,
        'urgency': task_urgency.value,
        'description': task_description.value,
        'assigned-to': task_assigned.value
    }

    allTasks.push(completeTask);

    task_title.value = '';
    task_due_date.value = '';
    task_category.value = '';
    task_urgency.value = '';
    task_description.value = '';
    task_assigned.value = '';

    console.log(allTasks);



}


function adToTaskTemplate() {
    return /*html*/`
        <div class="add-task-main-container">

            <div class="add-task-container">

                <div class="top-row">
                    <div class="title-input-container">
                        <h2>Title</h2>
                        <input required id="title-input" type="text">
                    </div>
                    <div class="date-container">
                        <h2>Due Date</h2>
                        <input id="date-input" type="date">
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
                        <textarea name="" id="description-input" cols="30" rows="10"></textarea>
                    </div>
                    <div class="assigned-to-container">
                        <h2>Assigned to</h2>
                        <div class="placeholder-container">
                            <div class="icon-container">
                                <img class="profilepicture" src="img/Icons/kevin.jpg" alt="">
                                <div onclick="openDropdown()" class="add-button-container">
                                    <img class="add-button" src="img/Icons/add-icon.png" alt="">
                                </div>
                                <select id="assigned-input" class="choose-name-input d-none" name="" id="">
                                    <option value="Kevin">Kevin</option>
                                    <option value="Feros">Feros</option>
                                    <option value="Norbert">Norbert</option>
                                    <option value="Daniel">Daniel</option>
                                </select>
                            </div>
                            <div class="button-container">
                                <button>Cancel</button>
                                <button onclick="createTask()">Create Task</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    `;
}