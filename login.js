

async function renderAccount(){
    let url = './account.json';
    let response = await fetch(url);
    account = await response.json();
    
    login(account);
    
}

function login(account){

        //    document.getElementById('loginContainer').classList.add('display_none');
    let username = document.getElementById('username');
    let userpassword = document.getElementById('userpassword');
    
    for(let i = 0; i < account.length; i++){


        if(account[i].name == username.value && account[i].password == userpassword.value){


            
        }
    

    }


}