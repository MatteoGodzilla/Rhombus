class Game {
    constructor(x, y, options = {}) {
        this.x = x;
        this.y = y;
        this.active = true;
        this.matrix = new Matrix(this.x, this.y, 5, 10);
        this.player = new Player(this.x + 58, this.y + 480, options.player);
        if (options.player.meter == 'left') this.meter = new Meter(this.x - 40, this.y + 280, 40, 120);
        else if (options.player.meter == 'right') this.meter = new Meter(this.x + 200, this.y + 280, 40, 120);
        this.defaultPath = options.path;
    }
    setup() {
        this.player.linkMatrix(this.matrix);
        this.player.linkMeter(this.meter);
        loadImage(this.defaultPath + 'red.png', image => {
            //success
            console.log('Game.js: set red');
            this.matrix.setR(image);
        }, () => console.error('Game.js: failed red'));

        loadImage(this.defaultPath + 'green.png', image => {
            //success
            console.log('Game.js: set green');
            this.matrix.setG(image);
        }, () => console.error('Game.js: failed green'));

        loadImage(this.defaultPath + 'blue.png', image => {
            //success
            console.log('Game.js: set blue');
            this.matrix.setB(image);
        }, () => console.error('Game.js: failed blue'));

        loadImage(this.defaultPath + 'grid.png', image => {
            //success
            console.log('Game.js: set grid');
            this.matrix.setBackground(image);
        }, () => console.error('Game.js: failed grid'));

        loadImage(this.defaultPath + 'pred.png', image => {
            //success
            console.log('Game.js: set red bucket');
            this.player.setR(image);
        }, () => console.error('Game.js: failed red bucket'));

        loadImage(this.defaultPath + 'pgreen.png', image => {
            //success
            console.log('Game.js: set green bucket');
            this.player.setG(image);
        }, () => console.error('Game.js: failed red bucket'));

        loadImage(this.defaultPath + 'pblue.png', image => {
            //success
            console.log('Game.js: set blue bucket');
            this.player.setB(image);
        }, () => console.error('Game.js: failed red bucket'));

    }
    show() {
        this.player.show();
        this.matrix.show();
        this.meter.show();
    }
    tick() {
        if (this.active) {
            this.matrix.tick();
            this.show();
            if (this.matrix.isliving != false) {
                this.player.clear();
                this.show();
            } else this.active = false;
        }
    }


}