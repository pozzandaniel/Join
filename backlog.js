async function renderBacklog() {
    let workspace = document.getElementById('workspace');
    workspace.innerHTML = backlogTemplate();

    await renderBacklogTasks();
}


function renderBacklogTasks() {
    let workspace = document.getElementById('workspace');

    for (let i = 0; i < allTasks.length; i++) {
        const task = allTasks[i];

        workspace.innerHTML += /*html*/`
            <div onclick="addBoard(${i}), deleteBacklogTask(${i})" class="backlog-table-tasks">
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


function deleteBacklogTask(i) {
    allTasks.splice(i, 1);
    backend.setItem('allTasks', JSON.stringify(allTasks));
    renderBacklog();
    console.log(allTasks);
    callDialog();
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
            <div id="dialogBacklog" class="dialog-backlog d-none">
                <p>Eine User Story wurde in Ihrem Board generiert</p>
            </div>

        </div>
    `;
}


function callDialog() {
    let dialog = document.getElementById('dialogBacklog');

    dialog.classList.remove('d-none');
    setTimeout(() => {
        dialog.classList.add('d-none');
    }, 2000);
}