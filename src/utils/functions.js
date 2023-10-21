// String utils
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1, str.length);
};

function reverseString(str) {
    const charArray = str.split('');
    const result = charArray.reduce((prev, curr) => curr + prev, '');
    return result;
};

// Caesar Chiper
function caesarChiper(str, shiftFactor) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return str.split('').map((char) => {
        if (char === " " || char === "." || char === ",") return char;
        const charIndex = alphabet.indexOf(char.toLowerCase());
        const indexSum = charIndex + shiftFactor;
        const newCharIndex = indexSum <= 25 ? indexSum : indexSum - alphabet.length;
        const shiftedChar = alphabet.charAt(newCharIndex);
        return (char === char.toUpperCase()) ? shiftedChar.toUpperCase() : shiftedChar;
    }).join('');
};

// Array Stats
function analyzeArray(array) {
    const obj = {};
    let indexMax = 0;
    let indexMin = 0;
    let sum = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[indexMax]) {
            indexMax = i;
        }
        if (array[i] < array[indexMin]) {
            indexMin = i;
        }

        sum += array[i];
    }

    obj.average = array.length > 0 ? Math.round(sum / array.length) : 0;
    obj.min = array.length > 0 ? array[indexMin] : 0;
    obj.max = array.length > 0 ? array[indexMax] : 0;
    obj.length = array.length;

    return obj;
};

// Calculator
const calculator = {
    add: (a, b) => (a + b),
    subtract: (a, b) => (a - b),
    multiply: (a, b) => (a * b),
    divide: (a, b) => {
        if (b === 0) {
            throw new Error("You can't divide by zero!");
        } else {
            return a / b;
        }
    }
}

export {capitalize, reverseString, calculator, caesarChiper, analyzeArray};
