export const algTimer = (alg) => {
    const t1 = performance.now()
    alg;
    const t2 = performance.now();

    console.log((t2 - t1).toFixed(12));
}

export const swap = (arr, ind1, ind2) => {
    [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]; 
}

