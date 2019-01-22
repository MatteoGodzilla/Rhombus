class Cell{
	constructor(x,y,block){
		this.x = x;
		this.y = y;
		this.block = block;
		this.size = 40;
	}
	show(){
		push();
			if(this.block == 0) fill(255,0,0);//rosso
			else if(this.block == 1) fill(0,255,0);//verde
			else if(this.block == 2) fill(0,0,255);//blu
			else fill(255,255,255);//bianco
			rect(this.x*this.size,this.y*this.size,this.size-1,this.size-1);
		pop();
	}
}