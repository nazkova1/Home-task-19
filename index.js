const nameUser = document.querySelector('.name');
nameUser.addEventListener('input', checkName)

function checkName(event) {
    const {target: {value}} = event;
    console.log(value)
    const reg = /^[a-zA-z]{1,20}$/

    if (value) {
        if (reg.test(value)) {
            console.log('Name entered corect')
        } else
            console.log('Your name entered not corect')
    }
}

const lastNameUser = document.querySelector('.lastName');
lastNameUser.addEventListener('input', checkLastName)

function checkLastName(event) {
    const {target: {value}} = event;
    console.log(value)
    const reg2 = /^[a-zA-z]{1,20}$/

    if (value) {
        if (reg2.test(value)) {
            console.log('Last name entered corect')
        } else
            console.log('Your last name entered not corect')
    }
}

const emailUser = document.querySelector('.email');
emailUser.addEventListener('input', checkEmailUser);

function checkEmailUser(event) {
    const {target: {value}} = event;
    console.log(value)
    const reg3 = /[a-zA-z0-9]{0,}@[a-zA-Z]{0,}\.[a-zA-z]{2,12}/

    if (value) {
        if (reg3.test(value)) {
            console.log('Email corect')
        }else console.log('Email is not corect')
    }
}
const telUser = document.querySelector('.tel');
telUser.addEventListener('input', telCheck);

function telCheck(event) {
    const {target: {value}} = event;
    console.log(value)
    const reg4 = /\^+38\(\d{3}\)-\d{3}-\d{2}-\d{2}/

    if (value) {
        if (reg4.test(value)) {
            console.log('Phone number entered corect')
        }else console.log('Phone number is not corect')
    }
}

const passUser = document.querySelector('.pass');
passUser.addEventListener('input', checkPassword);

function checkPassword (event){
    const {target: { value}} = event;
        console.log(value)
        const reg5 = /[a-zA-Z0-9]{8,15}/

        if (value) {
            if (reg5.test(value)) {
            console.log('Phone number entered corect')
        }
    }
}