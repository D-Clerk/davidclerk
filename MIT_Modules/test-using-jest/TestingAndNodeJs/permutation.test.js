const { getPermutations } = require("./permutation.js"); // Assuming the function is exported from a file

test('should generate all permutations of a string', () => {
    const inputString = 'abc';
    const result = getPermutations(inputString);
    const expectedResult = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];

    expect(result).toEqual(expectedResult);
});
