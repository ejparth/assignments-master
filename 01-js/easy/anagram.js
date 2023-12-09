/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/


function isAnagram(str1, str2) {

  let lowerstr1 = str1.toLowerCase()
  let lowerstr2 = str2.toLowerCase()

  for (let i = 0; i < lowerstr1.length; i++) {
    const currentChar = lowerstr1.charAt(i);

    // Check if the current character is present in str2
    if (lowerstr2.indexOf(currentChar) === -1)  {
      // If any character is not found, return false
      return false;
    }

    // also check the lenth to ensure only the charachters present in str1 is only present in str2
    if ( lowerstr1.length != lowerstr2.length){
      return false;
    }

  }
  return true;

  }

module.exports = isAnagram;



