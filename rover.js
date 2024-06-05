class Rover {
    cardinalDirections = ['N', 'E', 'S', 'W'];

    constructor(x, y, direction, plateau){
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.plateau = plateau;
    }

    runInstructions(instructions){
        for(const instruction of instructions){            
            if(instruction == 'L'){
                this.spinLeft();
            }
            else if(instruction == 'R'){
                this.spinRight();
            }
            else if(instruction == 'M'){
                this.moveForward();
            }
            else {
                console.log(`Instruction invalid ${instruction}`);
            }
    
        }
    }

    spinRight(){
        const indexDirection = this.cardinalDirections.indexOf(this.direction);
        this.direction = this.cardinalDirections[(indexDirection + 1) % 4];
    }
    
    spinLeft(){
        const indexDirection = this.cardinalDirections.indexOf(this.direction);
        this.direction = this.cardinalDirections[(indexDirection + 3) % 4];
    }

    moveForward(){
        let newX = this.x;
        let newY = this.y;

        console.log(newX, newY);

        if(this.direction == 'N'){
            newY = newY + 1;
        }
        else if(this.direction == 'S'){
            newY = newY - 1;
        }
        else if(this.direction == 'E'){
            newX = newX + 1;
            console.log(newX);
        }
        else if(this.direction == 'W'){
            newX = newX - 1;
        }
        console.log(newX, newY);

        if(this.plateau.isValidPosition(newX, newY)){
            console.log(this.x, this.y);
            this.x = newX;
            this.y = newY;
        }
        else {
            console.log(`Position invalid, x: ${newX}, y: ${newY}`);
        }
    }

    getFinalPosition(){
        return `${this.x} ${this.y} ${this.direction}`;
    }
}

module.exports = Rover;