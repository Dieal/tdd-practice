import {caesarChiper} from './functions';

test('Caesar: first example', () => {
    expect(caesarChiper("Hello", 1)).toEqual("Ifmmp");
});

test('Caesar: second example', () => {
    expect(caesarChiper("He is the zar.", 5)).toEqual("Mj nx ymj efw.");
});

test('Caesar: blank string', () => {
    expect(caesarChiper("", 5)).toEqual("");
});
