var check = function() {
    let psw = document.getElementById('password');
    let cnf_psw = document.getElementById('confirm_pswd');
    if (psw.value == cnf_psw.value) {
        document.getElementById('chck').style.color = 'green';
        document.getElementById('chck').innerHTML = ' \u2713 Passwords match';
    } else {
        document.getElementById('chck').style.color = 'red';
        document.getElementById('chck').innerHTML = ' * Passwords don\'t match !!!';
    }
    
}

let submitButton = document.getElementById('submit');
submitButton.addEventListener('click',() => {
    document.querySelector('form').submit();
})