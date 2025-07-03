let u;
let l;
let a;
let p;

let b = document.querySelector('button#henkou');
b.addEventListener('click', changeDom);

function changeDom() {
    u = document.querySelector('ul#kazoeuta');
    l = document.createElement('li');
    l.textContent = 'ヨット';
    u.insertAdjacentElement('beforeend', l);

    i = document.querySelector('img#bluemoon');
    i.setAttribute('src', 'bluemoon.jpg');
    a = document.createElement('a');
    a.textContent = '拓殖大学HP';
    a.setAttribute('href', 'https://www.takushoku-u.ac.jp');
    a.setAttribute('target', "_blank");
    p = document.querySelector('p#takudai');
    p.insertAdjacentElement('afterend', a);

    l = document.querySelector('li#mochi');
    l.remove();
    u = document.querySelector('ul#kassen');
    u.remove();

    u = document.createElement('ul');
    l = document.createElement('li');
    l.textContent = '赤';
    u.insertAdjacentElement('beforeend', l)
    l = document.createElement('li');
    l.textContent = '緑';
    u.insertAdjacentElement('beforeend', l)
    l = document.createElement('li');
    l.textContent = '青';
    u.insertAdjacentElement('beforeend', l)
    p = document.querySelector('p#primary');
    p.insertAdjacentElement('afterend', u)
}