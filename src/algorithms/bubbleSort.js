import { swap } from "./helpers";

// Time: Best O(n), average O(n^2), worst O(n^2)
// Space: O(1)
// Performs better than merge sort on nearly sorted data (kind of), similar to insertion sort (but slower)

export const bubbleSort = (arr) => {
    let swaps = 1;

    let passes = arr.length;
    while (swaps > 0) {
        swaps = 0;

        for (let i = 1; i < passes; i++) {
            if (arr[i] < arr[i - 1]) {
                swap(arr, i, i - 1);
                swaps++;
            }
        }
        passes--;
    }

    return arr;
}

const unsortedArr = [10, 2, 3, 4, 1, 3, 4, 1, 122, 4, 23, 95, 32];
bubbleSort(unsortedArr);
console.log(unsortedArr)
