
let account;
    
async function renderAccount(){
    let url = './account.json';
    let response = await fetch(url);
    account = await response.json();

    
    
}


function login(){
    
    let username = document.getElementById('username').value;
    let userpassword = document.getElementById('userpassword').value;
 //   let userImg = document.getElementById('user_img').src
    
    
    
    
    if(account.some( user => user.name == username && user.password == userpassword )){
        document.getElementById('loginContainer').classList.add('display_none');

       // document.getElementById('user_img').src = account[user].bild;
       //console.log(account[0].name);
    }
    else {
        //NO USER FOUND WITH USERNAME AND PASSWORD
        alert('NO USER FOUND WITH USERNAME AND PASSWORD');
        
       } 
   
    
    account.forEach(element => {
        
        if (username == element.name){
            document.getElementById('user_img').src = element.bild;
        }
    });


}


let checkbox; 

function switchToSignUp(){
    let textButton = document.getElementById('button');
    checkbox =  document.getElementById('newAccount');
    
    if (checkbox.checked == true){
        textButton.innerHTML = "Sign Up";
        document.getElementById('button').type = 'button';
        document.getElementById('button').addEventListener("click", AddAccount);

      } else {
        textButton.innerHTML = "Login In";
        document.getElementById('button').type = 'submit';
      }


}

class Guest{
    name;
    password;
}

function AddAccount(username, password){
    username = document.getElementById('username');
    password = document.getElementById('userpassword');
    let newGuest = new Guest();
    newGuest['name'] = username.value;
    newGuest['password'] = password.value;
    account.push(newGuest);
    refreshForm();

}

function refreshForm(){
    event.preventDefault();
    checkbox.checked = false;
    document.getElementById('button').innerHTML = "Log In";
    document.getElementById('button').removeEventListener("click", AddAccount);
    document.getElementById('button').type = 'submit';
    alert('Your Username and Password is saved and you can log in');



}