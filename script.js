var check = function() {
    const psw = document.getElementById('password');
    const cnf_psw = document.getElementById('confirm_pswd');
    const checkForPassword = document.querySelector('.check');
    const formSubmitButton = document.querySelector('.submit-section button');
    if ((psw.value != cnf_psw.value) && (cnf_psw.value != '')) {
        checkForPassword.style.color = 'red';
        checkForPassword.textContent = ' * Passwords don\'t match !!!';
        formSubmitButton.setAttribute('disabled','disabled');
    } else if ((psw.value === cnf_psw.value) && (cnf_psw.value != '')) {
        checkForPassword.style.color = 'green';
        checkForPassword.textContent = ' \u2713 Passwords match';
        formSubmitButton.removeAttribute('disabled');
    } else {
        checkForPassword.textContent = '';
    }
    
}