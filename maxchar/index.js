// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = {};
  
    let max = 0;
    let maxChar = '';
    
    for(let letter of str){
      if(!chars[letter]){
        chars[letter] = 1;
      }
      else {
        chars[letter]++;
      }
    }
    
    for (let letter in chars)    {
      if(chars[letter] > max) {
        max = chars[letter];
        maxChar = letter
      }
    }
  return maxChar;
}

module.exports = maxChar;
