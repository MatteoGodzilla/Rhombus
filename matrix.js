class Matrix {
	constructor(x, y, rows, cols) {
		this.x = x;
		this.y = y;
		this.value = new Array(rows);

		for (let i = 0; i < this.value.length; i++) {
			this.value[i] = new Array(cols);
		}
		for (let i = 0; i < this.value.length; i++) {
			for (let j = 0; j < this.value[0].length; j++) {
				this.value[i][j] = new Cell(i, j, -1)
			}
		}
	}
	show() {
		for (let cols = 0; cols < this.value.length; cols++) {
			for (let rows = 0; rows < this.value[0].length; rows++) {
				push();
				translate(this.x, this.y);
				this.value[cols][rows].show();
				pop();
			}
		}
	}
	tick() {
		this.generate();
		this.show();
		this.move();
		this.show();
	}
	generate() {
		let r = floor(random() * this.value.length);
		let color = floor(random() * 3);
		this.value[r][0].setblock(color);
	}
	move() {
		for (let cols = 0; cols < this.value.length; cols++) {
			for (let rows = this.value[0].length - 2; rows >= 0; rows--) {
				let current = this.value[cols][rows];
				let next = this.value[cols][rows + 1];
				if (next.block === -1) {
					next.setblock(current.block);
					current.setblock(-1);
				}
			}

		}
	}
}