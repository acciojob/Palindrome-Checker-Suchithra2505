// complete the given function

function palindrome(str){
const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Compare the normalized string with its reverse
  const reversedStr = normalizedStr.split('').reverse().join('');
  
  return normalizedStr === reversedStr;
}
module.exports = palindrome
