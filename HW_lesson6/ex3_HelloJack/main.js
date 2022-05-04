const inp = document.getElementById('input')
const con = document.getElementById('container')
const btn = document.getElementById('button')

btn.addEventListener('click', function () {
    if (inp.value.length) 
    con.innerHTML = `Привет ${inp.value}`;
})
