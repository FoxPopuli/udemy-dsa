export const stringSearchNaive = (str, substr) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === substr[0]) {
            for (let j = 0; j < substr.length; j++) {
                if (str[i + j] !== substr[j]) break;
                if (j === substr.length - 1) count++;
            }

        }
    }

    return count;
}

const str1 = 'uwu uwu uwu'
const pattern = 'uwu';

console.log(stringSearchNaive(str1, pattern));