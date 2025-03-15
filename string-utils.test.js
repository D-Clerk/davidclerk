// string-utils.test.js
const { reverse, isPalindrome } = require("./string-utils");

describe("String Utilities", () => {
  test("The function 'reverse' should reverse a string", () => {
    expect(reverse("hello")).toBe("olleh");
    expect(reverse("racecar")).toBe("racecar");
    expect(reverse("a")).toBe("a");
    expect(reverse("123")).toBe("321");
  });

  test("The function 'isPalindrome' should check if a string is a palindrome", () => {
    // Test case for palindromes
    expect(isPalindrome("madam")).toBe(true);
    expect(isPalindrome("racecar")).toBe(true);

    // Test case for non-palindromes
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("123")).toBe(false);
  });
});

const { capitalizeWords } = require("./string-utils");

describe("String Utilities", () => {
  test("The function 'capitalizeWords' should capitalize the first letter of each word", () => {
    // Test case: Capitalize multiple words
    expect(capitalizeWords("hello world")).toBe("Hello World");

    // Test case: Capitalize each word in a longer sentence
    expect(capitalizeWords("the quick brown fox jumps over the lazy dog")).toBe(
      "The Quick Brown Fox Jumps Over The Lazy Dog"
    );

    // Test case: Single word capitalization
    expect(capitalizeWords("a")).toBe("A");

    // Test case: Numeric string (should remain unchanged)
    expect(capitalizeWords("123")).toBe("123");

    // Test case: Empty string (should return an empty string)
    expect(capitalizeWords("")).toBe("");
  });
});
const { toTitleCase } = require("./string-utils");

describe("String Utilities", () => {
  test("The function 'toTitleCase' should convert the string to title case", () => {
    // Test case: Basic sentence
    expect(toTitleCase("hello world")).toBe("Hello World");

    // Test case: Sentence with small words like 'the', 'and', 'of'
    expect(toTitleCase("the quick brown fox jumps over the lazy dog")).toBe(
      "The Quick Brown Fox Jumps over the Lazy Dog"
    );

    // Test case: Single word sentence
    expect(toTitleCase("a")).toBe("A");

    // Test case: Numeric string (should remain unchanged)
    expect(toTitleCase("123")).toBe("123");
  });
});
