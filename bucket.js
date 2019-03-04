class Bucket {
    constructor(x, y, color,size = 40) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.locked = false;
        this.color = color;
        this.pos = 0;
        this.points = 0;
        this.r = undefined;
        this.g = undefined;
        this.b = undefined;
    }
    show() {
        push();
        if (this.color == 0) {
            if (this.r != undefined) image(this.r, this.x + this.size * this.pos, this.y, this.size, this.size);
            else {
                fill(127, 0, 0);
                rect(this.x + this.size * this.pos, this.y, this.size, this.size);
            }
        } else if (this.color == 1) {
            if (this.g != undefined) image(this.g, this.x + this.size * this.pos, this.y, this.size, this.size);
            else {
                fill(0, 127, 0);
                rect(this.x + this.size * this.pos, this.y, this.size, this.size);
            }
        } else if (this.color == 2) {
            if (this.b != undefined) image(this.b, this.x + this.size * this.pos, this.y, this.size, this.size);
            else {
                fill(0, 0, 127);
                rect(this.x + this.size * this.pos, this.y, this.size, this.size);
            }
        } else {
            fill(255);
            rect(this.x + this.size * this.pos, this.y, this.size, this.size);
        }
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
    setR(image) {
        this.r = image;
    }
    setG(image) {
        this.g = image;
    }
    setB(image) {
        this.b = image;
    }
}