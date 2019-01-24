let m = new Matrix(5,10);
let padding = 20;
let p = new Player(118,500);

function setup() {
    createCanvas(600, 600);
	p.linkMatrix(m);
}


function draw(){
    background(51);
    p.show();
	m.show();
} 

function keyPressed(){
    p.kd(key)//trasferisce l' evento al player
}

function keyReleased(){
    p.ku(key)//trasferisce l' evento al player
}

 /*function mousePressed(){
    console.log(round(mouseX),round(mouseY));//debug o creazione ui
}*/