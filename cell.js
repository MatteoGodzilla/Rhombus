class Cell {
	constructor(x, y, block) {
		this.x = x;
		this.y = y;
		this.block = block;
		this.size = 40;
		this.gr = new Array(3);
	}
	show() {
		push();
		if (this.gr != undefined) {
			if (this.block == 0) image(this.gr[0], this.x * this.size, this.y * this.size, this.size, this.size);
			else if (this.block == 1) image(this.gr[1], this.x * this.size, this.y * this.size, this.size, this.size);
			else if (this.block == 2) image(this.gr[2], this.x * this.size, this.y * this.size, this.size, this.size);
			else {
				fill(127);
				rect(this.x * this.size, this.y * this.size, this.size, this.size);
			}
		}

		pop();
	}
	setblock(block) {
		this.block = block;
	}
	setgr(images) {
		this.gr = images;
	}
}