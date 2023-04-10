import { swap } from "./helpers";
// Pivot / partition helper

// Best and average case: O(nlog(n))
// Worst case: O(n^2)

const pivot = (arr, start = 0, end = arr.length - 1) => {
    const pivotPoint = arr[start];
    let index = start
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivotPoint) {
            index++;
            swap(arr, i, index)
        }
    }

    swap(arr, 0, index);
    return index;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {

    if (left < right) {
        let pivot = pivot(arr, left, right);
        // left
        quickSort(arr, left, pivot - 1);
        // right
        quickSort(arr, pivot + 1, right)
    
    }

    return arr;
}