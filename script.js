var check = function() {
    let psw = document.getElementById('password');
    let cnf_psw = document.getElementById('confirm_pswd');
    if (psw.value == cnf_psw.value) {
        document.getElementById('chck').style.color = 'green';
        document.getElementById('chck').innerHTML = '(Passwords match)';
    } else {
        document.getElementById('chck').style.color = 'red';
        document.getElementById('chck').innerHTML = 'Passwords don\'t match !!!';
    }
    
}