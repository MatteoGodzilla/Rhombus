class Speaker {
    constructor(x, y, vel) {
        this.x = x;
        this.y = y;
        this.r = 60;
        this.thread = undefined;
        this.song = undefined;
        this.color = [255,255,255];
        this.vel = vel;
        this.games = [];
        this.amp = new p5.Amplitude();
    }
    show() {
        push();
        let a = this.amp.getLevel();
        a = map(a, 0, 1, 0, 50);
        fill(this.color[0],this.color[1],this.color[2]);
        strokeWeight(2);
        if(this.games.length == 2){
            let off = this.offset(); //tra -1 e 1
            line(this.x + off * this.r / 2, 0, this.x + off * this.r / 2, width);
        }
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
    addGame(game) {
        this.games.push(game);
    }
    removeGame(game) {
        let index = this.games.indexOf(game);
        this.games.splice(index, 1);
    }
    load(path) {
        this.song = loadSound(path, () => {
            console.log("Speaker.js: loaded song");
            this.color = [0,255,0];
            this.start();
        }, () => {
            console.error("Speaker.js: error loading song");
        });
    }
    offset() {
        let total = 0;
        for (let g of this.games) {
            let score = g.player.score;
            total += score;
        }
        let diff = this.games[0].player.score - this.games[1].player.score;
        if (total == 0) return 0;
        else return diff / total;
    }
}