function renderBacklog() {
    let workspace = document.getElementById('workspace');
    workspace.innerHTML = backlogTemplate();

    renderBacklogTasks();
}


function renderBacklogTasks() {
    let workspace = document.getElementById('workspace');
   

    for (let i = 0; i < allTasks.length; i++) {
        const task = allTasks[i];
        
        workspace.innerHTML += /*html*/`
            <div onclick="addBoard(${i}); deleteBacklogTask(${i})" class="backlog-table-tasks">
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
}

function deleteBacklogTask(i){
    allTasks.splice(i, 1);
    saveAllTasks();
    loadAllTasks();
    document.getElementById('workspace').innerHTML = '';
    renderBacklogTasks();
}




function backlogTemplate() {
    return /*html*/ `
        <div class="backlog-container">
            <div class="backlog-header">
                <h1>Backlog</h1>
                <p>Learning Managment System Project</p>
            </div>

            <div class="backlog-table-header">
                <div>
                    <h2>Assigned to</h2>
                </div>
                <div>
                    <h2>Category</h2>
                </div>
                <div>
                    <h2>Details</h2>
                </div>
            </div>

        </div>
    `;
}


function loadAllTasks() {
    let allTasksAsString = localStorage.getItem('allTasks');

    if (allTasksAsString) {
        allTasks = JSON.parse(allTasksAsString);
        console.log('loaded all tasks:', allTasks);
    }  
}