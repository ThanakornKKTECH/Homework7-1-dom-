const LoginForm = document.querySelector('.login-form')

const validateInput = (inputObj) => {
    console.log(inputObj);
    //
};

const hdlLogin = (e) => {
    e.preventDefault();
    console.log(loginform.elements)
    let allInput = loginform.elements;
    let inputObj = {};
    for (let el of loginform.elements) {
        inputObj[el.id] = el.value;
    }
    validateInput(inputObj);
};

loginForm.addEventlistener("submit", hdlLogin);