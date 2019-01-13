var container = document.getElementById("container");
var main = document.getElementById("main");
var mainBody = document.getElementById("main-body");
var headImg = document.getElementById("head-img");
var headName = document.getElementById("head-name");

var names = [ 'Ира', 'Кира', 'Маша', 'Миша', 'Костя', 'Саша', 'Даша', 'Дима', 'Женя', 'Настя' ];

for (let index = 1; index < 11; index++) {

    var card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("id", "card");

    var img = document.createElement("img");
    img.setAttribute("src", "img/icon" + index + ".jpg");

    var text = document.createElement("div");
    text.textContent = names[index - 1];

    card.appendChild(img);
    card.appendChild(text);

    container.appendChild(card);

}

for (let i = 0; i < 3; i++) {

    var messageFrom = document.createElement("div");
    messageFrom.setAttribute("class", "message from");

    var img = document.createElement("img");
    img.setAttribute("class", "imgFrom");

    var messageText = document.createElement("div");
    messageText.setAttribute("class", "message-text");
    messageText.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores eaque mollitia, necessitatibus laudantium facere nesciunt velit soluta doloremque molestiae, voluptas eos optio expedita, excepturi totam aspernatur distinctio? Rerum, obcaecati ut?";

    messageFrom.appendChild(img);
    messageFrom.appendChild(messageText);

    mainBody.appendChild(messageFrom);

}

for (let i = 0; i < 4; i++) {

    var messageFrom = document.createElement("div");
    messageFrom.setAttribute("class", "message to");

    var img = document.createElement("img");
    img.setAttribute("src", "img/logo.png");

    var messageText = document.createElement("div");
    messageText.setAttribute("class", "message-text");
    messageText.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores eaque mollitia, necessitatibus laudantium facere nesciunt velit soluta doloremque molestiae, voluptas eos optio expedita, excepturi totam aspernatur distinctio? Rerum, obcaecati ut?";

    messageFrom.appendChild(img);
    messageFrom.appendChild(messageText);

    mainBody.appendChild(messageFrom);

}

Array.from(document.querySelectorAll('.card')).forEach(function (e, i) {
    e.onclick = function () {
        document.getElementById("main-head").style.display = "flex";

        headImg.setAttribute("src", "img/icon" + (i + 1) + ".jpg");
        headName.textContent = names[i];

        Array.from(document.querySelectorAll('.imgFrom')).forEach(function (el, ind) {
            el.setAttribute("src", "img/icon" + (i + 1) + ".jpg");
        });

        mainBody.style.display = "block";
        main.style.bottom = "0";
        main.style.top = "0";
        main.style.position = "relative";
    }
});
