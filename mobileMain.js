let w = window.innerWidth;
let h = window.innerHeight;
let quarterWidth = w / 4;
let quarterHeight = h / 4;
let y = h - quarterHeight + 60;

let buttons = new Array(4);
buttons[0] = new Btn(0, y, quarterWidth, quarterHeight, "a");
buttons[1] = new Btn(quarterWidth, y, quarterWidth, quarterHeight, "b");
buttons[2] = new Btn(quarterWidth * 2, y, quarterWidth, quarterHeight, "c");
buttons[3] = new Btn(quarterWidth * 3, y, quarterWidth, quarterHeight, "d");

let options = {
    player: {
        left: buttons[0].eventName,
        right: buttons[1].eventName,
        shiftLeft: buttons[2].eventName,
        shiftRight: buttons[3].eventName,
        meter: 'left'
    },
    path: 'res/skin2/',
    size: 40
};

if (w >= 700) {
    options.size = 60;
} else if (w >= 1080) options.size = 80;

let g = new Game((w - options.size * 5) / 2, (h -options.size * 13-buttons[0].height) / 2, options);
let rightMargin = w - g.x - g.matrix.width;
let s = new Speaker(w - rightMargin / 2, h / 4,40);

function setup() {
    createCanvas(w, h);
    for (let b of buttons) b.linkGame(g);
    g.setup();
    s.addGame(g);
    s.load('res/song.mp3');
}

function draw() {
    background(51);
    for (let b of buttons) b.show();
    push();
    g.show();
    s.show();
    pop();
}

document.body.addEventListener('touchstart',ev=>{
    //touch down
    for(let b of buttons){
        b.down(ev);
    }
});

document.body.addEventListener('touchend',ev=>{
    //touch down
    for(let b of buttons){
        b.up(ev);
    }
});

function stop(){
    s.stop();
}