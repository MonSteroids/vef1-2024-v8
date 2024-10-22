
export function consonants(str) {
    // Ef ekki strengur skila 0
    if (typeof str !== 'string') {
      return 0;
    }
  
    const consonants = 'bBdDðÐfFgGhHjJkKlLmMnNpPrRsStTvVxXþÞ';
    let consonantsCount = 0;
    for (let i = 0; i < str.length; i++) {
      if (consonants.includes(str[i])) {
        consonantsCount += 1;
      }
    }
    return consonantsCount;
}