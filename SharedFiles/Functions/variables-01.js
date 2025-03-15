let myName = 'David'

function greetings(name) {
    return `Greetings ${name}.`;
}

console.log('results: ' , greetings(myName));

module.exports = {myName,greetings}