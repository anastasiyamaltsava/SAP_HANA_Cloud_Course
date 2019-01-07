var container = document.getElementById("container"); 
var username = prompt("Insert your username", "Username");
var i = 0;
if (/[0-9]/.test(username)) {
    for (i; i < username.length; i++) {
        if(i % 2 == 0){
            container.textContent += username[i].toUpperCase();
        }
        else {
            container.textContent += username[i].toLowerCase();
        }
    }
} else {
    container.textContent = reverseStr(username);
}

function reverseStr(str) {
    return str.split("").reverse().join("");
}