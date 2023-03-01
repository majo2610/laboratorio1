
import {letters}  from './../src/taskletras';

test('letter ["H","E","L","L","O"]' , () => {
    
    const text = "HELLO";

    //actual
    const actual = letters(text);

    //expected
    const expc = ["H","E","L","L","O"];

    expect(actual).toBe(expc);
});