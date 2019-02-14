class Speaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 60;
        this.thread = undefined;
        this.vel = 0;
        this.m = undefined;
        this.frame = 0;
    }
    show() {
        push();
        fill(255);
        if (this.frame <= 10) {
            ellipse(this.x, this.y, this.r + 10 - this.frame);
            this.frame++;
        } else {
            ellipse(this.x, this.y, this.r);
        }
        pop();
    }
    start(v) {
        console.log('started');
        this.vel = v;
        this.stop();
        this.thread = setInterval(() => {
            this.frame = 0;
            m.tick();
        }, 60000 / this.vel);
    }
    stop() {
        clearInterval(this.thread);
    }
    linkMatrix(m) {
        this.m = m;
    }
}