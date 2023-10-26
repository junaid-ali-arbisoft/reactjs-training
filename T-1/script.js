let signUp = document.getElementById("signUpBtn")
let signIn = document.getElementById("signInBtn")
let nameField = document.getElementById("nameField")
let title = document.getElementById("title")


signIn.onclick = function(){
    title.innerText = "Sign in";
    nameField.style.maxHeight = "0";
    this.classList = "";
    signUp.className = "disable"
}

signUp.onclick = function(){
    title.innerText = "Sign up";
    nameField.style.maxHeight = "65px";
    this.classList = "";
    signIn.className = "disable"
}