let m = new Matrix(20, 20, 5, 10); //matrice dove scendono i blocchi
let p = new Player(78, 500); //giocatore, duh
let s = new Speaker(300,150);//speaker
let beat;   //thread separato per gestire la velocità
let buks = new Array(3); //creazione secchi per giocatore
let defaultpath = "res/skin2/"; //percorso file risorse --- cambiando questo cambia la skin visualizata
buks[0] = new Bucket(80, 460, 0);  
buks[1] = new Bucket(120, 460, 1); 
buks[2] = new Bucket(160, 460, 2); 

function setup() {
    loadImage(defaultpath+'red.png',setr,()=>{console.log('failed red');}); //caricamento immagini
    loadImage(defaultpath+'green.png',setg,()=>{console.log('failed green');});
    loadImage(defaultpath+'blue.png',setb,()=>{console.log('failed blue');});

    loadImage(defaultpath+'grid.png',setgrid,()=>{console.log('failed grid');}); //caricamento griglia

    createCanvas(600, 600); // base p5.js
    p.linkMatrix(m); //collegamento giocatore-matrice
    p.linkBuckets(buks); //collegamento giocatore-secchi
    s.linkMatrix(m);//collegamento speaker-matrice
    s.start(120);//speaker start
    
    //messo per funzione di debug
    /*setTimeout(() => {
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
    if(keyCode == ESCAPE)stop();//debug
}

function keyReleased() {
    p.ku(key); //trasferisce l' evento al player
}

function stop() {
    noLoop();
    console.log("STOP!");
    s.stop();
}

function setr(image){
    console.log('set red');
    m.setr(image);
}
function setg(image){
    console.log('set green');
    m.setg(image);
}
function setb(image){
    console.log('set blue');
    m.setb(image);
}
function setgrid(grid){
    console.log('set grid'); 
    m.setImage(grid);
}
//debug o creazione grafica
/*function mousePressed(){
    console.log(round(mouseX),round(mouseY));
}*/