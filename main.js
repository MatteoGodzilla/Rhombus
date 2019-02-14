let m = new Matrix(20, 20, 5, 10); //matrice dove scendono i blocchi
let p = new Player(78, 500); //giocatore, duh
let s = new Speaker(300,150);//speaker
let beat;   //thread separato per gestire la velocità
let buks = new Array(3); //creazione secchi per giocatore
buks[0] = new Bucket(80, 460, 0);  
buks[1] = new Bucket(120, 460, 1); 
buks[2] = new Bucket(160, 460, 2); 

function preload(){
    let defaultpath = "res/skin2/"; //percorso file risorse --- cambiando questo cambia la skin visualizata
    let r = loadImage(defaultpath+'red.png'); //caricamento immagini
    let g = loadImage(defaultpath+'green.png');
    let b = loadImage(defaultpath+'blue.png');
    m.setgr([r,g,b]); //passaggio delle immagini alla matrice

    let grid = loadImage('res/grid.png'); //carimìcamento griglia
    m.setImage(grid); //passaggio griglia alla matrice
}

function setup() {
    createCanvas(600, 600); // base p5.js
    p.linkMatrix(m); //collegamento giocatore-matrice
    p.linkBuckets(buks); //collegamento giocatore-secchi
    s.linkMatrix(m);//collegamento speaker-matrice
    s.start(120);//speaker start
    
    //messo per funzione di debug
    /* setTimeout(() => {
        stop();
    }, 10000); */
}


function draw() {
    background(51);//sfondo base p5.js
    p.show(); //mostra il giocatore
    p.clear(); //il giocatore tenta di pulire blocchi
    m.show(); //mostra la matrice
    s.show();
}

function keyPressed() {
    p.kd(key) ;//trasferisce l' evento al player
    if(key == ' ')m.tick(); //debug
}

function keyReleased() {
    p.ku(key); //trasferisce l' evento al player
}

function stop() {
    noLoop();
    console.log("STOP!");
    s.stop();
}

//debug o creazione grafica
/*function mousePressed(){
    console.log(round(mouseX),round(mouseY));
}*/