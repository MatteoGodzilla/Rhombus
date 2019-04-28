class Matrix {
	constructor(x, y, rows, cols, size = 40) {
		this.x = x;
		this.y = y;
		this.background = undefined;
		this.value = new Array(rows);
		this.pastCol = 50;
		this.colSize = size;
		this.dead = false;
		this.deathImage = undefined;

		for (let i = 0; i < this.value.length; i++) {
			this.value[i] = new Array(cols);
		}
		for (let i = 0; i < this.value.length; i++) {
			for (let j = 0; j < this.value[0].length; j++) {
				this.value[i][j] = new Cell(i * this.colSize, j * this.colSize, this.colSize);
			}
		}
		this.width = this.value[0][0].size * this.value.length;
		this.height = this.value[0][0].size * this.value[0].length;
	}
	show() {
		push();
		translate(this.x, this.y);
		if (this.background != undefined) {
			image(this.background, 0, 0, this.width, this.height);
		} else {
			fill(128, 128);
			rect(0, 0, this.width, this.height);
		}
		for (let cols = 0; cols < this.value.length; cols++) {
			for (let rows = 0; rows < this.value[0].length; rows++) {
				this.value[cols][rows].show();
			}
		}
		if (this.dead == true && this.deathImage != undefined) {
			imageMode(CENTER);
			image(this.deathImage, this.width/2,this.height/2,this.colSize*5,this.colSize*5);
		}
		pop();
	}
	tick() {
		this.chechLife();
		if (this.dead != true) {
			this.generate();
			this.move();
		}
	}
	generate() {
		let buffer = [0, 1, 2, 3, 4];
		buffer.splice(this.pastCol, 1);
		let choice = floor(random() * buffer.length);
		let c = this.value[buffer[choice]][0];
		let block = floor(random() * 3);
		c.setBlock(block);
		c.new = true;
		this.pastCol = buffer[choice];
	}
	move() {
		for (let cols = this.value.length - 1; cols >= 0; cols--) {
			for (let rows = this.value[0].length - 2; rows >= 0; rows--) {
				let current = this.value[cols][rows];
				let next = this.value[cols][rows + 1];
				if (current.new == true) {
					current.new = false;
				} else if (next.block === -1 && current.block != -1) {
					next.setBlock(current.block);
					current.setBlock(-1);
				}
			}
		}
	}
	chechLife() {
		let sum = 0;
		let total = 0;
		for (let col of this.value) {
			for (let cell of col) {
				if (cell.block != -1) sum++;
				total++;
			}
		}
		if ((sum / total) >= 0.9) {
			this.dead = true;
		}
	}
	setR(gr) {
		for (let row of this.value) {
			for (let col of row) {
				col.setR(gr);
			}
		}
	}
	setG(gr) {
		for (let row of this.value) {
			for (let col of row) {
				col.setG(gr);
			}
		}
	}
	setB(gr) {
		for (let row of this.value) {
			for (let col of row) {
				col.setB(gr);
			}
		}
	}
	setBackground(bg) {
		this.background = bg;
	}
	setDeathImage(i) {
		this.deathImage = i;
	}
	setPadding(value) {
		for (let row of this.value) {
			for (let c of row) {
				c.setPadding(value);
			}
		}
	}
}