class Game {
    constructor(x, y, options) {
        this.x = x;
        this.y = y;
        this.active = true;
        this.defaultPath = options.path;
        this.options = options;
        this.damage = 0;
        this.enemy = undefined;
        this.clearDamageThread = undefined;

        if (options.size != undefined) this.size = options.size;
        else this.size = 40;

        this.matrix = new Matrix(this.x, this.y, 5, 10, this.size);
        this.player = new Player(this.x + this.size, this.y + this.matrix.height + this.size * 2, options.player, this.size);
        if (options.player.meter == 'left') this.meter = new Meter(this.x - this.size, this.y + this.matrix.height - this.size * 3 - 1, this.size, this.size * 3);
        else if (options.player.meter == 'right') this.meter = new Meter(this.x + this.size * 5, this.y + this.matrix.height - this.size * 3 - 1, this.size, this.size * 3);

    }
    setup() {
        this.player.linkMatrix(this.matrix);
        this.player.linkMeter(this.meter);
        loadImage(this.defaultPath + 'red.png', image => {
            //success
            console.log('Game.js: set red');
            this.matrix.setR(image);
        });

        loadImage(this.defaultPath + 'green.png', image => {
            //success
            console.log('Game.js: set green');
            this.matrix.setG(image);
        });

        loadImage(this.defaultPath + 'blue.png', image => {
            //success
            console.log('Game.js: set blue');
            this.matrix.setB(image);
        });

        loadImage(this.defaultPath + 'grid.png', image => {
            //success
            console.log('Game.js: set grid');
            this.matrix.setBackground(image);
        });

        loadImage(this.defaultPath + 'death.png', image => {
            //success
            console.log('Game.js: set death image');
            this.matrix.setDeathImage(image);
        });

        loadImage(this.defaultPath + 'pred.png', image => {
            //success
            console.log('Game.js: set red bucket');
            this.player.setR(image);
        });

        loadImage(this.defaultPath + 'pgreen.png', image => {
            //success
            console.log('Game.js: set green bucket');
            this.player.setG(image);
        });

        loadImage(this.defaultPath + 'pblue.png', image => {
            //success
            console.log('Game.js: set blue bucket');
            this.player.setB(image);
        });

        if (this.options.player.meter == 'right') {
            loadImage(this.defaultPath + 'comboRight.png', image => {
                //success
                console.log('Game.js: set meter bg');
                this.meter.setbg(image);
            });
        } else if (this.options.player.meter == 'left') {
            loadImage(this.defaultPath + 'comboLeft.png', image => {
                //success
                console.log('Game.js: set meter bg');
                this.meter.setbg(image);
            });
        }
    }

    show() {
        this.meter.show();
        this.player.show();
        this.matrix.show();
    }
    tick() {
        if (this.damage == 0) {
            this.matrix.tick();
            this.show();
            this.player.clear();
            this.show();
            this.sendDamage(this.player.sendattack);
        } else {
            if (this.clearDamageThread == undefined) {
                this.clearDamageThread = setInterval(() => {
                    if (this.damage > 0) {
                        this.matrix.tick();
                        this.show();
                        this.damage--;
                    } else {
                        clearInterval(this.clearDamageThread);
                        this.clearDamageThread = undefined;
                    }
                }, 100);
            }
        }
    }

    sendDamage(damage) {
        if (this.enemy != undefined)
            this.enemy.damage = damage;
    }
}