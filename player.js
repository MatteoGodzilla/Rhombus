let left = 0;
let center = 1;
let right = 2;

class Player {
    constructor(x, y, options, size = 40) {
        this.x = x;
        this.y = y;
        this.leftOrRight = 1;
        this.pastKey = undefined;
        this.buckets = new Array(3);
        this.matrix = undefined;
        this.score = 0;
        this.combo = 0;
        this.comboValues = [1, 1, 1, 1, 2, 2, 2, 4];
        this.meter = undefined;
        this.size = size;

        this.buckets[0] = new Bucket(this.x, this.y - this.size, 0, this.size);
        this.buckets[1] = new Bucket(this.x + this.size, this.y - this.size, 1, this.size);
        this.buckets[2] = new Bucket(this.x + this.size * 2, this.y - this.size, 2, this.size);

        this.moveLeftKey = options.left;
        this.moveRightKey = options.right;
        this.shiftLeftKey = options.shiftLeft;
        this.shiftRightKey = options.shiftRight;

        document.body.addEventListener('keydown', ev => this.kd(ev), false);
        document.body.addEventListener('keyup', ev => this.ku(ev), false);
    }

    kd(ev) {
        let key = ev.key;
        let keyCode = ev.code;
        if (key == this.moveLeftKey || keyCode == this.moveLeftKey) {
            this.leftOrRight = left;
            this.pastKey = this.moveLeftKey;
            this.bucketLeft();
        } else if (key == this.moveRightKey || keyCode == this.moveRightKey) {
            this.leftOrRight = right;
            this.pastKey = this.moveRightKey;
            this.bucketRight();
        }
        if (key == this.shiftLeftKey || keyCode == this.shiftLeftKey) {
            this.shiftLeft();
        } else if (key == this.shiftRightKey || keyCode == this.shiftRightKey) {
            this.shiftRight();
        }
    }

    ku(ev) {
        let key = ev.key;
        let keyCode = ev.code;
        if (key == this.pastKey || keyCode == this.moveLeftKey) {
            this.leftOrRight = center;
            this.pastKey = undefined;
            this.bucketCenter();
        }
    }
    show() {
        push();
        ellipse(this.x + this.leftOrRight * this.size * 1.5, this.y + this.size / 2, this.size, this.size);
        for (let bucket of this.buckets) bucket.show();
        textSize(this.size / 2);
        fill(255);
        textAlign(CENTER);
        stroke(0);
        text(this.score, this.x + this.size * 1.5, this.y + this.size * 1.5);
        pop();
    }
    clear() {
        if (this.matrix !== undefined) {
            let bucketsClearedinCycle = 0;
            let mult = 1;
            if (this.combo < 8) {
                mult = this.comboValues[this.combo];
            } else if (this.combo >= 8) {
                mult = this.comboValues[7];
            }

            for (let i = 0; i < this.buckets.length; i++) {
                let index = i + this.leftOrRight;
                let b = this.matrix.value[index][9];
                if (this.buckets[i].color == b.block) {
                    this.matrix.value[index][9].setBlock(-1);
                    this.score += 1 * mult;
                    bucketsClearedinCycle++;
                }
            }
            if (bucketsClearedinCycle == 0) {
                this.combo = 0;
            } else {
                this.combo += bucketsClearedinCycle;
            }
            if (this.meter != undefined) {
                if (this.combo < 8) {
                    this.meter.setvalue(this.combo / this.comboValues.length);
                } else if (this.combo >= 8) {
                    this.meter.setvalue(1);
                }
            }
        }
    }
    linkMatrix(matrix) {
        this.matrix = matrix;
    }
    linkMeter(matrix) {
        this.meter = matrix;
    }
    setR(image) {
        for (let b of this.buckets) {
            b.setR(image);
        }
    }
    setG(image) {
        for (let b of this.buckets) {
            b.setG(image);
        }
    }
    setB(image) {
        for (let b of this.buckets) {
            b.setB(image);
        }
    }
    shiftRight() {
        let temp = this.buckets[2].color;
        this.buckets[2].color = this.buckets[1].color;
        this.buckets[1].color = this.buckets[0].color;
        this.buckets[0].color = temp;
    }
    shiftLeft() {
        let temp = this.buckets[0].color;
        this.buckets[0].color = this.buckets[1].color;
        this.buckets[1].color = this.buckets[2].color;
        this.buckets[2].color = temp;
    }
    bucketRight() {
        for (let bucket of this.buckets) bucket.right();
    }
    bucketLeft() {
        for (let bucket of this.buckets) bucket.left();
    }
    bucketCenter() {
        for (let bucket of this.buckets) bucket.center();
    }
}