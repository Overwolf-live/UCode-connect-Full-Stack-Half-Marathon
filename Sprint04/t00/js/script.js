let hero = document.getElementById('hero');
let lab = document.getElementById('lab');

btn.onclick = function() {
    if (hero.textContent === 'Bruce Banner') {
        hero.textContent = 'Hulk';
        hero.style.letterSpacing = '6px';
        hero.style.fontSize = '130px';
        lab.style.backgroundColor = '#70964b'

    } else {
        hero.textContent = 'Bruce Banner';
        hero.style.letterSpacing = '2px';
        hero.style.fontSize = '60px';
        lab.style.backgroundColor = '#ffb300';
    }
}