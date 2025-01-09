const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sortArrayDescending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

rl.question('Enter an array of numbers separated by spaces to sort in descending order: ', (inputArray) => {
    const arr = inputArray.split(' ').map(Number);
    console.log('Sorted array in descending order:', sortArrayDescending(arr));
    rl.close(); 
});
