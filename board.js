let titles = [];


function renderBoard(){



    let workspace = document.getElementById('workspace');
    workspace.innerHTML = `
    <div class="board-container">
        <div  class="task-container">
            <h2>to do</h2>
            <div id="todotask" class="task">
                <div>
                    ${titles}
                </div>
            </div>
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



function addBoard(i) {
    let allTasksAsString = localStorage.getItem('allTasks');

    if (allTasksAsString) {
        allTasks = JSON.parse(allTasksAsString);
        
    }  

    let tickets = allTasks[i];
    console.log(tickets);
    titles.push(tickets.title);
    

}