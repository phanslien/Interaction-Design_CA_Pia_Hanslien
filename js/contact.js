const form = document.getElementById('form');
const fName = document.getElementById('fname');
const eMail = document.getElementById('email');
const textBox = document.getElementById('textbox');


form.addEventListener('submit', e => {
    //e.preventDefault();

    checkInputs();
});


function checkInputs() {
    const fNameValue = fname.value.trim();
    const eMailValue = email.value.trim();
    const textBoxValue = textbox.value.trim();


    if (fNameValue === '') {
        setErrorFor(fName, 'Fill in first name');
    } else {
        setSuccessFor(fName);
    }

    if (eMailValue === '') {
        setErrorFor(eMail, 'Fill in e-mail');
    } else {
        setSuccessFor(eMail);
    }

    if (textBoxValue === '') {
        setErrorFor(textBox, 'Fill in address');
    } else {
        setSuccessFor(textBox);
    }


    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = message;
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }
}