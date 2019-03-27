class Meter {
    constructor(x, y, width, height, value = 0) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.value = value;
        this.color = [0, 255, 0];
        this.colorbg = [51, 51, 51];
        this.bg = undefined;
    }
    show() {
        push();
        stroke(0);
        fill(this.colorbg[0], this.colorbg[1], this.colorbg[2]);
        rect(this.x - 1, this.y - 1, this.width, this.height);
        fill(this.color[0], this.color[1], this.color[2]);
        let dist = this.height * this.value;
        rect(this.x - 1, this.y + this.height - 1, this.width, -dist);
        if (this.bg != undefined) {
            image(this.bg, this.x, this.y - this.height / 3, this.width, this.width);
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
    setbg(image) {
        this.bg = image;
    }
}
