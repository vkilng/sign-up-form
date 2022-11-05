var check = function() {
    let psw = document.getElementById('password');
    let cnf_psw = document.getElementById('confirm_pswd');
    let checkForPassword = document.getElementById('check');
    if ((psw.value != cnf_psw.value) && (cnf_psw.value != '')) {
        checkForPassword.style.color = 'red';
        checkForPassword.textContent = ' * Passwords don\'t match !!!';
        document.querySelector('#submitBtn').disabled = 'disabled';
    } else if ((psw.value === cnf_psw.value) && (cnf_psw.value != '')) {
        checkForPassword.style.color = 'green';
        checkForPassword.textContent = ' \u2713 Passwords match';
        document.querySelector('#submitBtn').removeAttribute('disabled');
    } else {
        checkForPassword.textContent = '';
    }
    
}