class Cell {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.block = -1;
		this.size = 40;
		this.gr = undefined;
		this.new = false;
		this.padding = 2;
	}
	show() {
		push();
		if (this.gr != undefined) {
			if (this.block == 0) image(this.gr[0], this.x+this.padding, this.y+this.padding, this.size-(this.padding*2), this.size-(this.padding*2));
			else if (this.block == 1) image(this.gr[1], this.x+this.padding, this.y+this.padding, this.size-(this.padding*2), this.size-(this.padding*2));
			else if (this.block == 2) image(this.gr[2], this.x+this.padding, this.y+this.padding, this.size-(this.padding*2), this.size-(this.padding*2));
		}else{
			if(this.block == 0)fill(255,0,0);
			else if (this.block == 1)fill(0,255,0);
			else if (this.block == 2)fill(0,0,255);
			else fill(0,0);
			rect(this.x+this.padding,this.y+this.padding,this.size-(this.padding*2),this.size-(this.padding*2));
		}
		pop();
	}
	setblock(block) {
		this.block = block;
	}
	setgr(images) {
		this.gr = images;
	}
	setpadding(value){
		this.padding = value;
	}
}