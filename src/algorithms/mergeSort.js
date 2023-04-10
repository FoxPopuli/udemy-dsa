// Part 1: Merging Sorted Arrays

// Helper function runs in O(n + m) time and space complexity
// Recursive function is O(log(n))
// Overall time complexity: O(nlog(n))
// Space complexity: O(n)
// Classic multi-pointers pattern



// using while (true)
const mergeBad = (arr1, arr2) => {
    const merged = [];
    let i = 0;
    let j = 0;

    while (true) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i])
            i++
        } else {
            merged.push(arr2[j])
            j++
        }

        if (i === arr1.length - 1) {
            merged.push(arr2.slice(j));
            break;
        }

        if (j === arr2.length - 1) {
            merged.push(arr1.slice(i))
            break;
        } 
    }

    return merged;
}

// not using while (true)

export const merge = (arr1, arr2) => {
    const merged = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    let diff = arr1.length - arr2.length;

    if (diff > 0) {
        merged.push(...arr1.slice(i));
    } else if (diff < 0) {
        merged.push(...arr2.slice(j));
    }

    return merged;
}



console.log('merge:')
console.log(merge([1, 2, 3, 4, 10, 20, 21, 31, 41], [1, 1, 1, 1, 1, 1, 1, 12, 12, 15, 17, 19]));

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;    // Base case

    const mid = Math.floor(arr.length / 2)
    const right = mergeSort(arr.slice(mid));
    const left = mergeSort(arr.slice(0, mid));

    return merge(left, right);


}