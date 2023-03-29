export const binarySearch = (arr, val) => {
    if (arr.length === 1 && arr[0] !== val) return -1;
    
    let ind = Math.floor((arr.length - 1)/2);

    if (arr[ind] === val) return ind;

    let newArr;
    if (arr[ind] < val) {
        newArr = arr.splice(ind)
    } else {
        newArr = arr.splice(0, ind);
    }

    binarySearch(newArr, val);

} 