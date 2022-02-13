var Rname = document.getElementById('Rname');
var mail = document.getElementById('mail');
var password = document.getElementById('password');
var returnPassword = document.getElementById('returnPassword');
var registerBTN = document.getElementById('register');

document.addEventListener('click', function (event) {
    element = event.target;
    if (element == document.getElementById('register')) {
        Mysuccess = true;
        var fields = [Rname, mail, password, returnPassword];
        fields.forEach(el => {
            if (el.value.length < 8 || el.value.length > el.maxLength) Mysuccess = false;
        });
        if (Mysuccess == false) return;
        Registration();
    }
})

function Registration(){
    console.log('register');
}