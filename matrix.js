class Matrix {
	constructor(x, y, rows, cols) {
		this.x = x;
		this.y = y;
		this.image = undefined;
		this.value = new Array(rows);
		this.buffer = [0, 1, 2, 3, 4];
		this.pastCol = 50;
		this.colSize = 40;
		for (let i = 0; i < this.value.length; i++) {
			this.value[i] = new Array(cols);
		}
		for (let i = 0; i < this.value.length; i++) {
			for (let j = 0; j < this.value[0].length; j++) {
				this.value[i][j] = new Cell(i*this.colSize, j*this.colSize);
			}
		}
		this.width = this.value[0][0].size * this.value.length;
		this.height = this.value[0][0].size * this.value[0].length;
	}
	show() {
		push();
		translate(this.x, this.y);
		if (this.image != undefined) {
			image(this.image, -1, -1, this.width + 1, this.height + 1);
		}else{
			fill(128,128);
			rect(0,0,this.width+1,this.height+1);
		}
		for (let cols = 0; cols < this.value.length; cols++) {
			for (let rows = 0; rows < this.value[0].length; rows++) {
				this.value[cols][rows].show();
			}
		}
		pop();
	}
	tick() {
		this.generate();
		this.move();
	}
	generate() {
		this.buffer = [0, 1, 2, 3, 4];
		this.buffer.splice(this.pastCol, 1);
		let newcol = floor(random() * (this.value.length-1));
		if(this.pastCol == newcol){
			newcol = this.buffer[0];
		}
		let color = floor(random() * 3);
		this.value[this.buffer[newcol]][0].new = true;
		this.value[this.buffer[newcol]][0].setblock(color);
		this.pastCol = newcol;
	}
	move() {
		for (let cols = this.value.length - 1; cols >= 0; cols--) {
			for (let rows = this.value[0].length - 2; rows >= 0; rows--) {
				let current = this.value[cols][rows];
				let next = this.value[cols][rows + 1];
				if (current.new == true) {
					current.new = false;
				} else if (next.block === -1 && current.block != -1) {
					next.setblock(current.block);
					current.setblock(-1);
				}
			}
		}
	}
	setgr(gr) {
		for (let row of this.value) {
			for (let col of row) {
				col.setgr(gr);
			}
		}
	}
	setImage(Image) {
		this.image = Image;
	}
	setpadding(value){
		for(let row of this.value){
			for(let c of row){
				c.setpadding(value);
			}
		}
	}
}