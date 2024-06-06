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
                throw new Error(`Instruction invalid ${instruction}`);
            }
    
        }
    }

    // Incrementa o índice em 1, representando a rotação para a direita.
    // O módulo (%) é para garantir que o índice permaneça dentro dos limites do array (0 a 3).
    spinRight(){
        const indexDirection = this.cardinalDirections.indexOf(this.direction);
        this.direction = this.cardinalDirections[(indexDirection + 1) % 4];
    }
    
    // Incrementa o índice em 3, representando a rotação para a esquerda.
    // O módulo (%) é para garantir que o índice permaneça dentro dos limites do array (0 a 3).
    spinLeft(){
        const indexDirection = this.cardinalDirections.indexOf(this.direction);
        this.direction = this.cardinalDirections[(indexDirection + 3) % 4];
    }

    // Altera x e y de acordo com as direção atual do rover
    moveForward(){
        let newX = this.x;
        let newY = this.y;

        if(this.direction == 'N'){
            newY = newY + 1;
        }
        else if(this.direction == 'S'){
            newY = newY - 1;
        }
        else if(this.direction == 'E'){
            newX = newX + 1;
        }
        else if(this.direction == 'W'){
            newX = newX - 1;
        }

        if(this.plateau.isValidPosition(newX, newY)){
            this.x = newX;
            this.y = newY;
        }
        else {
            throw new Error(`Position invalid, x: ${newX}, y: ${newY}`);
        }
    }

    getFinalPosition(){
        return `${this.x} ${this.y} ${this.direction}`;
    }
}

module.exports = Rover;