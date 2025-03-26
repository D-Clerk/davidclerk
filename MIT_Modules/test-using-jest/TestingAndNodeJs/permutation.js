// permutation.js
function getPermutations(str) {
  if (str.length === 1) {
    return [str];
  }

  let perms = [];
  for (let i = 0; i < str.length; i++) {
    const remainingChars = str.slice(0, i) + str.slice(i + 1);
    const remainingPerms = getPermutations(remainingChars);

    for (let perm of remainingPerms) {
      perms.push(str[i] + perm);
    }
  }

  return perms;
}

module.exports = { getPermutations }; // Exporting the function



