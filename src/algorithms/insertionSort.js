// Actually useful in some scenarios, worth knowing for practicality
// Decently fast at sorting nearly sorted data (better than merge sort)

// Also good for sorting a live stream of data into a sorted array (one pass to add a new value, others have to resort the whole array)

// Time: Best O(n), average O(n^2), worst O(n^2)
// Space: O(1)

// Worst case sorting a reverse order array

// gradually builds a sorted portion of the array
export const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = current;
    }
    return arr;
}

const testArr = [1, 2, 4, 1, 2, 4, 12, 5];
console.log(insertionSort(testArr))