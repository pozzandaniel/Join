let userStories = {
    'titles': [],
    'dueDates': [],
    'categories': [],
    'assignedTo': [],
    'urgencies': [],
    'createDats': [],
    'descriptions': []
}

let titles = userStories['titles'];
let dueDates = userStories['dueDates'];
let categories = userStories['categories'];
let assignedTo = userStories['assignedTo'];
let urgencies = userStories['urgencies'];
let createDats = userStories['createDats'];
let descriptions = userStories['descriptions'];



function renderBoard(){
    
    let workspace = document.getElementById('workspace');
    workspace.innerHTML = `
    <div class="board-container">
    <div  class="task-container">
            <h2>to do</h2>
            <div id="toDoTask" class="task"></div>
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
        
    getUserStory();
        
}
    
function getUserStory(){

        let toDoTask = document.getElementById('toDoTask');
        toDoTask.innerHTML = '';  
        
        for (let i = 0; i < titles.length; i++) {
            renderToDoTask(toDoTask, i);
            colorUserStory(i);
          
        }
        
}

function renderToDoTask(toDoTask, i) {
    loadUserStory(); 
    let title = titles[i];
    let dueDate = dueDates[i];
    let category = categories[i];
    let collaborators = assignedTo[i];
    toDoTask.innerHTML += 
    `<div class = "user-story">
    <strong>${title}</strong> <span>${dueDate}</span>
    <p>${category}</p>
    <p>${collaborators}</p>
    </div>
    `;
}

function colorUserStory(i){
    let urgency = urgencies[i];
    let card = document.getElementsByClassName('user-story')[i];
    if(urgency == 'High'){
        card.style = 'background-color: rgba(200, 23, 23, 1);'
    } else if(urgency == 'Intermediate'){
        card.style = 'background-color: yellow;'
    } else {
        card.style = 'background-color: rgba(23, 200, 23, 1);'
    }
}

function addBoard(i) {
    titles.push(allTasks[i].title);
    dueDates.push(allTasks[i].dueDate);
    categories.push(allTasks[i].category);
    assignedTo.push(allTasks[i].assignedTo);
    urgencies.push(allTasks[i].urgency);
    createDats.push(allTasks[i].createdAt);
    descriptions.push(allTasks[i].description);
    saveUserStory();
}

function saveUserStory(){
    let userStoryAsString = JSON.stringify(userStories);
    localStorage.setItem('userStories', userStoryAsString)
}

function loadUserStory() {
    let userStoryAsString = localStorage.getItem('userStories');

    if (userStoryAsString) {
        userStories = JSON.parse(userStoryAsString);
        console.log('loaded userstories:', userStories);
    }  
}