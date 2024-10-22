export function shortest(str) {
    if (typeof str !== 'string') {
      return null;
    }
  
    if (str === '') {
      return '';
    }
  
    const strSplit = str.split(' ');
    // Byrja á fyrsta orðinu.
    let shortestWord = strSplit[0];
    // Ef orð er minna en fyrsta orð, skipta út.
    for (let i = 1; i < strSplit.length; i++) {
      if (strSplit[i].length < shortestWord.length) {
        shortestWord = strSplit[i];
      }
    }
    return shortestWord;
}