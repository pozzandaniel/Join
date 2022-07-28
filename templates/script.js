let imgUser;

/**
 * The function "start" is always called by loading of all sections
 */
async function start() {
    await includeHTML();
    await loadAllTasks();
    await getUserImage();
    console.log('url is: ',window.location.href.split("/").pop()); 
    if(window.location.href.split("/").pop() == 'board.html'){
        renderHTML();
    }   
    

    
}

/**
 * This function includes the template menu (left sidebar) to the webpage.
 * 
 */
async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for(let i = 0; i < includeElements.length; i++){
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html");
        let resp = await fetch(file);
        if(resp.ok){
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}

/**
 * After the login the function get the image path saved in the local storage and applies it to the account avatar
 */
async function getUserImage() {
    imgUser = localStorage.getItem('userPath');
    document.getElementById('user_img').src = imgUser;    
}

function showMenuu() {	
    document.getElementById('overmenu').classList.add('showoverlay');	
}	

function closeMenuu() {	
    document.getElementById('overmenu').classList.remove('showoverlay');	
} 

/**
 * By clicking the icon the homepage is called.
 */
function getHome() {
    window.location = './board.html';
}