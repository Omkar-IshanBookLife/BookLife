var submit = document.getElementById("submit");
var person = "Omkar";
var email = "test@gmail.com";
var message = "GreateWork";
var template = "mailto:";
var mark = "?"

submit.onclick = function (){
    person = document.getElementById("name").value
    email = document.getElementById("email").value
    message = document.getElementById("message").value
    window.open("mailto:ogamethorns@gmail.com?subject="+person+" Provided FeedBack&body="+message+"\n")
    console.log("Form Submitted");
    document.getElementById("message").value = ""
    document.getElementById("email").value = ""
    document.getElementById("name").value = ""
}