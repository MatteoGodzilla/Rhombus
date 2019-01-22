let matrix = new Array(5); //colonne
let padding = 20;

function setup() {
	createCanvas(600, 600);
	for(let cols = 0; cols < matrix.length;cols++){
		matrix[cols] = new Array(10); //righe
	}
	for(let cols = 0; cols < matrix.length;cols++){
		for(let rows = 0; rows < matrix[cols].length;rows++){
			matrix[cols][rows] = new cell(cols,rows,0)
		}
	}
}



function draw(){
	background(51);
	for(let cols = 0; cols < matrix.length; cols++){
		for(let rows = 0; rows < matrix[0].length;rows++){
			push();
				translate(padding,padding);
				matrix[cols][rows].show();
			pop();
		}
	} 
}
