class Player {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.pos = 0;
        this.locked = undefined;
        this.buckets = new Array(3);
    }

    kd(key) {
        if (key == 'a') {
            this.pos = -1;
            this.locked = 'a';
        } else
        if (key == 'd') {
            this.pos = 1;
            this.locked = 'd';
        }
    }
    ku(key) {
        if (key == this.locked) {
            this.pos = 0;
            this.locked = undefined;
        }
    }
    show() {
        push();
            ellipse(this.x+this.pos*30,this.y,30,30);
        pop();
    }
}