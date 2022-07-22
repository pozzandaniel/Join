let checkbox; 
let account;
let currentuser;
    
async function renderAccount() {
    let url = './account.json';
    let response = await fetch(url);
    account = await response.json();
}


function login() {
    let username = document.getElementById('username').value;
    let userpassword = document.getElementById('userpassword').value;
    if(account.some( user => user.name == username && user.password == userpassword )) {
        account.forEach(element => {
            if (username == element.name) {
                console.log(element.bild);
                saveImagePath(element.bild);

                setTimeout( () => {
                    window.location = `./board.html`;
                }, 1500)
            }
        });
    }
    else {
        alert('NO USER FOUND WITH USERNAME AND PASSWORD');
    } 
}

function saveImagePath(imagePath) {
    localStorage.setItem('userPath', imagePath);
}

function switchToSignUp() {
    let textButton = document.getElementById('button');
    checkbox =  document.getElementById('newAccount');
    
    if (checkbox.checked == true) {
        textButton.innerHTML = "Sign Up";
        document.getElementById('button').type = 'button';
        document.getElementById('button').addEventListener("click", AddAccount);

    } else {
        textButton.innerHTML = "Login In";
        document.getElementById('button').type = 'submit';
    }
}

class Guest {
    name;
    password;
    bild;
}

function AddAccount(username, password) {
    username = document.getElementById('username');
    password = document.getElementById('userpassword');
    let newGuest = new Guest();
    newGuest['name'] = username.value;
    newGuest['password'] = password.value;
    newGuest['bild'] = './assets/images/guest-user.jpg'
    account.push(newGuest);
    refreshForm(username, password);
}

function refreshForm(username, password) {
    event.preventDefault();
    checkbox.checked = false;
    document.getElementById('button').innerHTML = "Log In";
    document.getElementById('button').removeEventListener("click", AddAccount);
    document.getElementById('button').type = 'submit';
    if (username.value && password.value) {
        alert('Your Username and Password is saved and you can log in');
    } else {
        alert('You must give an username and a password!');
    }
}