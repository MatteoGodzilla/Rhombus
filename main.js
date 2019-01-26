let m = new Matrix(20, 20, 5, 10);
//let padding = 20;
let p = new Player(118, 500);
let beat;
let buks = new Array(3);
buks[0] = new Bucket(80, 460, 0);
buks[1] = new Bucket(120, 460, 1);
buks[2] = new Bucket(160, 460, 2);

function setup() {
    createCanvas(600, 600);
    p.linkMatrix(m);
    p.linkBuckets(buks);

    beat = setInterval(() => {
        m.tick();
    }, 500);
    setTimeout(() => {
        stop();
    }, 10000);
}


function draw() {
    background(51);
    p.show();
    m.show();
}

function keyPressed() {
    p.kd(key) //trasferisce l' evento al player
}

function keyReleased() {
    p.ku(key) //trasferisce l' evento al player
}

function stop() {
    noLoop();
    clearInterval(beat);
    console.log("STOP!")
}

/*function mousePressed(){
    console.log(round(mouseX),round(mouseY));//debug o creazione ui
}*/