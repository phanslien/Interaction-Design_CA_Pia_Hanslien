const form = document.getElementById('form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const address = document.getElementById('address');
const postNumber = document.getElementById('postnumber');
const eMail = document.getElementById('email');
const cardholdersFullName = document.getElementById('fullname');
const cardNumber = document.getElementById('cardnumber');
const expiryDate = document.getElementById('expirydate');
const cvcCvv = document.getElementById('cvccvv');

form.addEventListener('submit', e => {
    //e.preventDefault();

    checkInputs();
});


function checkInputs() {
    const firstNameValue = firstname.value.trim();
    const lastNameValue = lastname.value.trim();
    const addressValue = address.value.trim();
    const postNumberValue = postnumber.value.trim();
    const eMailValue = email.value.trim();
    const cardholdersFullNameValue = fullname.value.trim();
    const cardNumberValue = cardnumber.value.trim();
    const expiryDateValue = expirydate.value.trim();
    const cvcCvvValue = cvccvv.value.trim();

    if (firstNameValue === '') {
        setErrorFor(firstName, 'Fill in first name');
    } else {
        setSuccessFor(firstName);
    }

    if (lastNameValue === '') {
        setErrorFor(lastname, 'Fill in last name');
    } else {
        setSuccessFor(lastName);
    }

    if (addressValue === '') {
        setErrorFor(address, 'Fill in address');
    } else {
        setSuccessFor(address);
    }

    if (postNumberValue.length !== 4) {
        setErrorFor(postnumber, 'Needs to be 4 digits');
    }
    else {
        setSuccessFor(postnumber);
    }
    if (eMailValue === '') {
        setErrorFor(email, 'Fill in an e-mail');
    } else {
        setSuccessFor(email);
    }
    if (cardholdersFullNameValue === '') {
        setErrorFor(fullname, 'Fill in full name');
    } else {
        setSuccessFor(fullname);
    }

    if (cardNumberValue.length !== 16) {
        setErrorFor(cardnumber, 'Needs to be 16 digits');
    }
    else {
        setSuccessFor(cardnumber);
    }

    if (expiryDateValue === '') {
        setErrorFor(expirydate, 'Fill in month and year');
    } else {
        setSuccessFor(expirydate);
    }
    if (cvcCvvValue.length !== 3) {
        setErrorFor(cvccvv, 'Needs to be 3 digits');
    } else {
        setSuccessFor(cvccvv);
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

