class Meter {
    constructor(x, y, width, height, value = 0.2) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.value = value;
        this.color = [0, 255, 0];
        this.bg = [51, 51, 51];
        this.direction = 'up';
    }
    show() {
        push();
        fill(this.bg[0], this.bg[1], this.bg[2]);
        rect(this.x, this.y, this.width, this.height);
        fill(this.color[0], this.color[1], this.color[2]);

        if (this.direction == 'up') {
            let dist = this.height * this.value;
            rect(this.x, this.y + this.height, this.width, -dist);
        } else {
            let dist = this.width * this.value;
            rect(this.x, this.y, dist, this.height);
        }
        pop();
    }
    setvalue(value) {
        if (value >= 0 || value <= 1) this.value = value;
    }
    setdirection(dir) {
        if (dir == 'up') this.direction = 'up';
        else if (dir == 'right') this.direction = 'right';
    }
}