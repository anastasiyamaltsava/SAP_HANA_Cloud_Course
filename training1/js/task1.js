var main = document.getElementById("main");

for (let index = 0; index < 8; index++) {

    var card = document.createElement("div");
    card.setAttribute("class", "card");

    var cardHead = document.createElement("div");
    cardHead.setAttribute("class", "card-head");

    var cardImage = document.createElement("img");
    cardImage.setAttribute("id", "cardImage");
    cardImage.setAttribute("src", "img/card.jpg");

    var cardHeadText = document.createElement("div");
    cardHeadText.setAttribute("class", "card-head-text");

    var text = document.createElement("div");
    text.textContent = "Международное сотрудничество во всех сферах деятельности";

    cardHead.appendChild(cardImage);
    cardHead.appendChild(cardHeadText);
    cardHead.appendChild(text);

    var cardFoot = document.createElement("div");
    cardFoot.setAttribute("class", "card-foot");

    var cardFootText = document.createElement("div");
    cardFootText.setAttribute("class", "card-foot-text");
    cardFootText.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor illumprovident voluptate doloribus inventore sed quisquam tempora officiis optio est minima aliquid, consectetur itaque quos iure suscipit omnis laudantium quis.";

    var divTry = document.createElement("div");
    divTry.textContent = "Try";

    cardFoot.appendChild(cardFootText);
    cardFoot.appendChild(divTry);

    card.appendChild(cardHead);
    card.appendChild(cardFoot);

    main.appendChild(card);
}

document.getElementById("buttonMain").onclick = function () {
    document.location.href = "https://leverx.ru/"
}
