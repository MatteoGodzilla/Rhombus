class Bucket {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.size = 40;
        this.locked = false;
        this.color = color;
        this.pos = 0;
        this.points = 0;
    }
    show() {
        push();
        rectMode(CENTER);
        if (this.color == 0) fill(255, 0, 0);
        else if (this.color == 1) fill(0, 255, 0);
        else if (this.color == 2) fill(0, 0, 255);
        else fill(255);
        rect(this.x + this.pos * this.size, this.y, this.size, this.size);
        pop();
    }
    right() {
        this.pos = 1;
    }
    left() {
        this.pos = -1;
    }
    center() {
        this.pos = 0;
    }
}