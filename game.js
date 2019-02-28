class Game {
    constructor(x, y, options = {}) {
        this.x = x;
        this.y = y;
        this.active = true;
        this.m = new Matrix(this.x, this.y, 5, 10);
        this.p = new Player(this.x + 58, this.y + 480, options.player);
        if (options.player.meter == 'left') this.meter = new Meter(this.x - 40, this.y + 280, 40, 120);
        else if (options.player.meter == 'right') this.meter = new Meter(this.x + 200, this.y + 280, 40, 120);
        this.defaultpath = options.path;
    }
    setup() {
        this.p.linkMatrix(this.m);
        this.p.linkMeter(this.meter);
        loadImage(this.defaultpath + 'red.png', image => {
            //success
            console.log('Game.js: set red');
            this.m.setr(image);
        }, () => console.error('Game.js: failed red'));

        loadImage(this.defaultpath + 'green.png', image => {
            //success
            console.log('Game.js: set green');
            this.m.setg(image);
        }, () => console.error('Game.js: failed green'));

        loadImage(this.defaultpath + 'blue.png', image => {
            //success
            console.log('Game.js: set blue');
            this.m.setb(image);
        }, () => console.error('Game.js: failed blue'));

        loadImage(this.defaultpath + 'grid.png', image => {
            //success
            console.log('Game.js: set grid');
            this.m.setImage(image);
        }, () => console.error('Game.js: failed grid'));

        loadImage(this.defaultpath + 'pred.png', image => {
            //success
            console.log('Game.js: set red bucket');
            this.p.setr(image);
        }, () => console.error('Game.js: failed red bucket'));

        loadImage(this.defaultpath + 'pgreen.png', image => {
            //success
            console.log('Game.js: set green bucket');
            this.p.setg(image);
        }, () => console.error('Game.js: failed red bucket'));

        loadImage(this.defaultpath + 'pblue.png', image => {
            //success
            console.log('Game.js: set blue bucket');
            this.p.setb(image);
        }, () => console.error('Game.js: failed red bucket'));

    }
    show() {
        this.p.show();
        this.m.show();
        this.meter.show();
    }
    tick() {
        if (this.active) {
            this.m.tick();
            this.show();
            if (this.m.isliving != false) {
                this.p.clear();
                this.show();
            } else this.active = false;
        }
    }


}