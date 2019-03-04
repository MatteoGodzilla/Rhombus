class Btn {
    constructor(x, y, width, height, eventName) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.eventName = eventName;
        this.pressed = false;
        this.game = undefined;
        document.body.addEventListener('touchstart', ev => this.down(ev));
        document.body.addEventListener('touchend', ev => this.up(ev));
    }
    show() {
        push();
        strokeWeight(1);
        fill(255);
        rect(this.x, this.y, this.width, this.height);
        pop();
    }
    down(ev) {
        for (let t of ev.touches) {
            if (t.clientX < this.x || t.clientX > this.x + this.width ||
                t.clientY < this.y || t.clientY > this.y + this.height) {} else {
                this.pressed = t.identifier;
                this.game.player.kd({
                    key: this.eventName
                });
            }
        }
    }
    up(ev) {
        let active = false;
        for (let t of ev.touches) {
            if (t.identifier == this.pressed) active = true;
        }
        if (!active) {
            this.pressed = false;
            this.game.player.ku({
                key: this.eventName
            });
        }
    }
    linkGame(g) {
        this.game = g;
    }
}