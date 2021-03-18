
let lis = document.getElementsByTagName('li');
for (let item of lis) {
    if (item.className === "") {
        item.className = "unknown";
    }
    if (!item.getAttribute('data-element')) {
        item.setAttribute('data-element', 'none');
    }
}

for (let item of lis) {
    let info = item.getAttribute('data-element');
    let arrAttr = info.split(' ');
    let br1 = document.createElement('br');
    item.append(br1);
    for (let i = 0; i < arrAttr.length; i++) {
        let div = document.createElement('div');
        if (arrAttr[i] === 'none')
            item.insertAdjacentHTML("beforeend", `<div class="elem"><div class="line"></div></div>`);
        else {
            div.classList.add(arrAttr[i]);
            div.classList.add('elem');
            item.append(div);
        }
    }     
}
