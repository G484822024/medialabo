let b = document.querySelector('button#print');
b.addEventListener('click', greeting);
function greeting() {
    let i = document.querySelector('input[name="shimei"]');
    let aisatsu = 'こんにちは, ' + i.value + 'さん';
    let p = document.querySelector('p#message');
    p.textContent = aisatsu;
}