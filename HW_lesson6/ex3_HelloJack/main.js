const inp = document.getElementById('input')
const con = document.getElementById('container')
const btn = document.getElementById('button')

btn.addEventListener('click', function () { 
    con.innerHTML = `Привет ${inp.value}`;
})
