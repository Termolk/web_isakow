document.getElementById('submit').onclick = function() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        alert('Данные введены верно!');
    } else {
        alert('Данные введены не верно!');
    }
}