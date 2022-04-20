let number = document.getElementById('num')
let buttonPlus = document.getElementById('plus')
let buttonMinus = document.getElementById('minus')
let reset = document.getElementById('reset')

let num = 0

buttonPlus.onclick = () => {
    num ++
    count()
    number.style.color = '#c7fcff'
}
buttonMinus.onclick = () => {
    num--
    if (num < 1) {
        num = 0
    }
    count()
    number.style.color = '#d3ccff'

}
reset.onclick = () => {
    num = 0
    count()
    number.style.color = '#fff'
}
function count(){
    number.innerHTML = num;
}
count()