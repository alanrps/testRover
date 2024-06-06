const Plateau = require('../src/plateau');

describe('Plateau', () => {
    let plateau;

    beforeAll(() => {
        plateau = new Plateau(5, 5);
    });

    test('should return true if the position is valid', () => {
        expect(plateau.isValidPosition(5, 5)).toBe(true);
    })

    test('should return false if the position is invalid', () => {
        expect(plateau.isValidPosition(6, 5)).toBe(false);
    })
})