
function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    localStorage.setItem('uName', name);
    localStorage.setItem('uEmail', email);
    localStorage.setItem('uPass', pass);
    localStorage.setItem('isGuest', 'false');
    alert("Account created successfully!");
    window.location.href = "index.html";
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const pass = document.getElementById('Loginpass').value;
    const storedEmail = localStorage.getItem('uEmail');
    const storedPass = localStorage.getItem('uPass');
    
    if(email === storedEmail && pass === storedPass){
        localStorage.setItem('isGuest', 'false');
        window.location.href = "index.html";
    } else {  
        alert("Invalid email or password. Please create an account if you don't have one.");
    }
}

function enterAsGuest() {
    localStorage.setItem('uName', 'Guest User');
    localStorage.setItem('uEmail', 'guest@cinema.com');
    localStorage.setItem('isGuest', 'true');
    window.location.href = "index.html";
}

function logout() {
    localStorage.setItem('isGuest', 'true');
    alert("Logged out successfully.");
    window.location.href = "login.html";
}


function validateEmail() {
    const emailInput = document.getElementById('email') || document.getElementById('loginEmail');
    const emailError = document.getElementById('emailError');
    if (!emailInput.value.includes('@')) {
        emailError.innerText = "Email must contain @";
    } else {
        emailError.innerText = ""; 
    }
}

function validatePass() {
    const passInput = document.getElementById('password') || document.getElementById('Loginpass');
    const passError = document.getElementById('passError');
    if (passInput.value.length > 0 && passInput.value.length < 8) {
        passError.innerText = "Password is too short (min 8 characters)";
    } else {
        passError.innerText = ""; 
    }
}

function validateName() {
    const nameInput = document.getElementById('username');
    const nameError = document.getElementById('nameError');
    const nameValue = nameInput.value.trim(); 
    if (nameValue === "") {
        nameError.innerText = "Name is required";
    } else if (nameValue.length < 3) {
        nameError.innerText = "Name is too short (min 3 characters)";
    } else {
        nameError.innerText = ""; 
    }
}


function setModeA() {
    document.body.className = "mode-a";
    document.cookie = "app_style=mode-a; path=/; max-age=2592000";
}

function setModeB() {
    document.body.className = "mode-b";
    document.cookie = "app_style=mode-b; path=/; max-age=2592000";
}

window.addEventListener('load', function() {
    var allCookies = document.cookie.split(';');
    var styleFound = false;
    for(var k=0; k < allCookies.length; k++) {
        var pair = allCookies[k].trim();
        if (pair.indexOf("app_style=") == 0) {
            document.body.className = pair.substring(10, pair.length);
            styleFound = true;
            break;
        }
    }
    if (!styleFound) setModeB(); 
});
