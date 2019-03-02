let options1 = {
    player: {
        left: 'a',
        right: 'd',
        shiftLeft: 'w',
        shiftRight: 's',
        meter: 'left'
    },
    path: "res/skin2/"
};

let options2 = {
    player: {
        left: 'ArrowLeft',
        right: 'ArrowRight',
        shiftLeft: 'ArrowUp',
        shiftRight: 'ArrowDown',
        meter: 'right'
    },
    path: "res/skin2/"
};
let test;
let g = new Game(60, 20, options1);
let g2 = new Game(535, 20, options2);
let s = new Speaker(400, 150, 120);

function setup() {
    test = loadSound('res/song.mp3');
    createCanvas(800, 600);
    g.setup();
    g2.setup();
    s.addGame(g);
    s.addGame(g2);
    s.load('res/song.mp3');
    //s.start(60); 
    /*
    setTimeout(() => {
        stop();
    }, 10000);*/
}


function draw() {
    background(51);
    g.show();
    g2.show();
    s.show();
}

function stop() {
    console.log("STOP!");
    s.stop();
}

function startSpeaker(){
    s.start(60);
    let button = document.getElementById('start');
    button.disabled = true;
}

//debug o creazione grafica
/*function mousePressed(){
    console.log(round(mouseX),round(mouseY));
}*/