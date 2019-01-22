let matrix = new Array(5); //colonne
let padding = 20;
let p = new Player(118,480);

function setup() {
    createCanvas(600, 600);
    
	for(let cols = 0; cols < matrix.length;cols++){
		matrix[cols] = new Array(10); //righe
	}
	for(let cols = 0; cols < matrix.length;cols++){
		for(let rows = 0; rows < matrix[cols].length;rows++){
            matrix[cols][rows] = new Cell(cols,rows,-1);
		}
    }
}


function draw(){
    background(51);
    p.show();
	for(let cols = 0; cols < matrix.length; cols++){
		for(let rows = 0; rows < matrix[0].length;rows++){
			drawMatrix(cols, rows);
        }
    }
} 

function drawMatrix(cols, rows) {
    push();
    translate(padding, padding);
    matrix[cols][rows].show();
    pop();
}

function keyPressed(){
    p.kd(key)//trasferisce l' evento al player
}

function keyReleased(){
    p.ku(key)//trasferisce l' evento al player
}

/* function mousePressed(){
    console.log(round(mouseX),round(mouseY));//debug o creazione ui
}
 */