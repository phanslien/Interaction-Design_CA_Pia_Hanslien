const form = document.getElementById('form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const address = document.getElementById('address');
const postNumber = document.getElementById('postnumber');
const eMail = document.getElementById('email');

form.addEventListener('submit', e => {
    //e.preventDefault();

    checkInputs();
});

formTwo.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});
function checkInputs() {
    // trim to remove the whitespaces
    const firstNameValue = firstname.value.trim();
    const lastNameValue = lastname.value.trim();
    const addressValue = address.value.trim();
    const postNumberValue = postnumber.value.trim();
    const eMailValue = email.value.trim();


    if (firstNameValue === '') {
        setErrorFor(firstName, 'First name cannot be blank');
    } else {
        setSuccessFor(firstName);
    }

    if (lastNameValue === '') {
        setErrorFor(lastname, 'Last name cannot be blank');
    } else {
        setSuccessFor(lastName);
    }

    if (addressValue === '') {
        setErrorFor(address, 'Address cannot be blank');
    } else {
        setSuccessFor(address);
    }

    if (postNumberValue === '') {
        setErrorFor(postnumber, 'Post number cannot be blank');
    } else {
        setSuccessFor(postnumber);
    }
    if (eMailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else {
        setSuccessFor(email);
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


