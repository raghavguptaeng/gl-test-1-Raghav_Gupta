function checkPass(str){
    console.log(str);
    return true;
}
document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const numsub = '1234567890';
    const symb = '!@#$%^&*()_+?><:"{}|;[],./';
    const regexPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (name.length<4){
        alert('name too short');
    }
    else if(!regexPattern.test(email)){
        alert('email is not valid');
    }
    else if(password.length<6){
        alert('password not correct');
    }
    else if(password.includes(numsub)){
        alert('password must contain a number');
    }
    else if(password.includes(symb)){
        alert('password must contain a symbol');
    }
    else{
        alert("Accepted")
    }
});