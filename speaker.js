class Speaker {
    constructor(x, y, vel) {
        this.x = x;
        this.y = y;
        this.r = 60;
        this.thread = undefined;
        this.vel = vel;
        this.games = [];
        this.amp = new p5.Amplitude();
    }
    show() {
        push();
        let a = this.amp.getLevel();
        let off = this.offset(); //tra -1 e 1
        a = map(a, 0, 1, 0, 50);
        fill(255);
        strokeWeight(4);
        line(this.x + off * this.r / 2, 0, this.x + off * this.r / 2, width);
        ellipse(this.x, this.y, a + this.r);
        pop();
    }
    start() {
        console.log('started');
        clearInterval(this.thread);
        this.song.play();
        this.thread = setInterval(() => {
            //function beat
            for (let g of this.games) g.tick();
        }, 60000 / this.vel);
    }
    stop() {
        clearInterval(this.thread);
        this.song.stop();

    }
    addGame(g) {
        this.games.push(g);
    }
    removeGame(game) {
        let index = this.games.indexOf(game);
        this.games.splice(index, 1);
    }
    load(path) {
        this.song = loadSound(path, () => this.start(), () => {
            console.error("Speaker.js: error loading song");
        });
    }
    offset() {
        let total = 0;
        for (let g of this.games) {
            let score = g.p.score;
            total += score;
        }
        let diff = this.games[0].p.score - this.games[1].p.score;
        if (total == 0) return 0;
        else return diff / total;
    }
}