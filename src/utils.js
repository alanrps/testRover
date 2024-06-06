const fs = require('fs');
const Plateau = require('./plateau');
const Rover = require('./rover');

class Utils {
    readFile(filePath){
        if(!filePath){
            throw new Error('No file path to read');
        }

        const inputData = fs.readFileSync(filePath, 'utf-8');
        return inputData;
    } 
    
    processFile(fileData){
        if(!fileData){
            throw new Error('No file data to process');
        }
        
        const rovers = []; 
        // Remove o '\r' do arquivo
        const cleanedText = fileData.replace(/\r/g, '');
        const inputData = cleanedText.trim().split('\n');
        const [width, height] = inputData[0].split(' ').map(value => parseInt(value, 10));
        const plateau = new Plateau(width, height);
    
        for(let i = 1; i < inputData.length; i += 2){
            const [startX, startY, startDirection] = inputData[i].split(' ');
            const instructions = inputData[i + 1];
            const rover = new Rover(Number(startX), Number(startY), startDirection, plateau);
            rover.runInstructions(instructions);
            rovers.push(rover);
        }

        return rovers;
    }

    printRoverPositions(rovers){
        if(!rovers.length){
            throw new Error('No process rovers avaliable');
        }
        
        rovers.forEach(rover => {
            console.log(rover.getFinalPosition());
        })
    }
}

module.exports = Utils;