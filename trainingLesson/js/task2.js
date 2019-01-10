var main = document.getElementById("container");

    for (let index = 1; index < 11; index++) {
        main.innerHTML += '<div class="card"><img src="/img/icon' + index +'.jpg"><div>Name</div></div>';
    }