export function isPalindrome(s :string) {
    return s === s.split("").reverse().join("");
}