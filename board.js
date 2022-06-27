let userStories = [];
let card = {
    'title': '',
    'dueDate': '',
    'category': '',
    'assignedTo': '',
    'urgency': '',
    'createDats': '',
    'description': ''
};




// let titles = userStories['titles'];
// let dueDates = userStories['dueDates'];
// let categories = userStories['categories'];
// let assignedTo = userStories['assignedTo'];
// let urgencies = userStories['urgencies'];
// let createDats = userStories['createDats'];
// let descriptions = userStories['descriptions'];





function renderBoard(){
    
    // event.preventDefault();
    loadUserStory();
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
    console.log('der Container von For-schleife läuft')
   
    
        for (let i = 0; i < userStories.length; i++) {
            renderToDoTask(toDoTask, i);
            colorUserStory(i);
            console.log('die For-schleife funktioniert!', i)
              
        }

    
        
}

function renderToDoTask(toDoTask, i) {
    let title = userStories[i]['title'];
    let dueDate = userStories[i]['dueDate'];
    let category = userStories[i]['category'];
    let collaborators = userStories[i]['assignedTo'];
    toDoTask.innerHTML += 
    `<div class = "user-story">
    <strong>${title}</strong> <span>${dueDate}</span>
    <p>${category}</p>
    <p>${collaborators}</p>
    </div>
    `;
}

function colorUserStory(i){
    let urgency = userStories[i]['urgency'];
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
    card['title'] = allTasks[i].title;
    card['dueDate'] = allTasks[i].dueDate;
    card['category'] = allTasks[i].category;
    card['assignedTo'] = allTasks[i].assignedTo;
    card['urgency'] = allTasks[i].urgency;
    card['createDat'] = allTasks[i].createdAt;
    card['description'] = allTasks[i].description;
    userStories.push(card);
    saveUserStory();
    
    
}

function saveUserStory(){
    let userStoryAsString = JSON.stringify(userStories);
    localStorage.setItem('userStories', userStoryAsString);
    console.log('userStories ', userStories, '; userStoriesAsString ', userStoryAsString);
}

function loadUserStory() {
    let userStoryAsString = localStorage.getItem('userStories');
    if(userStoryAsString){
        userStories = JSON.parse(userStoryAsString);
        console.log('loaded userstories:', userStories);
        
    }
  
}