export const countUniqueValues = (arr) => {
    let i = 0;
    let j = 1;

    while (j < arr.length) {
        if (arr[i] === arr[j]) {
            j++;
        } else {
            i++;
            arr[i] = arr[j];
            j++;
        }
    }

    arr.splice(i + 1);
    return arr.length;
}

export const test = (arr) => {
    const count = {};
    for (let value of arr) {
        count[value] = (count[value] || 0) + 1
    }

    let uniqueValues = 0;
    for (let key in count) {
        if (count[key] === 1) {
            uniqueValues++;
        }
    }

    return uniqueValues
}
