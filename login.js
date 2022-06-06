async function renderAccount(){
    let url = './account.json';
    let response = await fetch(url);
    let account = await response.json();
    
    login(account);
}

function login(account){
 /*   document.getElementById('container').style.display = "none"; */
    body.innerHTML += `
    
        <div class="login">
        <form action="">
        <input type="text">
        <input type="text">
        <button>Log In</button>
    </form>
        </div>
    `;
    console.log(account[1].name);
}