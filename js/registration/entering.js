var Rname = document.getElementById('Rname');
var password = document.getElementById('password');

document.addEventListener('click', function (event) {
    element = event.target;
    if (element == document.getElementById('Enter')) {
        Mysuccess = true;
        var fields = [Rname, password];
        fields.forEach(el => {
            if (el.value.length < 8 || el.value.length > el.maxLength) Mysuccess = false;
        });
        if (Mysuccess == false) return;
        Enter();
    }
})

function Enter(){
    console.log('register');
}