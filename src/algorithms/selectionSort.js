import { swap } from "./helpers";

const testArr = [1, 2, 3, 1, 2, 54, 23, 6, 1, 67];

// Works like bubble sort in reverse. Loop through, find minimum, swap it with i, increment i, repeat
// O(n^2)
// Only better than bubble sort if you need to minimize the number of swaps, since we only do n swaps 
// ie minimize how often we write to memory, super uncommon scenario

export const selectionSort = (arr) => {
    let i = 0;
    while(i < arr.length) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        // Optimization conditional 
        if (i !== min) swap(arr, i, min);
        i++;

    }
    
    return arr;
}

console.log('Original arr: ');
console.log(testArr);

console.log('Selection Sort: ');
console.log(selectionSort(testArr));