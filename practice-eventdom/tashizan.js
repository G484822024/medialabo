let p1 = document.querySelector('input[name="left"]');
let p2 = document.querySelector('input[name="right"]');
let anp = document.querySelector('span#answer');
let b = document.querySelector('button#calc');
b.addEventListener('click', greeting);

function greeting() {
    let p1n = Number(p1.value);
    let p2n = Number(p2.value);
    let an = p1n + p2n; 
    anp.textContent = an;
}