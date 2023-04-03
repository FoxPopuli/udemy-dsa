import {algTimer} from "./algorithms/helpers";
import {isAnagramBad, isAnagram, isSquares} from "./algorithms/freqCounter";
import {countUniqueValues, test} from "./algorithms/multiPointers";
import { longestSequenceNaive } from "./algorithms/slidingWindow";
import { power } from "./algorithms/recursion";
import { binarySearch } from "./algorithms/binarySearch";
import { stringSearchNaive } from "./algorithms/stringSearch";
import { bubbleSort } from "./algorithms/bubbleSort";
import { selectionSort } from "./algorithms/selectionSort";


const arr1 = [1, 2, 3, 4, 4, 4, 5, 6, 7, 7, 8, 8, 8, 9, 12, 10000];

const arr2 = arr1.map(item => item**2);

const str = "calculate"


const arr3 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(binarySearch(arr1, 7))

const unsortedArr = [1, 2, 3, 4, 1, 3, 4, 1, 122, 4, 23, 95, 32];
console.log(bubbleSort(unsortedArr));