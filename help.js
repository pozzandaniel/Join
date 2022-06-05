function renderHelp() {

    let help = document.getElementById('workspace');
    help.innerHTML = '';
    help.innerHTML += HelpTemplate();




}

function HelpTemplate() {
    return `
    
    
    <div class="content-area">
    <h1>Help</h1>
    <h2>ADD-TASK</h2>
    <p>To create a new task, please give it a title, due date, category, urgency and a description. At last click on the + button to assign your task to someone. By clicking on "create task" your task will be created.</p>
    <h2>BACKLOG</h2>
    <p>The backlog shows the created task. If there is no task to show, it shows a help section.</p>
    <h2>BOARD</h2>
    <p>In the board you can see the tasks that have been added from the backlog. You can simply drag them into the desired column.</p>
</div>
</div>
    
    
    
    
    `;





}