
var main = document.getElementById("main");

    for (let index = 0; index < 8; index++) {
        main.innerHTML += '<div class="card"><div class="card-head"><img id="cardImage" src="/img/card.jpg"><div class="card-head-text"></div><div>Международное сотрудничество во всех сферах деятельности</div></div><div class="card-foot"><div class="card-foot-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor illumprovident voluptate doloribus inventore sed quisquam tempora officiis optio est minima aliquid, consectetur itaque quos iure suscipit omnis laudantium quis.</div><div>Try</div></div></div>';
    }

document.getElementById("buttonMain").onclick = function () {
    document.location.href = "https://leverx.ru/"
}