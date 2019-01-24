//TODO REFACTOR
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.pos = 0;
        this.locked = undefined;
        this.buckets = new Array(3);
        this.matrix = undefined;
        this.rot = 2;
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
        if (keyCode == LEFT_ARROW) {
            this.rot--;
            if (this.rot < 0) this.rot = 2;
        } else if (keyCode == RIGHT_ARROW) {
            this.rot++;
            if (this.rot > 2) this.rot = 0;
        }
    }
    ku(key) {
        if (key == this.locked) {
            this.pos = 0;
            this.locked = undefined;
        }
    }
    show() {
        push();
        ellipse(this.x + this.pos * 40, this.y, 40, 40);
        rectMode(CENTER);
        push();
        //REFACTOR
        switch(this.rot){
            case 2:
                fill(255,0,0);
                rect(this.x + this.pos * 40 - 40, this.y - 41, 40, 40);
                fill(0,255,0);
                rect(this.x + this.pos * 40, this.y - 41, 40, 40);
                fill(0,0,255);
                rect(this.x + this.pos * 40 + 40, this.y - 41, 40, 40);
            break;
            case 1:
                fill(0,255,0);
                rect(this.x + this.pos * 40 - 40, this.y - 41, 40, 40);
                fill(0,0,255);
                rect(this.x + this.pos * 40, this.y - 41, 40, 40);
                fill(255,0,0);
                rect(this.x + this.pos * 40 + 40, this.y - 41, 40, 40);
            break;
            case 0:
                fill(0,0,255);
                rect(this.x + this.pos * 40 - 40, this.y - 41, 40, 40);
                fill(255,0,0);
                rect(this.x + this.pos * 40, this.y - 41, 40, 40);
                fill(0,255,0);
                rect(this.x + this.pos * 40 + 40, this.y - 41, 40, 40);
            break;
        }
        pop();
        /* rect(this.x + this.pos * 40, this.y - 41, 40, 40);//center
        rect(this.x + this.pos * 40 - 40, this.y - 41, 40, 40);//left
        rect(this.x + this.pos * 40 + 40, this.y - 41, 40, 40); //right 
        */
        pop();
    }
    linkMatrix(matrix) {
        this.matrix = matrix;
    }

}