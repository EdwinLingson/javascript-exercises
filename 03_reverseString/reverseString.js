const reverseString = function(word) {

    const splitWords = word.split('');
    const revChars = splitWords.reverse();
    return revChars.join('')
};

// Do not edit below this line
module.exports = reverseString;
