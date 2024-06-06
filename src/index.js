
const path = require('path');
const Utils = require('./utils');
const utils = new Utils();

function main() {
    try {
        const inputPath = path.join(__dirname, 'input/input.txt');
        const fileData = utils.readFile(inputPath);
        const rovers = utils.processFile(fileData);
        utils.printRoverPositions(rovers);   
    } catch (error) {
        if(error instanceof Error){
            console.error('An error occurred while processing the file:', error.message);
            throw error;
        }
        else {
            throw new Error('Error to process File');
        }
    }
}

main();
