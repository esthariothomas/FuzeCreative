
function validate(){
    let name = document.getElementById("name").value
    let password = document.getElementById("password").value
    let email = document.getElementById("email").value
    let address = document.getElementById("address").value
    let username = document.getElementById("username").value
    let male = document.getElementById("male").checked
    let female = document.getElementById("female").checked
    let region = document.getElementById("region").value
    let file = document.getElementById("file").value
    var region = document.formRegist.region.value;
    var music = document.formRegist.music.value;
    let label = document.getElementById("lblError");
    let valid = false;

    if (name.length <= 0) {
        label.innerText("name must be filled!");
        return false;
    }
    else if (name.length < 5 || name.length > 20) {
        label.innerText("name must be 5-20 characters!");
        return false;
    }
    else if (containsNumber(name)){
        label.innerText("name can't contains number!");
        return false;
    }
    else if (email.length <= 0){
        label.innerText("email must be filled!");
        return false;
    }
    else if (!(myEmail.indexOf("@")>=0) || !myEmail.endsWith(".com") || myEmail.length <6 ) {
        label.innerText = "Email must contain '@' and '.com' ";
        return false;
    }
    else if (password.length <= 0) {
        label.innerText("password must be filled!");
        return false;
    }
    else if (email.length <= 0) {
        label.innerText("password must be filled!");
        return false;
    }
    else if (address.length <= 0) {
        label.innerText("password must be filled!");
        return false;
    }
    else if (username.length <= 0) {
        label.innerText("password must be filled!");
        return false;
    }
    else if (!(username.value.startsWith("@"))||username.value.length <2) {
        label.innerText = "Username must start with '@' ";
        return false;
    }
    else if (addressCount < 5) {
        label.innerText = "Address must be at least 5 words!";
        return false;
    }
    else if (address.value.indexOf("street")>=0) {
        label.innerText = "Address must contain 'street'";
        return false;
    }
    else if (!valid) {
         label.innerText = "Choose 1 gender!";
        return false;
    }else if (region=="Region") {
        label.innerText = "Choose 1 region!"
        return false;
    }else if (music=="Music Category") {
        label.innerText = ""
        return false;
    }
    else{
        alert("Registration completed!")
        return true;
    }

function containsNumber(name){
    for(let i = 0; i < name.length; i++){
        // isnan = is not a number
        if (!isNaN(name[i])){
            return true;
        }
    }
    return false;
}
}

