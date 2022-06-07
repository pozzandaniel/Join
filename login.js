async function renderAccount(){
    let url = './account.json';
    let response = await fetch(url);
    let account = await response.json();
    login(account)
    
    
}

function login(account){
    let username = document.getElementById('username').value;
    let userpassword = document.getElementById('userpassword').value;
    
    for(let i = 0; i <account.length; i++){
        if(account[i].name == username && account[i].password == userpassword){
            document.getElementById('loginContainer').classList.add('display_none');

        }
    

    }


}