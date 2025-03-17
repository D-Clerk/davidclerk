function isEven(num) {

    let verdict;
    if (num % 2 === 0) {
        verdict = true;

    } else {
        verdict = false
    }
    return verdict

}

let myNum = 5

let checkEven = isEven(myNum);
console.log(`Is ${myNum} even? ${checkEven} ` );

module.exports = {isEven,checkEven};