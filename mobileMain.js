let quarterWidth = window.innerWidth / 4;
let quarterHeight = window.innerHeight / 4;
let y = window.innerHeight-quarterHeight+60;

let buttons = new Array(4);
buttons[0] = new Btn(0, y,quarterWidth,quarterHeight, "a");
buttons[1] = new Btn(quarterWidth,y,quarterWidth,quarterHeight, "b");
buttons[2] = new Btn(quarterWidth*2, y,quarterWidth,quarterHeight, "c");
buttons[3] = new Btn(quarterWidth*3, y,quarterWidth,quarterHeight, "d");

let g = new Game((window.innerWidth - 200) / 2, (window.innerHeight - 400) / 4, {
    player: {
        left: buttons[0].eventName,
        right: buttons[1].eventName,
        shiftLeft: buttons[2].eventName,
        shiftRight: buttons[3].eventName,
        meter: 'left'
    },
    path: 'res/skin2/'
});
let rightMargin = window.innerWidth - g.x - g.matrix.width;
let s = new Speaker(window.innerWidth - rightMargin / 2, window.innerHeight / 4);

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    for(let b of buttons)b.linkGame(g);
    g.setup();
    s.addGame(g);
    s.load('res/song.mp3');
}

function draw() {
    background(51);
    for(let b of buttons)b.show();
    push();
    g.show();
    s.show();
    pop();
}