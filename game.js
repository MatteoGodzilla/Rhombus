class Game {
    constructor(x, y, options = {}) {
        this.x = x;
        this.y = y;
        this.m = new Matrix(this.x + 20, this.y + 20, 5, 10);
        this.p = new Player(this.x + 78, this.y + 500, options.player);
        this.defaultpath = options.path;
    }
    setup() {
        this.p.linkMatrix(this.m);

        loadImage(this.defaultpath + 'red.png', image => {
            //success
            console.log('set red');
            this.m.setr(image);
        }, () => console.error('failed red'));

        loadImage(this.defaultpath + 'green.png', image => {
            //success
            console.log('set green');
            this.m.setg(image);
        }, () => console.error('failed green'));

        loadImage(this.defaultpath + 'blue.png', image => {
            //success
            console.log('set blue');
            this.m.setb(image);
        }, () => console.error('failed blue'));

        loadImage(this.defaultpath + 'grid.png', image => {
            //success
            console.log('set grid');
            this.m.setImage(image);
        }, () => console.error('failed grid'));

        loadImage(this.defaultpath + 'pred.png', image => {
            //success
            console.log('set red bucket');
            this.p.setr(image);
        }, () => console.error('failed red bucket'));

        loadImage(this.defaultpath + 'pgreen.png', image => {
            //success
            console.log('set green bucket');
            this.p.setg(image);
        }, () => console.error('failed red bucket'));

        loadImage(this.defaultpath + 'pblue.png', image => {
            //success
            console.log('set blue bucket');
            this.p.setb(image);
        }, () => console.error('failed red bucket'));

    }
    show() {
        this.p.show();
        this.m.show();
    }
    tick(){
        this.m.tick();
        this.show();
        this.p.clear();
        this.show();
    }


}