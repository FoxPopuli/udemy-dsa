export const power = (base, exp) => {
    if (exp === 0) return 1;
    return base * power(base, exp - 1);
}

export const productOfArray = (arr) => {
    if (arr.length === 0) return 1;
    let myVar = arr.shift();
    return myVar * productOfArray(arr);
}
