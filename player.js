class Player {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.pos = 0;
        this.locked = undefined;
        this.buckets = new Array(3);
		this.matrix = undefined;
		this.rot = 0;
    }

    kd(key) {
        if (key == 'a') {
            this.pos = -1;
            this.locked = 'a';
        } else
        if (key == 'd') {
            this.pos = 1;
            this.locked = 'd';
        }
		if(keyCode == LEFT_ARROW){
			this.rot--;
		}else if(keyCode == RIGHT_ARROW){
			this.rot++;
		}
		console.log(this.rot);
    }
    ku(key) {
        if (key == this.locked) {
            this.pos = 0;
            this.locked = undefined;
        }
    }
    show() {
        push();
            ellipse(this.x+this.pos*40,this.y,40,40);
			rectMode(CENTER);
			rect(this.x+this.pos*40,this.y-41,40,40);
			rect(this.x+this.pos*40-40,this.y-41,40,40);
			rect(this.x+this.pos*40+40,this.y-41,40,40);
        pop();
    }
	linkMatrix(matrix){
		this.matrix = matrix;
	}
	
}