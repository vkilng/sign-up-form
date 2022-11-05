var check = function() {
    let psw = document.getElementById('password');
    let cnf_psw = document.getElementById('confirm_pswd');
    if (psw.value == cnf_psw.value) {
        document.getElementById('check').style.color = 'green';
        document.getElementById('check').innerHTML = ' \u2713 Passwords match';
    } else {
        document.getElementById('check').style.color = 'red';
        document.getElementById('check').innerHTML = ' * Passwords don\'t match !!!';
    }
    
}