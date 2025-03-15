// Your code here
const isPowerOfTwo = (number) => {
    // Check if the number is less than or equal to 0
    if(number <= 0) {
        return false; // Not a power of two
    }
    // Keep dividing the number by 2 until it becomes 1
    while(number > 1) {
        if(number % 2 !== 0) {
            return false; // If at any point the number is not divisible by 2, it's not a power of two
        }
        number /= 2;
    }
    return true; // If the loop completes, the number is a power of two
};

// Don't change this line
module.exports = {
  isPowerOfTwo
};