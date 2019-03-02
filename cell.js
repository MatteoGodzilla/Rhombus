class Cell {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.block = -1;
		this.size = 40;
		this.r = undefined;
		this.g = undefined;
		this.b = undefined;
		this.new = false;
		this.padding = 2;
	}
	show() {
		push();
		if (this.block == 0) {
			if (this.r != undefined) {
				image(this.r, this.x + this.padding, this.y + this.padding, this.size - (this.padding * 2), this.size - (this.padding * 2));
			} else {
				fill(255, 0, 0);
				rect(this.x + this.padding, this.y + this.padding, this.size - (this.padding * 2), this.size - (this.padding * 2));
			}
		}
		if (this.block == 1) {
			if (this.g != undefined) {
				image(this.g, this.x + this.padding, this.y + this.padding, this.size - (this.padding * 2), this.size - (this.padding * 2));
			} else {
				fill(0, 255, 0);
				rect(this.x + this.padding, this.y + this.padding, this.size - (this.padding * 2), this.size - (this.padding * 2));
			}
		}
		if (this.block == 2) {
			if (this.b != undefined) {
				image(this.b, this.x + this.padding, this.y + this.padding, this.size - (this.padding * 2), this.size - (this.padding * 2));
			} else {
				fill(0, 0, 255);
				rect(this.x + this.padding, this.y + this.padding, this.size - (this.padding * 2), this.size - (this.padding * 2));
			}
		}
		pop();
	}
	setBlock(block) {
		this.block = block;
	}
	setR(im) {
		this.r = im;
	}
	setG(im) {
		this.g = im;
	}
	setB(im) {
		this.b = im;
	}
	setPadding(value) {
		this.padding = value;
	}
}