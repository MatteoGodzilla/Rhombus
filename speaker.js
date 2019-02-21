class Speaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 60;
        this.thread = undefined;
        this.vel = 0;
        this.games = [];
        this.frame = 0;
    }
    show() {
        push();
        fill(255);
        if (this.frame <= 10) {
            ellipse(this.x, this.y, this.r + 10 - this.frame);
            this.frame++;
        } else {
            ellipse(this.x, this.y, this.r);
        }
        pop();
    }
    start(v) {
        console.log('started');
        this.vel = v;
        this.stop();
        this.thread = setInterval(() => {
            //function beat
            this.frame = 0;
            for(let g of this.games){
                g.tick();
            }
        }, 60000 / this.vel);
    }
    stop() {
        clearInterval(this.thread);
    }
    addGame(g) {
        this.games.push(g);
    }
    removeGame(game){
        let index = this.games.indexOf(game);
        this.games.splice(index,1);
    }
}