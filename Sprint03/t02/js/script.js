
class Timer {
    constructor(id, delay, counter) {
        this.id = id;
        this.delay = delay;
        this.counter = counter;
    }
    start() {
        console.log(`Timer ${this.id} started (delay=${this.delay}, stopCount=${this.counter})`);
    }
    tick(timeId) {
        console.log(`Timer ${this.id} Tick! | cycles left ${this.counter}`);
        this.counter--; 
        if (this.counter === 0) {
            this.stop();
            clearInterval(timeId);
        }
    }
    stop() {
        console.log(`Timer ${this.id} stopped`);
    }
}

function runTimer(id, delay, counter) {
    let timer = new Timer(id, delay, counter);
    timer.start();
    let timeId = setInterval(() => timer.tick(timeId), timer.delay);
}
// runTimer("Bleep", 1000, 5);