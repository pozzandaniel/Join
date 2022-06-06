async function renderAccount(){
    let url = './account.json';
    let response = await fetch(url);
    let account = await response.json();
    
    login(account);
}

function login(account){

    console.log(account[1].name);
}