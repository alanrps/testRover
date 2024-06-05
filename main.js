const Rover = require('./rover');
const Plateau = require('./plateau');
const path = require('path');
const fs = require('fs');
const rovers = []; 

function readFile(filePath){
    const inputData = fs.readFileSync(filePath, 'utf-8');
    return inputData;
} 

function printRoverPositions(){
    rovers.forEach(rover => {
        console.log(rover.getFinalPosition());
    })
}

function processFile(fileData){
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
}

const inputPath = path.join(__dirname, 'input/input.txt');
const fileData = readFile(inputPath);
processFile(fileData);
printRoverPositions();


