function menuclick() {

    let onoff = document.getElementById("on-off").innerHTML;
    let div = document.getElementById("div");

    if (onoff == "on") {
        div.setAttribute("class", "div");
        document.getElementById("menu").setAttribute("src", "close.png");
        document.getElementById("on-off").innerHTML = "off";
    }

    else {
        document.getElementById("menu").setAttribute("src", "menu.png");
        document.getElementById("on-off").innerHTML = "on";
        div.setAttribute("class", "div_invinsible");
    }
}

