class Matrix{
	constructor(rows,cols){
		this.value = new Array(rows);
			for(let i = 0; i < this.value.length;i++){
				this.value[i] = new Array(cols);
			}
			for(let i = 0; i < this.value.length;i++){
				for(let j = 0; j < this.value[0].length;j++){
					this.value[i][j]=new Cell(i,j,-1)
				}
			}
	}
	show(){
		for(let cols = 0; cols < this.value.length; cols++){
			for(let rows = 0; rows < this.value[0].length;rows++){
				push();
					translate(padding, padding);
					this.value[cols][rows].show();
				pop();
			}
		}
	}
}