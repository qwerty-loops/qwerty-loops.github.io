const spaceMan = document.querySelector(".spacemanBG");

window.onscroll = function() {
    rotateSpace();
}

function rotateSpace() {
    document.getElementById('spaceman').style.transform = "rotate("+window.scrollY/2+"deg)";
}