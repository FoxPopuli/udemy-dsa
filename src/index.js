import algTimer from "./algorithms/algTimer";
import {isAnagramBad, isAnagram, isSquares} from "./algorithms/freqCounter";
import {countUniqueValues, test} from "./algorithms/multiPointers";
import { longestSequenceNaive } from "./algorithms/slidingWindow";
import { binarySearch } from "./algorithms/divideAndConquor";

const arr1 = [1, 2, 3, 4, 4, 4, 5, 6, 7, 7, 8, 8, 8, 9, 12, 10000];
console.log(countUniqueValues(arr1));
console.log(test(arr1))

const arr2 = arr1.map(item => item**2);
console.log(isSquares(arr1, arr2));

const str = "calculate"

console.log(longestSequenceNaive(str))

const arr3 = [0, 1, 2, 3, 4, 5, 6, 7, 8];

console.log(binarySearch(arr3, 1));