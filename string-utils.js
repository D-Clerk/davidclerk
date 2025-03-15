function reverse(str) {
    // Reverse the string and return the reversed string.
  
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedString += str[i];
    }
    return reversedString;
  }
  
  
 

  function reverse(str) {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedString += str[i];
    }
    return reversedString;
  }
  
  function isPalindrome(str) {
    // A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., 'madam' or 'nurses run'.
    // Check if the string is a palindrome and return true if it is or false if it isn't.
  
    const reversedStr = reverse(str);
    return str === reversedStr;
  }
  


  // string-utils.js

function capitalizeWords(str) {
    // Split the string into words
    const words = str.split(" ");
    
    // Create a new array where each word is capitalized
    const capitalizedWords = words.map(word => {
      // Capitalize the first letter and keep the rest of the word as is
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
  
    // Join the words back into a single string and return
    return capitalizedWords.join(" ");
  }
  

  function toTitleCase(str) {
    // Title case is where the first letter of each word is capitalized apart from some words such as 'the', 'of', 'a', etc.
    // The first letter of the first word should always be capitalized.
    // The list of words to ignore can be found in the 'nonCapitalizedWords' array.\\\
    const nonCapitalizedWords = [
      "the",
      "of",
      "a",
      "and",
      "an",
      "or",
      "nor",
      "but",
      "is",
      "if",
      "then",
      "else",
      "when",
      "at",
      "from",
      "by",
      "on",
      "off",
      "for",
      "in",
      "out",
      "over",
      "to",
    ];
  
  
    // Split the string into words
    const words = str.split(" ");
  
    // Map through each word and apply title case rules
    const titleCasedWords = words.map((word, index) => {
      // If it's the first word or not a nonCapitalizedWord, capitalize it
      if (index === 0 || !nonCapitalizedWords.includes(word.toLowerCase())) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      } else {
        // Otherwise, leave it in lowercase
        return word.toLowerCase();
      }
    });
  
    // Join the words back into a single string and return
    return titleCasedWords.join(" ");
  }
  

  
  module.exports = { reverse, isPalindrome ,capitalizeWords, toTitleCase };
  