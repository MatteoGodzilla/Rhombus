class Player {
    constructor(x, y, options) {
        this.x = x;
        this.y = y;
        this.pos = 1;
        this.locked = undefined;
        this.buckets = new Array(3);
        this.matrix = undefined;
        this.score = 0;
        this.combo = 0;
        this.combovalues = [1, 1, 1, 1, 2, 2, 2, 4];
        this.meter = undefined;

        this.buckets[0] = new Bucket(this.x, this.y - 40, 0);
        this.buckets[1] = new Bucket(this.x + 40, this.y - 40, 1);
        this.buckets[2] = new Bucket(this.x + 80, this.y - 40, 2);

        this.moveleftkey = options.left;
        this.moverightkey = options.right;
        this.shiftleft = options.shiftleft;
        this.shiftright = options.shiftright;

        document.body.addEventListener('keydown', ev => this.kd(ev), false);
        document.body.addEventListener('keyup', ev => this.ku(ev), false);
    }

    kd(ev) {
        let key = ev.key;
        let keyCode = ev.code;
        if (key == this.moveleftkey || keyCode == this.moveleftkey) {
            this.pos = 0;
            this.locked = this.moveleftkey;
            this.left();
        } else if (key == this.moverightkey || keyCode == this.moverightkey) {
            this.pos = 2;
            this.locked = this.moverightkey;
            this.right();
        }
        if (key == this.shiftleft || keyCode == this.shiftleft) {
            this.rotl();
        } else if (key == this.shiftright || keyCode == this.shiftright) {
            this.rotr();
        }
    }

    ku(ev) {
        let key = ev.key;
        if (key == this.locked) {
            this.pos = 1;
            this.locked = undefined;
            this.center();
        }
    }
    show() {
        push();
        ellipse(this.x + this.pos * 40, this.y, 40, 40);
        for (let bucket of this.buckets) bucket.show();
        textSize(20);
        fill(255);
        textAlign(CENTER);
        text(this.score + '|' + this.combo, this.x + 40, this.y + 40); //provvisorio
        pop();
    }
    clear() {
        if (this.matrix !== undefined) {
            let now = 0;
            let mult = 1;
            if (this.combo < 8) {
                mult = this.combovalues[this.combo];
            } else if (this.combo >= 8) {
                mult = this.combovalues[7];
            }

            for (let i = 0; i < this.buckets.length; i++) {
                let index = i + this.pos;
                let b = this.matrix.value[index][9];
                if (this.buckets[i].color == b.block) {
                    this.matrix.value[index][9].setblock(-1);
                    this.score += 1 * mult;
                    now++;
                }
            }
            //TODO:meter
            if (now == 0) {
                this.combo = 0;
            } else {
                this.combo += now;
            }
        }
    }
    linkMatrix(matrix) {
        this.matrix = matrix;
    }
    linkMeter(matrix) {
        this.meter = matrix;
    }
    setr(image) {
        for (let b of this.buckets) {
            b.setr(image);
        }
    }
    setg(image) {
        for (let b of this.buckets) {
            b.setg(image);
        }
    }
    setb(image) {
        for (let b of this.buckets) {
            b.setb(image);
        }
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