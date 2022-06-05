function renderBacklog() {
    let workspace = document.getElementById('workspace');
    workspace.innerHTML = '';
    workspace.innerHTML += backlogTemplate();
}

function backlogTemplate() {
    return /*html*/ `

        <div class="backlog-container">
            <div class="backlog-header">
                <h1>Backlog</h1>
                <p>Learning Managment System Project</p>
            </div>
            <div class="backlog-headlines">
                <p>assigned to</p>
                <p>category</p>
                <p>details</p>
            </div>
            <div class="backlog-inputs-container">

            </div>
        </div>
    `
}