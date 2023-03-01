import {isPalindrome}  from './../src/taskpalindrome';

test('valid test palindrome', () => {
    
    const text = "ANA";

    //actual
    const actual = isPalindrome(text);

    //expected
    const expc = true;

    expect(actual).toBe(expc);
});


test('invalid test palindrome', () => {
    
    const text = "LANA";

    //actual
    const actual = isPalindrome(text);

    //expected
    const expc = false;

    expect(actual).toBe(expc);
});