let currentDeletedTaskIndex;
let currentDeletedTaskId;

async function renderBacklogTasks() {
    await loadAllTasks();
    let workspace = document.getElementById('backlogStories-container');
    workspace.innerHTML = '';

    for (let i = 0; i < allTasks.length; i++) {
        const task = allTasks[i];
        workspace.innerHTML += /*html*/`
            <div onclick = "addBoard(${i}), deleteBacklogTask(${i})" class = "backlog-table-tasks">
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

setURL('http://gruppe-252.developerakademie.net/smallest_backend_ever');

async function deleteBacklogTask(i) {
    currentDeletedTaskIndex = i;
    currentDeletedTaskId = allTasks[currentDeletedTaskIndex].id;
    console.log('deleteBacklogTask start! allTasks: ', allTasks, ' index deleted task: ', i, ' deleted Task: ', allTasks[i]);
    await allTasks.splice(currentDeletedTaskIndex, 1);
    console.log('after splice! allTasks: ', allTasks, ' index deleted task: ', i, ' deleted Task: ', allTasks[i]);
    await backend.setItem('allTasks', JSON.stringify(allTasks));
    console.log('after save in Backend! allTasks: ', allTasks, ' index deleted task: ', i, ' deleted Task: ', allTasks[i]);
    callDialog();
    checkDeletedState(currentDeletedTaskIndex, currentDeletedTaskId);
    console.log('after loaded in Backend! allTasks: ', allTasks, ' index deleted task: ', i, ' deleted Task: ', allTasks[i]);
}

async function checkDeletedState(index, taskId) {
    await loadAllTasks();
    if (allTasks.length > 0) {
        allTasks.forEach (task => {
            if (task.id == taskId) {
                alert('Something went wrong... Wait please');
                deleteBacklogTask(index);
            } else {
                renderBacklogTasks();
            }
        })
    } else {
        alert('the array is empty');
        renderBacklogTasks();
    }
}

function callDialog() {
    let dialog = document.getElementById('dialogBacklog');
    dialog.classList.remove('d-none');

    setTimeout( () => {
        dialog.classList.add('d-none');
    }, 4000);
}

setURL('http://gruppe-252.developerakademie.net/smallest_backend_ever');

async function loadAllTasks() {
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];

}





