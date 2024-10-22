import { isString } from './helpers.js';

export function reverse(str) {
  if (typeof str !== 'string') {
    return null;
  }

  if (str === '') {
    return '';
  }

  if (isString(str)) {
    const split = str.split('');
    const reversed = split.reverse()

    return reversed.join('')
  }
  return null;
}