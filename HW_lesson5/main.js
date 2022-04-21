const traffic = prompt('Ну цвет допустим...')

switch (traffic) {
    case "red":
        document.getElementsByClassName("red")[0].style.background = "red";
        document.getElementsByClassName('red')[0].innerText = 'эу стой'
        document.body.style.backgroundImage = "url('images/stop.jpg')"
        document.body.style.backgroundRepeat = "no-repeat";
        break;
    case "yellow":
        document.getElementsByClassName("yellow")[0].style.background = "gold";
        document.getElementsByClassName('yellow')[0].innerText = 'жди на'
        document.body.style.backgroundImage = "url('images/wait.jpg')"
        document.body.style.backgroundRepeat = "no-repeat";
        break;
    case "green":   
        document.getElementsByClassName("green")[0].style.background = "green";
        document.getElementsByClassName('green')[0].innerText = 'ехай'
        document.body.style.backgroundImage = "url('images/go.jpg')"
        document.body.style.backgroundRepeat = "no-repeat";
        break;
    default:
        break;
}