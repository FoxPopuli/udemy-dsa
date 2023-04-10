// Differs from comparison sort
// Can only sort lists of numbers
// Sorts numbers into 10 (in base 10) "buckets" based on the rightmost digit


// Time complexity
// best, average, worst = O(nk)
// n is number of numbers,
// k is the length of the numbers (aka word length)
// For sufficiently random data, k = log(n), making it just as good as merge sort, sometimes better (for a large amount of small numbers for example)


// Space complexity
// O(n + k)
 
const testArr = [12, 4, 12, 44, 5, 666, 77, 23];

// getDigit helper function
const getDigit = (num, pos) => {
    return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
}

const digitCount = (num) => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const mostDigits = (arr) => {
    let highest = -Infinity;
    arr.forEach(item => {
        let current = item.toString().length;
        if (current > highest) highest = current;
    } )
    return highest;
}

const radixReal = (arr) => {
    const most = mostDigits(arr);     // We need this many loops
    for (let i = 0; i < most; i++) {
        let mainArr = Array.from({length: 10}, () => []);
        arr.forEach(num => {
            mainArr[getDigit(num, i)].push(num);
        })
    }
    nums = [].concat(...mainArr);
}

const testNum = 1230;
