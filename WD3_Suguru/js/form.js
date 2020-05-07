//reveal password

function revealPw() {
    let y = document.getElementById("password1");
    let z = document.getElementById("password2");
    if(y.type === "password" && z.type === "password") {
        //reveal
        y.type = "text";
        z.type = "text";
        img.setAttribute("src", "images/eyeclose.png");
    }else {
        //hide
        y.type = "password";
        z.type = "password";
        img.setAttribute("src", "images/eyeopen.png");
    }
}


//check password equity

function checkEquity() {
    let y = document.getElementById("password1");
    let z = document.getElementById("password2");
    let error5 = document.getElementById("error5");
    if(y.value.length > 0 && z.value.length > 0) {
        if (y.value === z.value) {
            error5.innerHTML = "Password match!"
        } else {
            error5.innerHTML = "Password mismatch!"
        }
    }else {
        error5.innerHTML = "Please enter your password!"
    }
}


//check validation

function formValidation() {
    let fname = document.getElementById("firstname");
    let lname = document.getElementById("lastname");
    let email = document.getElementById("email");
    let phone = document.getElementById("tel");

    if(fname.checkValidity() === false) {
        error1.innerHTML = "Please check Your First Name!"
        } 

    if(lname.checkValidity() === false) {
        error2.innerHTML = "Please check Your Last Name!"
        } 

    if(email.checkValidity() === false) {
        error3.innerHTML = "Please check Your Email Address!"
        } 

    if(phone.checkValidity() === false) {
        error4.innerHTML = "Please check Your Phone Number!"
        } 

    if(password1.value.length > 0 && password2.value.length > 0) {
        if (password1.value === password2.value) {
            error.innerHTML = "The form was submitted!"
        } else {
        error.innerHTML = "please check your password!"
        }
    }
}
