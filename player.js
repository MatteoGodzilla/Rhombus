//TODO REFACTOR
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.pos = 0;
        this.locked = undefined;
        this.buckets = undefined;
        this.matrix = undefined;
        //this.rot = 2;
    }

    kd(key) {
        if (key == 'a') {
            this.pos = -1;
            this.locked = 'a';
            this.left();
        } else
        if (key == 'd') {
            this.pos = 1;
            this.locked = 'd';
            this.right();
        }
        if (keyCode == LEFT_ARROW) {
            this.rotl();
        } else if (keyCode == RIGHT_ARROW) {
            this.rotr();
        }
    }
    ku(key) {
        if (key == this.locked) {
            this.pos = 0;
            this.locked = undefined;
            this.center();
        }
    }
    show() {
        push();
        ellipse(this.x + this.pos * 40, this.y, 40, 40);
        for (let bucket of this.buckets) bucket.show();
        pop();
    }
    linkMatrix(matrix) {
        this.matrix = matrix;
    }
    linkBuckets(buckets) {
        this.buckets = buckets;
    }
    rotr() {
        let temp = this.buckets[2].color;
        this.buckets[2].color = this.buckets[1].color;
        this.buckets[1].color = this.buckets[0].color;
        this.buckets[0].color = temp;
    }
    rotl() {
        let temp = this.buckets[0].color;
        this.buckets[0].color = this.buckets[1].color;
        this.buckets[1].color = this.buckets[2].color;
        this.buckets[2].color = temp;
    }
    right() {
        for (let bucket of this.buckets) bucket.right();
    }
    left() {
        for (let bucket of this.buckets) bucket.left();
    }
    center() {
        for (let bucket of this.buckets) bucket.center();
    }
}