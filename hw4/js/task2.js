document.getElementById("insertFlexBox").onclick = function () {
    document.getElementById("body").innerHTML = "";

    var ul = document.createElement("ul");

    ul.setAttribute("class", "flex-container");
    document.getElementById("body").appendChild(ul);

    for (let i = 1; i < 7; i++) {
        var li = document.createElement("li");
        li.setAttribute("class", "flex-item");
        li.textContent = i;
        ul.appendChild(li);
    }    
}

document.getElementById("goHome").onclick = function () {
    document.location.href = "task1.html"
}
