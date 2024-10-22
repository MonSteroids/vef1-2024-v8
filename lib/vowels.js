export function vowels(str) {
    // Ef ekki strengur skila 0
    if (typeof str !== 'string') {
      return 0;
    }
  
    // Heimild: https://www.geeksforgeeks.org/how-to-get-a-number-of-vowels-in-a-string-in-javascript/
    const vowels = 'aAeEiIoOuUyYáÁéÉýÝúÚíÍóÓöÖæÆ';
    let vowelCount = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        vowelCount += 1;
      }
    }
    return vowelCount;
}