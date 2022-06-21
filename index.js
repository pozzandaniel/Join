function renderIndex(){
    let workspace = document.getElementById('workspace');
    workspace.innerHTML = `
    <div class="board-container">
        <div class="task-container">
            <h2>to do</h2>
            <div class="task"></div>
        </div>
        <div class="task-container">
            <h2>in progress</h2>
            <div class="task"></div>
        </div>
        <div class="task-container">
            <h2>testing</h2>
            <div class="task"></div>
        </div>
        <div class="task-container">
            <h2>done</h2>
            <div class="task"></div>
        </div>
    </div>

    `;
}