class Speaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 60;
        this.thread = undefined;
        this.song = undefined;
        this.color = [255, 255, 255];
        this.vel = undefined;
        this.games = [];
        this.amp = new p5.Amplitude();
    }
    show() {
        push();
        let a = this.amp.getLevel();
        a = map(a, 0, 1, 0, this.r * 2);
        fill(this.color[0], this.color[1], this.color[2]);
        strokeWeight(2);
        if (this.games.length == 2) {
            let off = this.offset(); //tra -1 e 1
            line(this.x + off * this.r / 2, 0, this.x + off * this.r / 2, width);
        }
        ellipse(this.x, this.y, a + this.r);
        pop();
    }
    start(vel) {
        this.vel = vel;
        if (this.vel != undefined) {
            console.log('Speaker.js: started at '+this.vel+" bpm");
            clearInterval(this.thread);
            this.song.play();
            this.thread = setInterval(() => {
                //function beat
                for (let g of this.games) g.tick();
                this.checkGames();
            }, 60000 / this.vel);
        } else {
            console.error('Speaker.js: this.vel is undefined. Cannot start Thread');
        }
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
    load(path, vel) {
        this.song = loadSound(path, () => {
            console.log("Speaker.js: loaded song");
            this.color = [0, 255, 0];
            this.start(vel);
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

    checkGames() {
        let activeGames = [];
        let living = 0;
        for (let g of this.games) {
            if (g.matrix.dead != true) {
                append(activeGames, true);
                living++;
            }
            else append(activeGames, false);
        }
        if (living == 1) {
            this.stop();
            console.log("The Winner is player #"+(activeGames.indexOf(true)+1));
        }
    }
}