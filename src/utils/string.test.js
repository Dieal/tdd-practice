import {capitalize, reverseString} from './functions';

// Capitalize
test('Capitalize first character of a string', () => {
    expect(capitalize("helloo")).toEqual("Helloo");
})

// Reverse String
test('Reverse a string', () => {
    expect(reverseString("hello")).toEqual("olleh");
});

test('Reverse an empty string', () => {
    expect(reverseString("")).toEqual("");
});
