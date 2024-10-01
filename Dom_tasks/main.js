'use strict'
let userNameLabel=document.getElementById("userNameLabel");
let passWordLabel=document.getElementById("passwordLabel");
let confirmPasswordLabel=document.getElementById("confirmPasswordLabel");
let submitButton=document.getElementById("submitButton");

userNameLabel.textContent="User name:";
passWordLabel.textContent="Password:";
confirmPasswordLabel.textContent="confirm Password:";
submitButton.textContent="Register";
///////////////////////////////////////////////////////////////
let userAlert=document.querySelectorAll('.userAlert');
let userNameInput=document.getElementById('userName');
let InputPassword1=document.getElementById('InputPassword1');
let InputPassword2=document.getElementById('InputPassword2');

function isFilled() {
   
    userAlert.forEach(userAlert => userAlert.innerHTML = "");
    let isValid=true;
    if (userNameInput.value.trim() === "") {
        userAlert[0].innerHTML = "Username must be filled";
        isValid=false;
    }

   
    if (InputPassword1.value.trim() === "") {
        userAlert[1].innerHTML = "Password must be filled";
        isValid=false
    }

    if (InputPassword2.value.trim() === "") 
        {
        userAlert[2].innerHTML = "Confirm password must be filled";
        isValid=false;
    }
    if(InputPassword1.value.trim()!=InputPassword2.value.trim())
    {
        userAlert[2].innerHTML="the passwords doesn't match!"
        isValid=false;
    }
    return isValid;
}
function updateSubmitButton() {
    submitButton.disabled = !isFilled(); 
}

userNameInput.addEventListener("input", updateSubmitButton);
InputPassword1.addEventListener("input", updateSubmitButton);
InputPassword2.addEventListener("input", updateSubmitButton);

document.getElementById("myForm").addEventListener("submit", function(event) {
    if (!isFilled())
    {
        event.preventDefault()
    }
    alert("sucsseed");

});

