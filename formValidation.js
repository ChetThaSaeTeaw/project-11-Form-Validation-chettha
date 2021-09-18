const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password_1 = document.getElementById('password');
const password_2 = document.getElementById('Re-password');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    checkInput([userName,email,password_1,password_2]);
    if(email.value === '') {
        showError(email,'Please Enter your Email.');
    } else if (!validateEmail(email.value.trim())) {
        showError(email,'Email is invalid.')
    } else {    
        showSuccess(email);
    }
    checkPassword(password_1,password_2);
    checkInputLength(userName,5,10);
    checkInputLength(password_1,6,12);
});

function showError (input,message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small =  formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess (input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkInput (inputArrays) {
    inputArrays.forEach(function(input) {
        if(input.value.trim() === '') {
            showError(input, `Please Enter your ${getInputCase(input)}.`)
        } else {
            showSuccess(input);
        }
    });
}

function getInputCase (input) {
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

function checkPassword (password_1,password_2) {
    if(password_1.value !== password_2.value) {
        showError(password_2, 'Password is invlid');
    }
}

function checkInputLength (input,min,max) {
    if(input.value.length <= min) {
        showError(input, `${getInputCase(input)} more than ${min}`)
    } else if(input.value.length >= max) {
        showError(input, `${getInputCase(input)} less than ${max}`)
    } else {
        showSuccess(input);
    }
}