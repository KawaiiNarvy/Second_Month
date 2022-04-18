let number = document.getElementById('num')
let buttonPlus = document.getElementById('plus')
let buttonMinus = document.getElementById('minus')

let num = 0

buttonPlus.onclick = () => {
    num ++
    count()
}
buttonMinus.onclick = () => {
    num--
    count()
}

function count(){
    number.innerHTML = num;
}
count()