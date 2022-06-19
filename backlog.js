function renderBacklog() {
    let workspace = document.getElementById('workspace');
    workspace.innerHTML = backlogTemplate();

    renderBacklogTasks();
}


function renderBacklogTasks() {
    let backlogTable = document.getElementById('backlog-table');

    for (let i = 0; i < allTasks.length; i++) {
        const task = allTasks[i];
        
        backlogTable.innerHTML += /*html*/`
            <tr id="backlog-tasks" class="backlog-table-tasks">
                <td>${task['assignedTo']}</td>
                <td>${task['category']}</td>
                <td>${task['description']}</td>
            </tr>
        `;
    }
}


function backlogTemplate() {
    return /*html*/ `
        <div class="backlog-container">
            <div class="backlog-header">
                <h1>Backlog</h1>
                <p>Learning Managment System Project</p>
            </div>
            <table id="backlog-table" class="backlog-table">
                <tr class="backlog-table-header">
                    <th>Assigned to</th>
                    <th>Category</th>
                    <th>Details</th>
                </tr>
            </table>
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