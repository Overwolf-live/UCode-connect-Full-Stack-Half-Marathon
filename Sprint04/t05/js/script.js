let container = document.querySelector('.container');
let stone = document.querySelector('.stone');

let state = { distX: 0, distY: 0 };

function onDown(e) {
  e.preventDefault();
  let evt = e.type === 'touchstart' ? e.changedTouches[0] : e;
  
  state.distX = Math.abs(stone.offsetLeft - evt.clientX);
  state.distY = Math.abs(stone.offsetTop - evt.clientY);
  stone.style.pointerEvents = 'none';
};

function onUp(e) {
    stone.style.pointerEvents = 'initial';
};

function onMove(e) {
  if (stone.style.pointerEvents === 'none') {
    var evt = e.type === 'touchmove' ? e.changedTouches[0] : e;
    stone.style.left = `${evt.clientX - state.distX}px`;
    stone.style.top = `${evt.clientY - state.distY}px`;
  };
};

stone.addEventListener('mousedown', onDown);
container.addEventListener('mousemove', onMove);
container.addEventListener('mouseup', onUp);
stone.addEventListener('touchstart', onDown);
container.addEventListener('touchmove', onMove);
container.addEventListener('touchend', onUp);