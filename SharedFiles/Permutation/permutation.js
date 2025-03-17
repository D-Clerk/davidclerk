// permutation.js (Web Worker)

onmessage = function(event) {
  const str = event.data;
  const permutations = getPermutations(str);
  postMessage(permutations);  // Send the permutations back to the main thread
};

// Function to generate all permutations of a string
function getPermutations(str) {
  if (str.length === 1) {
    return [str];
  }

  let perms = [];
  for (let i = 0; i < str.length; i++) {
    const remainingChars = str.slice(0, i) + str.slice(i + 1);
    const remainingPerms = getPermutations(remainingChars);

    // Add the character at index i to the front of each permutation
    for (let perm of remainingPerms) {
      perms.push(str[i] + perm);
    }
  }

  return perms;
}
