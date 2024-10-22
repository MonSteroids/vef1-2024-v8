import { longest } from './lib/longest.js';
import { shortest } from './lib/shortest.js';
import { reverse } from './lib/reverse.js';
import { palindrome } from './lib/palindrome.js';
import { consonants } from './lib/consonants.js';
import { vowels } from './lib/vowels.js';
import { splitOnWhitespace } from './lib/helpers.js';

/**
 * Sýnilausn á verkefni 8 í Vefforritun 1, 2024.
 * Byggir á sýnilausn á verkefni 7.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

const textarea = document.getElementById('string');
const outputElement = document.querySelector('.output');
const longestEl = document.querySelector('.longest');
const shortestEl = document.querySelector('.shortest');
const vowelsEl = document.querySelector('.vowels');
const consonantsEl = document.querySelector('.consonants');
const palindromeEl = document.querySelector('.palindrome');
const reversedEl = document.querySelector('.reversed');
const inputEl = document.querySelector('.input');
const greiningButton = document.getElementById('submit');

/**
 * 
 * @param {Element} el 
 */
function removeHidden(el) {
  el.classList.remove('hidden');
}

if (outputElement) {
  removeHidden(outputElement);
}

greiningButton.addEventListener('click', (e) => {
  e.preventDefault();

  const inputString = textarea.value;
  const words = splitOnWhitespace(inputString);

  // Fékk aðstoð frá chatGPt hérna.
  // OpenAI. (2024). ChatGPT (22. okt. útgáfa v2) [Risamállíkan]. https://chat.openai.com/chat

  inputEl.textContent = inputString;
  longestEl.textContent = longest(inputString);
  shortestEl.textContent = shortest(inputString);
  vowelsEl.textContent = vowels(inputString);
  consonantsEl.textContent = consonants(inputString);
  palindromeEl.textContent = palindrome(inputString);
  reversedEl.textContent = reverse(inputString);
});