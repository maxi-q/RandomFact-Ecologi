

const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

let inputs = document.querySelectorAll('input[data-rule]');
let mail;
let userName;
let password;
let returnpassword;



inputs.forEach(el => {
    el.addEventListener('blur', function () {
        let rule = this.dataset.rule;
        let value = this.value;
        let check;
        switch (rule) {
            case 'name':
                check = /.{8,64}$/.test(value);
                userName = check;
                break;
            case 'email':
                check = re.test(value);
                mail = check;
                break;
            case 'password':
                check = /.{8,64}$/.test(value);
                password = check;
                break;
            case 'returnPassword':
                check = /.{8,64}$/.test(value);
                returnpassword = check;
                break;
        }
    });
});

document.addEventListener('click', function(event) {
    el = event.target;
    if(el == document.getElementById('register')){
        if (mail == true && userName == true && password == true && returnpassword == true ) {
            Registration();
        }
        else {
            console.log('111');
        }
    }
})

function Registration(){
    console.log('register');
}