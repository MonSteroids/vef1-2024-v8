export function longest(str) {
    if (typeof str !== 'string') {
      return null;
    }
  
    if (str === '') {
      return '';
    }
  
    const strSplit = str.split(' ');
    let longestWord = '';
    for (let i = 0; i < strSplit.length; i++) {
      if (strSplit[i].length > longestWord.length) {
        longestWord = strSplit[i];
      }
    }
    return longestWord;
}