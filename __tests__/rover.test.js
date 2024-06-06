const Plateau = require('../src/plateau');
const Rover = require('../src/rover');
const { expect, test, describe, beforeAll } = require('@jest/globals');

describe('Rover', () => {
    let plateau;
    let rover;

    beforeAll(() => {
        plateau = new Plateau(5, 5);
    })

    beforeEach(() => {
        rover = new Rover(3, 3, 'E', plateau);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
    
    test('should spin the direction to the left', () => {
        rover.spinLeft();
        expect(rover.direction).toBe('N');
    })

    test('should spin the direction to the right', () => {
        rover.spinRight();
        expect(rover.direction).toBe('S');
    })

    test('should move forward in plateau', () => {
        rover.moveForward();
        expect(rover.x).toBe(4);
        expect(rover.y).toBe(3);
    })

    test('should throw an error for invalid position', () => {
        newRover = new Rover(5, 5, 'N', plateau);
        expect(() => newRover.moveForward()).toThrow('Position invalid, x: 5, y: 6');
    })

    test('should execute a series of movement instructions', () => {
        rover.runInstructions('MMRMMRMRRML');
        expect(rover.getFinalPosition()).toBe('5 1 N');
    })

    test('should throw an error for invalid instruction', () => {
        expect(() => rover.runInstructions('A')).toThrow('Instruction invalid A');
    })
})