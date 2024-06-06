const { expect, test, describe, beforeAll } = require('@jest/globals');
const Utils = require('../src/utils');
const fs = require('fs');
jest.mock('fs');

describe('Utils', () => {
    let utils;

    beforeAll(() => {
        utils = new Utils();
    })

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should read the file and return its content', () => {
        const filePath = 'input.txt';
        const fileContent = '5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM';

        fs.readFileSync.mockReturnValue(fileContent); 

        const result = utils.readFile(filePath);
        expect(result).toBe(fileContent);
        expect(fs.readFileSync).toHaveBeenCalledWith(filePath, 'utf-8');
    })

    test('should throw an error for no file', () => {
        expect(() => utils.readFile()).toThrow('No file path to read');
    })

    test('should throws an error for no rovers', () => {
        expect(() => utils.printRoverPositions([])).toThrow('No process rovers avaliable');
    })

    test('should print rover final positions and direction', () => {
        const rover1 = { getFinalPosition: jest.fn().mockReturnValue('1 3 N') };
        const rover2 = { getFinalPosition: jest.fn().mockReturnValue('5 1 E') };

        console.log = jest.fn();

        utils.printRoverPositions([rover1, rover2]);

        expect(console.log).toHaveBeenCalledWith('1 3 N');
        expect(console.log).toHaveBeenCalledWith('5 1 E');
    })

    test('should throw an error for no file data', () => {
        expect(() => utils.processFile()).toThrow('No file data to process');
    })

    test('should process the file data and return rovers', () => {
        const fileData = '5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM';
        const rovers = utils.processFile(fileData);

        expect(rovers.length).toBe(2);

        expect(rovers[0].x).toBe(1);
        expect(rovers[0].y).toBe(3);
        expect(rovers[0].direction).toBe('N');
        expect(rovers[0].getFinalPosition()).toBe('1 3 N');

        expect(rovers[1].x).toBe(5);
        expect(rovers[1].y).toBe(1);
        expect(rovers[1].direction).toBe('E');
        expect(rovers[1].getFinalPosition()).toBe('5 1 E');
    });
})