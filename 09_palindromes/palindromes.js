const palindromes = function (word) {
    const replaced = word.replace(/[^a-z0-9]/gi, '').toLowerCase();
    // console.log(replaced);
    const reversedWord = replaced.split('').reverse().join('');
    if(replaced === reversedWord) return true;
    return false;
   
};
// Do not edit below this line
module.exports = palindromes;
