const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverseWords(sentence) {
    let result = "";
    let word = "";

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === " ") {
            result += reverseWord(word) + " ";
            word = "";
        } else {
            word += sentence[i];
        }
    }

    result += reverseWord(word);
    return result;
}

function reverseWord(word) {
    let reversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }
    return reversed;
}

rl.question('Enter a sentence to reverse each word: ', (sentence) => {
    console.log('Reversed sentence:', reverseWords(sentence));
    rl.close();
});
