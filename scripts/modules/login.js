// Показать/скрыть пароль при клике на кнопку
function show() {
    var p = document.getElementById('pwd');
    var eye = document.getElementById('eye');
    p.setAttribute('type', 'text');
    eye.classList.remove('fa-eye-slash');
    eye.classList.add('fa-eye');
}

function hide() {
    var p = document.getElementById('pwd');
    var eye = document.getElementById('eye');
    p.setAttribute('type', 'password');
    eye.classList.remove('fa-eye');
    eye.classList.add('fa-eye-slash');
}

var pwShown = 0;

document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);

