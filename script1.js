function registerUser() {
    var name=document.getElementById("name").value;
    var dob=document.getElementById("dob").value;
    var mobile=document.getElementById("mobile").value;
    var newUser=document.getElementById("newUser").value;
    var newPassword=document.getElementById("newPassword").value;
    var message=document.getElementById("message").value;

    //basic validation

    if(!name || !dob || !mobile || !newUsername || !newPassword || !conformPassword) {
        message.style.color="red";
    message.innerHTML="All fields are required";
    return;

}
if(!/^\d{10}$/.test(mobile))
{
    message.style.color="red";
    message.innerHTML="Enter a valid 10-digit mobile number";
    return;
}
 //password match validation

 if(
    newPassword !== conformPassword
 )
 {
    message.style.color="red";
    message.innerHTML="Password does not match";
    return;
 }

 // Successful Registration
    message.style.color="green";
    message.innerHTML="Registration Successful";


    console.log("User Registered:",{ name, dob, mobile, newUsername});
}


 