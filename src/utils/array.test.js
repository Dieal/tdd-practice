import {analyzeArray} from './functions';

test('Array Analyze', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
})

test('Array Analyze: empty array', () => {
    expect(analyzeArray([])).toEqual({
        average: 0,
        min: 0,
        max: 0,
        length: 0,
    });
})
