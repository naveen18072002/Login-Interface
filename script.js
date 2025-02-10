function validateLogin() {
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    var message=document.getElementById("message").value;

    //dummy validation (replace this with a real authentication system )
    if (username==="admin" && password==="password123") {
        message.style.color="green";
        message.innerHTML="Login Successful";
    }
    else {
        message.style.color="red";
        message.innerHTML="Invalid username or Password!!!";
    }
    
}