// Find the longest sequence of unique characters in a string

// "Naive solution" (pretty sure it's actually O(1) since there's a finite number of unique alphanumeric characters)
export const longestSequenceNaive = (str) => {
    let arr = [];
    let highest = 0;

    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            if (!arr.includes(str[j])) {
                arr.push(str[j]);
            } else {
                if (arr.length > highest) {
                    highest = arr.length;
                }
                arr = [];
                break;
            }      
        }
    }

    return highest;
}

// Find the maximum sum of n consecutive digits in an array
const maxSum = (arr, n) => {
    if (arr.length < n) return null;

    let temp = 0;
    let max = 0;
    for (let i = 0; i < n; i++) {
        max += arr[i];
    }

    temp = max;

    for (let i = num; i < arr.length; i++) {
        temp -= (arr[i - num] + arr[i]);
        if (max < temp) max = temp;
    }

    return max;
}

const maxSubarraySum = (arr, n) => {
    if (n > arr.length) return null;

    let maxSum = 0;
    let temp = 0;
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }

    temp = maxSum
    for (let i = n; i < arr.length; i++) {
        temp = temp - arr[i - n] + arr[i]
        if (temp > maxSum) {
            maxSum = temp
        }
    }

    return maxSum
}
 

const minSubArrayLength = (arr, n) => {
    let sum = 0;

    let max = 0;
    while (sum <= n) {
        sum += arr[max];
        max++;

        if (max > arr.length - 1) return 0;
    }

    let temp = sum;
    for (let i = max; i < (arr.length - max); i++) {
        let j = i - max;

        temp = temp - arr[j] + arr[i];

        while (temp >= n) {
            temp -= arr[j]
            j++;
            max--;
        }
    } 
}