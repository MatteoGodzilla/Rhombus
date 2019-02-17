let options1 = {
    player: {
        left: 'a',
        right: 'd',
        shiftleft: 'w',
        shiftright: 's'
    },
    path: "res/skin2/"
};

let options2 = {
    player: {
        left: 'j',
        right: 'l',
        shiftleft: 'i',
        shiftright: 'k'
    },
    path:"res/skin1/"
};

let g = new Game(0, 0, options1);
let g2 = new Game(360, 0, options2);

function setup() {
    createCanvas(600, 600);
    g.setup();
    g2.setup();
    /* 
    setTimeout(() => {
        stop();
    }, 10000);  
    */
}


function draw() {
    background(51);
    g.tick();
    g2.tick();
}

function stop() {
    noLoop();
    console.log("STOP!");
    g.stop();
    g2.stop();
}

//debug o creazione grafica
/*function mousePressed(){
    console.log(round(mouseX),round(mouseY));
}*/