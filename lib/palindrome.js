export function palindrome(str) {
    if (typeof str !== 'string' || str.length === 0) {
      return false;
    }
    // Heimild: https://www.programiz.com/javascript/examples/palindrome
    const originalString = str.toLowerCase();
    const reverseString = originalString.split('').reverse().join('');
    return originalString === reverseString;
}