var container = document.getElementById("container");
var main = document.getElementById("main");

for (let index = 1; index < 11; index++) {

    var card = document.createElement("div");
    card.setAttribute("class", "card");

    var img = document.createElement("img");
    img.setAttribute("src", "img/icon" + index + ".jpg");

    var text = document.createElement("div");
    text.textContent = "Name";

    card.appendChild(img);
    card.appendChild(text);

    container.appendChild(card);

}

for (let i = 0; i < 2; i++) {

    var messageFrom = document.createElement("div");
    messageFrom.setAttribute("class", "message from");

    var img = document.createElement("img");
    img.setAttribute("src", "img/icon1.jpg");

    var messageText = document.createElement("div");
    messageText.setAttribute("class", "message-text");
    messageText.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores eaque mollitia, necessitatibus laudantium facere nesciunt velit soluta doloremque molestiae, voluptas eos optio expedita, excepturi totam aspernatur distinctio? Rerum, obcaecati ut?";

    messageFrom.appendChild(img);
    messageFrom.appendChild(messageText);

    main.appendChild(messageFrom);

}

for (let i = 0; i < 3; i++) {

    var messageFrom = document.createElement("div");
    messageFrom.setAttribute("class", "message to");

    var img = document.createElement("img");
    img.setAttribute("src", "img/logo.png");

    var messageText = document.createElement("div");
    messageText.setAttribute("class", "message-text");
    messageText.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores eaque mollitia, necessitatibus laudantium facere nesciunt velit soluta doloremque molestiae, voluptas eos optio expedita, excepturi totam aspernatur distinctio? Rerum, obcaecati ut?";

    messageFrom.appendChild(img);
    messageFrom.appendChild(messageText);

    main.appendChild(messageFrom);

}
