
const assert = require('assert');

capitalizeFirstLetters = (str) => {
    let splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
 }

 assert.strictEqual(typeof capitalizeFirstLetters, 'function');

 assert.strictEqual(capitalizeFirstLetters.length, 1);

 assert.strictEqual(capitalizeFirstLetters('javascript'), 'Javascript');

 assert.strictEqual(capitalizeFirstLetters('i am learning tdd'), 'I Am Learning Tdd');

 assert.strictEqual(capitalizeFirstLetters('z'), 'Z');

 assert.strictEqual(capitalizeFirstLetters(''), '');