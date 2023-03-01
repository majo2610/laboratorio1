import {biggestNumberInArray}  from './../src/tasknromayor';

test('numero mayor in this array [2,88,65,17,95,39]', () => {
    
    const array = [2,88,65,17,95,39];

    //actual
    const actual = biggestNumberInArray(array);

    //expected
    const expc = 95;

    expect(actual).toBe(expc);
});

test('numero mayor in this array [2,88,65,1,150,1000]', () => {
    
    const array = [2,88,65,1,150,1000];

    //actual
    const actual = biggestNumberInArray(array);

    //expected
    const expc = 1000;

    expect(actual).toBe(expc);
});
