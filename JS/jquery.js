function konamiCode(code) {
    var input = '';
    var key = '38384040373937396665';
    document.addEventListener('keydown', function (e) {
        input += ("" + e.keyCode);
        if (input == key) {
            return code();
        }
        if (!key.indexOf(input)) return;
        input = ("" + e.keyCode);
    });
}

konamiCode(function () {alert('You have added 30 lives!')});
