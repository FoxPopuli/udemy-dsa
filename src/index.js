import algTimer from "./algorithms/algTimer";
import {isAnagramBad, isAnagram, isSquares} from "./algorithms/freqCounter";
import {countUniqueValues, test} from "./algorithms/multiPointers";
import { longestSequenceNaive } from "./algorithms/slidingWindow";
import { power } from "./algorithms/recursion";
import { binarySearch } from "./algorithms/binarySearch";

const arr1 = [1, 2, 3, 4, 4, 4, 5, 6, 7, 7, 8, 8, 8, 9, 12, 10000];

const arr2 = arr1.map(item => item**2);

const str = "calculate"


const arr3 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(binarySearch(arr1, 7))

