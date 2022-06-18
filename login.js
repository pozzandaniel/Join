
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



function createNewAccount(){
    let checkbox = document.getElementById('newAccount');

    let textButton = document.getElementById('button');

    if (checkbox.checked == true){
        textButton.innerHTML = "Sign Up";
      } else {
        textButton.innerHTML = "Login in";
      }
}

