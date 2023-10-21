import {calculator} from './functions';

// Calculator
test('Calculator: add operation', () => {
    expect(calculator.add(25, 6)).toBe(31);
});

test('Calculator: subtract operation (positive result)', () => {
    expect(calculator.subtract(20, 9)).toBe(11);
});

test('Calculator: subtract operation (negative result)', () => {
    expect(calculator.subtract(9, 13)).toBe(-4);
});

test('Calculator: multiply operation', () => {
    expect(calculator.multiply(10, 3)).toBe(30);
});

test('Calculator: multiply by zero', () => {
    expect(calculator.multiply(10, 0)).toBe(0);
});

test('Calculator: divide operation', () => {
    expect(calculator.divide(40, 2)).toBe(20);
});

test('Calculator: divide by zero', () => {
    expect(() => calculator.divide(20, 0)).toThrow("You can't divide by zero!");
});
