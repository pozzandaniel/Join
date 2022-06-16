
let account;
    
async function renderAccount(){
    let url = './account.json';
    let response = await fetch(url);
    account = await response.json();
    
    
}


function login(){
    
    
    let username = document.getElementById('username').value;
    let userpassword = document.getElementById('userpassword').value;
    
    
    // document.getElementById('loginContainer').style = 'display: none';
    // document.getElementById('form').classList.add('display_none !important');
    // document.getElementById('form').style = 'display: none';
    
    
    if(account.some( user => user.name == username && user.password == userpassword ))
        document.getElementById('loginContainer').classList.add('display_none');
    else
        //NO USER FOUND WITH USERNAME AND PASSWORD
        alert('NO USER FOUND WITH USERNAME AND PASSWORD');
    
    // if(account[0].name == username && account[0].password == userpassword){
    //     document.getElementById('loginContainer').classList.add('display_none');
        
        
        
    // }
   
}