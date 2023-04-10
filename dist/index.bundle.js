/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/algorithms/binarySearch.js":
/*!****************************************!*\
  !*** ./src/algorithms/binarySearch.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "binarySearch": () => (/* binding */ binarySearch)
/* harmony export */ });
const binarySearch = (arr, val) => {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2)

    while (arr[mid] !== val) {

        if (start >= end) return -1;
        if (arr[mid] < val) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }

        mid = Math.floor((start + end) / 2);
    }

    return mid;

}

/***/ }),

/***/ "./src/algorithms/bubbleSort.js":
/*!**************************************!*\
  !*** ./src/algorithms/bubbleSort.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bubbleSort": () => (/* binding */ bubbleSort)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/algorithms/helpers.js");


// Time: Best O(n), average O(n^2), worst O(n^2)
// Space: O(1)
// Performs better than merge sort on nearly sorted data (kind of), similar to insertion sort (but slower)

const bubbleSort = (arr) => {
    let swaps = 1;

    let passes = arr.length;
    while (swaps > 0) {
        swaps = 0;

        for (let i = 1; i < passes; i++) {
            if (arr[i] < arr[i - 1]) {
                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.swap)(arr, i, i - 1);
                swaps++;
            }
        }
        passes--;
    }

    return arr;
}

const unsortedArr = [10, 2, 3, 4, 1, 3, 4, 1, 122, 4, 23, 95, 32];
bubbleSort(unsortedArr);
console.log(unsortedArr)


/***/ }),

/***/ "./src/algorithms/freqCounter.js":
/*!***************************************!*\
  !*** ./src/algorithms/freqCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isAnagram": () => (/* binding */ isAnagram),
/* harmony export */   "isAnagramBad": () => (/* binding */ isAnagramBad),
/* harmony export */   "isSquares": () => (/* binding */ isSquares)
/* harmony export */ });


// Anagrams O(n^2)
const isAnagramBad = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    for (let letter1 of str1) {
        if (!str2.includes(letter1)) {
            return false;
        } 
    }  

    return true;
}


// Anagrams O(n)
const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    
    const count1 = {};
    const count2 = {};

    for (let val1 of str1) {
        count1[val1] = (count1[val1] || 0) + 1; // if key exists, increment it by 1. If not, initialize to zero and increment by 1
    }

    for (let val2 of str2) {
        count2[val2] = (count2[val2] || 0) + 1;
    }

    for (let key in count1) {
        if (!count2.hasOwnProperty(key)) {
            return false;
        }

        if (count2[key] !== count1[key]) {
            return false;
        }

    }

    return true;
}

// Uses the frequency counter pattern to determine if one array contains only squares of another array
const isSquares = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;


    const count1 = {}
    const count2 = {}

    for (let num of arr1) {
        count1[num] = (count1[num] || 0) + 1;
    }

    for (let num of arr2) {
        count2[num] = (count2[num] || 0) + 1;
    }

    for (let key in count1) {
        if (!count2.hasOwnProperty(key**2)) return false;
    }
    
    return true;

}


// Given two positive integers find if the frequences of each digit are the same

const sameFrequency = (n1, n2) => {
    const arr1 = n1.toString().split('');
    const arr2 = n2.toString().split('');

    if (arr1.length !== arr2.length) return false;

    const count1 = {};
    const count2 = {};

    for (let num of arr1) {
        count1[num] = (count1[num] || 0) + 1;
    }

    for (let num of arr2) {
        count2[num] = (count2[num] || 0) + 1;
    }

    for (let key in count1) {
        if (count1[key] !== count2[key]) return false;
    }

    return true;
}



// Finds if any arguments are dulplicates (freqCounter)

const areThereDups = (...args) => {
    const count = {}
    for (let arg of args) {
        count[arg] = (count[arg] || 0) + 1;
    }

    for (let key in count) {
        if (count[key] > 1) {
            return true
        }
    };

    return false;
}


/***/ }),

/***/ "./src/algorithms/helpers.js":
/*!***********************************!*\
  !*** ./src/algorithms/helpers.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "algTimer": () => (/* binding */ algTimer),
/* harmony export */   "swap": () => (/* binding */ swap)
/* harmony export */ });
const algTimer = (alg) => {
    const t1 = performance.now()
    alg;
    const t2 = performance.now();

    console.log((t2 - t1).toFixed(12));
}

const swap = (arr, ind1, ind2) => {
    [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]; 
}




/***/ }),

/***/ "./src/algorithms/insertionSort.js":
/*!*****************************************!*\
  !*** ./src/algorithms/insertionSort.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "insertionSort": () => (/* binding */ insertionSort)
/* harmony export */ });
// Actually useful in some scenarios, worth knowing for practicality
// Decently fast at sorting nearly sorted data (better than merge sort)

// Also good for sorting a live stream of data into a sorted array (one pass to add a new value, others have to resort the whole array)

// Time: Best O(n), average O(n^2), worst O(n^2)
// Space: O(1)

// Worst case sorting a reverse order array

// gradually builds a sorted portion of the array
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = current;
    }
    return arr;
}

const testArr = [1, 2, 4, 1, 2, 4, 12, 5];
console.log(insertionSort(testArr))

/***/ }),

/***/ "./src/algorithms/mergeSort.js":
/*!*************************************!*\
  !*** ./src/algorithms/mergeSort.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "merge": () => (/* binding */ merge)
/* harmony export */ });
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

const merge = (arr1, arr2) => {
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

/***/ }),

/***/ "./src/algorithms/multiPointers.js":
/*!*****************************************!*\
  !*** ./src/algorithms/multiPointers.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countUniqueValues": () => (/* binding */ countUniqueValues),
/* harmony export */   "test": () => (/* binding */ test)
/* harmony export */ });
const countUniqueValues = (arr) => {
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

const test = (arr) => {
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

// Finds if any arguments are dulplicates (multiPointers)

const areThereDups = (...args) => {
    // I get this now. Relies on the principle if A = B and B = C then A = C, except the inverse
    let i = 0;
    let j = 1;


    while( j < args.length ) {
        if (args[i] === args[j]) {
            return true;
        } else {
            j++
            i++
        }
    }
}

// Determine whether a pair in the argument array averages to the argument average


const containsAverage = (arr, av) => {
    let i = 0;
    let j = arr.length;

    while (j !== i) {

        if ((arr[j] + arr[i])/2 === av) return true;

        if ((arr[i] + arr[j])/2  < av) {
            i++;
        } else {
            j--;
        }
    }

    return false;
}

const isSubsequence = (str1, str2) => {
    let i = 0;
    let j = 0;

    while ( i < str1.length) {
        if (str1[i] === str2[j]) {
            i++;
            j++;
        } else {
            j++;
        }

        if (j > str2.length) return false;
    }

    return true;

}

/***/ }),

/***/ "./src/algorithms/recursion.js":
/*!*************************************!*\
  !*** ./src/algorithms/recursion.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "power": () => (/* binding */ power),
/* harmony export */   "productOfArray": () => (/* binding */ productOfArray)
/* harmony export */ });
const power = (base, exp) => {
    if (exp === 0) return 1;
    return base * power(base, exp - 1);
}

const productOfArray = (arr) => {
    if (arr.length === 0) return 1;
    let myVar = arr.shift();
    return myVar * productOfArray(arr);
}


/***/ }),

/***/ "./src/algorithms/selectionSort.js":
/*!*****************************************!*\
  !*** ./src/algorithms/selectionSort.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectionSort": () => (/* binding */ selectionSort)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/algorithms/helpers.js");


const testArr = [1, 2, 3, 1, 2, 54, 23, 6, 1, 67];

// Works like bubble sort in reverse. Loop through, find minimum, swap it with i, increment i, repeat
// Time: Best, worst and average O(n^2)
// Space: O(1);
// Only better than bubble sort if you need to minimize the number of swaps, since we only do n swaps 
// ie minimize how often we write to memory, super uncommon scenario
// Sucks pretty hard, almost no reason to use it

const selectionSort = (arr) => {
    let i = 0;
    while(i < arr.length) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        // Optimization conditional 
        if (i !== min) (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.swap)(arr, i, min);
        i++;

    }
    
    return arr;
}

console.log('Original arr: ');
console.log(testArr);

console.log('Selection Sort: ');
console.log(selectionSort(testArr));

/***/ }),

/***/ "./src/algorithms/slidingWindow.js":
/*!*****************************************!*\
  !*** ./src/algorithms/slidingWindow.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "longestSequenceNaive": () => (/* binding */ longestSequenceNaive)
/* harmony export */ });
// Find the longest sequence of unique characters in a string

// "Naive solution" (pretty sure it's actually O(1) since there's a finite number of unique alphanumeric characters)
const longestSequenceNaive = (str) => {
    let arr = [];
    let highest = 0;

    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            if (!arr.includes(str[j])) {
                arr.push(str[j]);
            } else {
                if (arr.length > highest) {
                    highest = arr.length;
                }
                arr = [];
                break;
            }      
        }
    }

    return highest;
}

// Find the maximum sum of n consecutive digits in an array
const maxSum = (arr, n) => {
    if (arr.length < n) return null;

    let temp = 0;
    let max = 0;
    for (let i = 0; i < n; i++) {
        max += arr[i];
    }

    temp = max;

    for (let i = num; i < arr.length; i++) {
        temp -= (arr[i - num] + arr[i]);
        if (max < temp) max = temp;
    }

    return max;
}

const maxSubarraySum = (arr, n) => {
    if (n > arr.length) return null;

    let maxSum = 0;
    let temp = 0;
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }

    temp = maxSum
    for (let i = n; i < arr.length; i++) {
        temp = temp - arr[i - n] + arr[i]
        if (temp > maxSum) {
            maxSum = temp
        }
    }

    return maxSum
}
 

const minSubArrayLength = (arr, n) => {
    let sum = 0;

    let max = 0;
    while (sum <= n) {
        sum += arr[max];
        max++;

        if (max > arr.length - 1) return 0;
    }

    let temp = sum;
    for (let i = max; i < (arr.length - max); i++) {
        let j = i - max;

        temp = temp - arr[j] + arr[i];

        while (temp >= n) {
            temp -= arr[j]
            j++;
            max--;
        }
    } 
}

/***/ }),

/***/ "./src/algorithms/stringSearch.js":
/*!****************************************!*\
  !*** ./src/algorithms/stringSearch.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stringSearchNaive": () => (/* binding */ stringSearchNaive)
/* harmony export */ });
const stringSearchNaive = (str, substr) => {
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _algorithms_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./algorithms/helpers */ "./src/algorithms/helpers.js");
/* harmony import */ var _algorithms_freqCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./algorithms/freqCounter */ "./src/algorithms/freqCounter.js");
/* harmony import */ var _algorithms_multiPointers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./algorithms/multiPointers */ "./src/algorithms/multiPointers.js");
/* harmony import */ var _algorithms_slidingWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./algorithms/slidingWindow */ "./src/algorithms/slidingWindow.js");
/* harmony import */ var _algorithms_recursion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./algorithms/recursion */ "./src/algorithms/recursion.js");
/* harmony import */ var _algorithms_binarySearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./algorithms/binarySearch */ "./src/algorithms/binarySearch.js");
/* harmony import */ var _algorithms_stringSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./algorithms/stringSearch */ "./src/algorithms/stringSearch.js");
/* harmony import */ var _algorithms_bubbleSort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./algorithms/bubbleSort */ "./src/algorithms/bubbleSort.js");
/* harmony import */ var _algorithms_selectionSort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./algorithms/selectionSort */ "./src/algorithms/selectionSort.js");
/* harmony import */ var _algorithms_insertionSort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./algorithms/insertionSort */ "./src/algorithms/insertionSort.js");
/* harmony import */ var _algorithms_mergeSort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./algorithms/mergeSort */ "./src/algorithms/mergeSort.js");












const arr1 = [1, 2, 3, 4, 4, 4, 5, 6, 7, 7, 8, 8, 8, 9, 12, 10000];

const arr2 = arr1.map(item => item**2);

const str = "calculate"


const arr3 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log((0,_algorithms_binarySearch__WEBPACK_IMPORTED_MODULE_5__.binarySearch)(arr1, 7))

const unsortedArr = [1, 2, 3, 4, 1, 3, 4, 1, 122, 4, 23, 95, 32];
console.log((0,_algorithms_bubbleSort__WEBPACK_IMPORTED_MODULE_7__.bubbleSort)(unsortedArr));



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJpQzs7QUFFakM7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixZQUFZO0FBQ3BDO0FBQ0EsZ0JBQWdCLDhDQUFJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSE87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ087QUFDUCxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0EsNEJBQTRCLDRCQUE0QjtBQUN4RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDOztBQUV4QztBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRk87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUZPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUaUM7O0FBRWpDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsOENBQUk7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDLHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBOztBQUVBOztBQUVBLHNCQUFzQixnQkFBZ0I7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHdCQUF3QjtBQUM5Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN4Rk87QUFDUDtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQSw0QkFBNEIsbUJBQW1CO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7O1VDbEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjhDO0FBQzhCO0FBQ1Q7QUFDRDtBQUNuQjtBQUNVO0FBQ0s7QUFDVDtBQUNNO0FBQ0E7QUFDM0I7O0FBRWhDOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBLFlBQVksc0VBQVk7O0FBRXhCO0FBQ0EsWUFBWSxrRUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3VkZW15LWRzYS8uL3NyYy9hbGdvcml0aG1zL2JpbmFyeVNlYXJjaC5qcyIsIndlYnBhY2s6Ly91ZGVteS1kc2EvLi9zcmMvYWxnb3JpdGhtcy9idWJibGVTb3J0LmpzIiwid2VicGFjazovL3VkZW15LWRzYS8uL3NyYy9hbGdvcml0aG1zL2ZyZXFDb3VudGVyLmpzIiwid2VicGFjazovL3VkZW15LWRzYS8uL3NyYy9hbGdvcml0aG1zL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vdWRlbXktZHNhLy4vc3JjL2FsZ29yaXRobXMvaW5zZXJ0aW9uU29ydC5qcyIsIndlYnBhY2s6Ly91ZGVteS1kc2EvLi9zcmMvYWxnb3JpdGhtcy9tZXJnZVNvcnQuanMiLCJ3ZWJwYWNrOi8vdWRlbXktZHNhLy4vc3JjL2FsZ29yaXRobXMvbXVsdGlQb2ludGVycy5qcyIsIndlYnBhY2s6Ly91ZGVteS1kc2EvLi9zcmMvYWxnb3JpdGhtcy9yZWN1cnNpb24uanMiLCJ3ZWJwYWNrOi8vdWRlbXktZHNhLy4vc3JjL2FsZ29yaXRobXMvc2VsZWN0aW9uU29ydC5qcyIsIndlYnBhY2s6Ly91ZGVteS1kc2EvLi9zcmMvYWxnb3JpdGhtcy9zbGlkaW5nV2luZG93LmpzIiwid2VicGFjazovL3VkZW15LWRzYS8uL3NyYy9hbGdvcml0aG1zL3N0cmluZ1NlYXJjaC5qcyIsIndlYnBhY2s6Ly91ZGVteS1kc2Evd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdWRlbXktZHNhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly91ZGVteS1kc2Evd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly91ZGVteS1kc2Evd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91ZGVteS1kc2EvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGJpbmFyeVNlYXJjaCA9IChhcnIsIHZhbCkgPT4ge1xuICAgIGxldCBzdGFydCA9IDA7XG4gICAgbGV0IGVuZCA9IGFyci5sZW5ndGggLSAxO1xuICAgIGxldCBtaWQgPSBNYXRoLmZsb29yKChzdGFydCArIGVuZCkgLyAyKVxuXG4gICAgd2hpbGUgKGFyclttaWRdICE9PSB2YWwpIHtcblxuICAgICAgICBpZiAoc3RhcnQgPj0gZW5kKSByZXR1cm4gLTE7XG4gICAgICAgIGlmIChhcnJbbWlkXSA8IHZhbCkge1xuICAgICAgICAgICAgc3RhcnQgPSBtaWQgKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW5kID0gbWlkIC0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1pZCA9IE1hdGguZmxvb3IoKHN0YXJ0ICsgZW5kKSAvIDIpO1xuICAgIH1cblxuICAgIHJldHVybiBtaWQ7XG5cbn0iLCJpbXBvcnQgeyBzd2FwIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xuXG4vLyBUaW1lOiBCZXN0IE8obiksIGF2ZXJhZ2UgTyhuXjIpLCB3b3JzdCBPKG5eMilcbi8vIFNwYWNlOiBPKDEpXG4vLyBQZXJmb3JtcyBiZXR0ZXIgdGhhbiBtZXJnZSBzb3J0IG9uIG5lYXJseSBzb3J0ZWQgZGF0YSAoa2luZCBvZiksIHNpbWlsYXIgdG8gaW5zZXJ0aW9uIHNvcnQgKGJ1dCBzbG93ZXIpXG5cbmV4cG9ydCBjb25zdCBidWJibGVTb3J0ID0gKGFycikgPT4ge1xuICAgIGxldCBzd2FwcyA9IDE7XG5cbiAgICBsZXQgcGFzc2VzID0gYXJyLmxlbmd0aDtcbiAgICB3aGlsZSAoc3dhcHMgPiAwKSB7XG4gICAgICAgIHN3YXBzID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBhc3NlczsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYXJyW2ldIDwgYXJyW2kgLSAxXSkge1xuICAgICAgICAgICAgICAgIHN3YXAoYXJyLCBpLCBpIC0gMSk7XG4gICAgICAgICAgICAgICAgc3dhcHMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwYXNzZXMtLTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyO1xufVxuXG5jb25zdCB1bnNvcnRlZEFyciA9IFsxMCwgMiwgMywgNCwgMSwgMywgNCwgMSwgMTIyLCA0LCAyMywgOTUsIDMyXTtcbmJ1YmJsZVNvcnQodW5zb3J0ZWRBcnIpO1xuY29uc29sZS5sb2codW5zb3J0ZWRBcnIpXG4iLCJcblxuLy8gQW5hZ3JhbXMgTyhuXjIpXG5leHBvcnQgY29uc3QgaXNBbmFncmFtQmFkID0gKHN0cjEsIHN0cjIpID0+IHtcbiAgICBpZiAoc3RyMS5sZW5ndGggIT09IHN0cjIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBsZXR0ZXIxIG9mIHN0cjEpIHtcbiAgICAgICAgaWYgKCFzdHIyLmluY2x1ZGVzKGxldHRlcjEpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gXG4gICAgfSAgXG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuXG4vLyBBbmFncmFtcyBPKG4pXG5leHBvcnQgY29uc3QgaXNBbmFncmFtID0gKHN0cjEsIHN0cjIpID0+IHtcbiAgICBpZiAoc3RyMS5sZW5ndGggIT09IHN0cjIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgXG4gICAgY29uc3QgY291bnQxID0ge307XG4gICAgY29uc3QgY291bnQyID0ge307XG5cbiAgICBmb3IgKGxldCB2YWwxIG9mIHN0cjEpIHtcbiAgICAgICAgY291bnQxW3ZhbDFdID0gKGNvdW50MVt2YWwxXSB8fCAwKSArIDE7IC8vIGlmIGtleSBleGlzdHMsIGluY3JlbWVudCBpdCBieSAxLiBJZiBub3QsIGluaXRpYWxpemUgdG8gemVybyBhbmQgaW5jcmVtZW50IGJ5IDFcbiAgICB9XG5cbiAgICBmb3IgKGxldCB2YWwyIG9mIHN0cjIpIHtcbiAgICAgICAgY291bnQyW3ZhbDJdID0gKGNvdW50Mlt2YWwyXSB8fCAwKSArIDE7XG4gICAgfVxuXG4gICAgZm9yIChsZXQga2V5IGluIGNvdW50MSkge1xuICAgICAgICBpZiAoIWNvdW50Mi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY291bnQyW2tleV0gIT09IGNvdW50MVtrZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufVxuXG4vLyBVc2VzIHRoZSBmcmVxdWVuY3kgY291bnRlciBwYXR0ZXJuIHRvIGRldGVybWluZSBpZiBvbmUgYXJyYXkgY29udGFpbnMgb25seSBzcXVhcmVzIG9mIGFub3RoZXIgYXJyYXlcbmV4cG9ydCBjb25zdCBpc1NxdWFyZXMgPSAoYXJyMSwgYXJyMikgPT4ge1xuICAgIGlmIChhcnIxLmxlbmd0aCAhPT0gYXJyMi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuXG4gICAgY29uc3QgY291bnQxID0ge31cbiAgICBjb25zdCBjb3VudDIgPSB7fVxuXG4gICAgZm9yIChsZXQgbnVtIG9mIGFycjEpIHtcbiAgICAgICAgY291bnQxW251bV0gPSAoY291bnQxW251bV0gfHwgMCkgKyAxO1xuICAgIH1cblxuICAgIGZvciAobGV0IG51bSBvZiBhcnIyKSB7XG4gICAgICAgIGNvdW50MltudW1dID0gKGNvdW50MltudW1dIHx8IDApICsgMTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gY291bnQxKSB7XG4gICAgICAgIGlmICghY291bnQyLmhhc093blByb3BlcnR5KGtleSoqMikpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRydWU7XG5cbn1cblxuXG4vLyBHaXZlbiB0d28gcG9zaXRpdmUgaW50ZWdlcnMgZmluZCBpZiB0aGUgZnJlcXVlbmNlcyBvZiBlYWNoIGRpZ2l0IGFyZSB0aGUgc2FtZVxuXG5jb25zdCBzYW1lRnJlcXVlbmN5ID0gKG4xLCBuMikgPT4ge1xuICAgIGNvbnN0IGFycjEgPSBuMS50b1N0cmluZygpLnNwbGl0KCcnKTtcbiAgICBjb25zdCBhcnIyID0gbjIudG9TdHJpbmcoKS5zcGxpdCgnJyk7XG5cbiAgICBpZiAoYXJyMS5sZW5ndGggIT09IGFycjIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBjb3VudDEgPSB7fTtcbiAgICBjb25zdCBjb3VudDIgPSB7fTtcblxuICAgIGZvciAobGV0IG51bSBvZiBhcnIxKSB7XG4gICAgICAgIGNvdW50MVtudW1dID0gKGNvdW50MVtudW1dIHx8IDApICsgMTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBudW0gb2YgYXJyMikge1xuICAgICAgICBjb3VudDJbbnVtXSA9IChjb3VudDJbbnVtXSB8fCAwKSArIDE7XG4gICAgfVxuXG4gICAgZm9yIChsZXQga2V5IGluIGNvdW50MSkge1xuICAgICAgICBpZiAoY291bnQxW2tleV0gIT09IGNvdW50MltrZXldKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cblxuXG4vLyBGaW5kcyBpZiBhbnkgYXJndW1lbnRzIGFyZSBkdWxwbGljYXRlcyAoZnJlcUNvdW50ZXIpXG5cbmNvbnN0IGFyZVRoZXJlRHVwcyA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgY291bnQgPSB7fVxuICAgIGZvciAobGV0IGFyZyBvZiBhcmdzKSB7XG4gICAgICAgIGNvdW50W2FyZ10gPSAoY291bnRbYXJnXSB8fCAwKSArIDE7XG4gICAgfVxuXG4gICAgZm9yIChsZXQga2V5IGluIGNvdW50KSB7XG4gICAgICAgIGlmIChjb3VudFtrZXldID4gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJleHBvcnQgY29uc3QgYWxnVGltZXIgPSAoYWxnKSA9PiB7XG4gICAgY29uc3QgdDEgPSBwZXJmb3JtYW5jZS5ub3coKVxuICAgIGFsZztcbiAgICBjb25zdCB0MiA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG4gICAgY29uc29sZS5sb2coKHQyIC0gdDEpLnRvRml4ZWQoMTIpKTtcbn1cblxuZXhwb3J0IGNvbnN0IHN3YXAgPSAoYXJyLCBpbmQxLCBpbmQyKSA9PiB7XG4gICAgW2FycltpbmQxXSwgYXJyW2luZDJdXSA9IFthcnJbaW5kMl0sIGFycltpbmQxXV07IFxufVxuXG5cbiIsIi8vIEFjdHVhbGx5IHVzZWZ1bCBpbiBzb21lIHNjZW5hcmlvcywgd29ydGgga25vd2luZyBmb3IgcHJhY3RpY2FsaXR5XG4vLyBEZWNlbnRseSBmYXN0IGF0IHNvcnRpbmcgbmVhcmx5IHNvcnRlZCBkYXRhIChiZXR0ZXIgdGhhbiBtZXJnZSBzb3J0KVxuXG4vLyBBbHNvIGdvb2QgZm9yIHNvcnRpbmcgYSBsaXZlIHN0cmVhbSBvZiBkYXRhIGludG8gYSBzb3J0ZWQgYXJyYXkgKG9uZSBwYXNzIHRvIGFkZCBhIG5ldyB2YWx1ZSwgb3RoZXJzIGhhdmUgdG8gcmVzb3J0IHRoZSB3aG9sZSBhcnJheSlcblxuLy8gVGltZTogQmVzdCBPKG4pLCBhdmVyYWdlIE8obl4yKSwgd29yc3QgTyhuXjIpXG4vLyBTcGFjZTogTygxKVxuXG4vLyBXb3JzdCBjYXNlIHNvcnRpbmcgYSByZXZlcnNlIG9yZGVyIGFycmF5XG5cbi8vIGdyYWR1YWxseSBidWlsZHMgYSBzb3J0ZWQgcG9ydGlvbiBvZiB0aGUgYXJyYXlcbmV4cG9ydCBjb25zdCBpbnNlcnRpb25Tb3J0ID0gKGFycikgPT4ge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gYXJyW2ldO1xuICAgICAgICBmb3IgKHZhciBqID0gaSAtIDE7IGogPj0gMCAmJiBhcnJbal0gPiBjdXJyZW50OyBqLS0pIHtcbiAgICAgICAgICAgIGFycltqICsgMV0gPSBhcnJbal07XG4gICAgICAgIH1cblxuICAgICAgICBhcnJbaiArIDFdID0gY3VycmVudDtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbn1cblxuY29uc3QgdGVzdEFyciA9IFsxLCAyLCA0LCAxLCAyLCA0LCAxMiwgNV07XG5jb25zb2xlLmxvZyhpbnNlcnRpb25Tb3J0KHRlc3RBcnIpKSIsIi8vIFBhcnQgMTogTWVyZ2luZyBTb3J0ZWQgQXJyYXlzXG5cbi8vIEhlbHBlciBmdW5jdGlvbiBydW5zIGluIE8obiArIG0pIHRpbWUgYW5kIHNwYWNlIGNvbXBsZXhpdHlcbi8vIFJlY3Vyc2l2ZSBmdW5jdGlvbiBpcyBPKGxvZyhuKSlcbi8vIE92ZXJhbGwgdGltZSBjb21wbGV4aXR5OiBPKG5sb2cobikpXG4vLyBTcGFjZSBjb21wbGV4aXR5OiBPKG4pXG4vLyBDbGFzc2ljIG11bHRpLXBvaW50ZXJzIHBhdHRlcm5cblxuXG5cbi8vIHVzaW5nIHdoaWxlICh0cnVlKVxuY29uc3QgbWVyZ2VCYWQgPSAoYXJyMSwgYXJyMikgPT4ge1xuICAgIGNvbnN0IG1lcmdlZCA9IFtdO1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgaiA9IDA7XG5cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBpZiAoYXJyMVtpXSA8IGFycjJbal0pIHtcbiAgICAgICAgICAgIG1lcmdlZC5wdXNoKGFycjFbaV0pXG4gICAgICAgICAgICBpKytcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lcmdlZC5wdXNoKGFycjJbal0pXG4gICAgICAgICAgICBqKytcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpID09PSBhcnIxLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIG1lcmdlZC5wdXNoKGFycjIuc2xpY2UoaikpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA9PT0gYXJyMi5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBtZXJnZWQucHVzaChhcnIxLnNsaWNlKGkpKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlZDtcbn1cblxuLy8gbm90IHVzaW5nIHdoaWxlICh0cnVlKVxuXG5leHBvcnQgY29uc3QgbWVyZ2UgPSAoYXJyMSwgYXJyMikgPT4ge1xuICAgIGNvbnN0IG1lcmdlZCA9IFtdO1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgaiA9IDA7XG5cbiAgICB3aGlsZSAoaSA8IGFycjEubGVuZ3RoICYmIGogPCBhcnIyLmxlbmd0aCkge1xuICAgICAgICBpZiAoYXJyMVtpXSA8IGFycjJbal0pIHtcbiAgICAgICAgICAgIG1lcmdlZC5wdXNoKGFycjFbaV0pO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVyZ2VkLnB1c2goYXJyMltqXSk7XG4gICAgICAgICAgICBqKys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgZGlmZiA9IGFycjEubGVuZ3RoIC0gYXJyMi5sZW5ndGg7XG5cbiAgICBpZiAoZGlmZiA+IDApIHtcbiAgICAgICAgbWVyZ2VkLnB1c2goLi4uYXJyMS5zbGljZShpKSk7XG4gICAgfSBlbHNlIGlmIChkaWZmIDwgMCkge1xuICAgICAgICBtZXJnZWQucHVzaCguLi5hcnIyLnNsaWNlKGopKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2VkO1xufVxuXG5cblxuY29uc29sZS5sb2coJ21lcmdlOicpXG5jb25zb2xlLmxvZyhtZXJnZShbMSwgMiwgMywgNCwgMTAsIDIwLCAyMSwgMzEsIDQxXSwgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEyLCAxMiwgMTUsIDE3LCAxOV0pKTtcblxuY29uc3QgbWVyZ2VTb3J0ID0gKGFycikgPT4ge1xuICAgIGlmIChhcnIubGVuZ3RoIDw9IDEpIHJldHVybiBhcnI7ICAgIC8vIEJhc2UgY2FzZVxuXG4gICAgY29uc3QgbWlkID0gTWF0aC5mbG9vcihhcnIubGVuZ3RoIC8gMilcbiAgICBjb25zdCByaWdodCA9IG1lcmdlU29ydChhcnIuc2xpY2UobWlkKSk7XG4gICAgY29uc3QgbGVmdCA9IG1lcmdlU29ydChhcnIuc2xpY2UoMCwgbWlkKSk7XG5cbiAgICByZXR1cm4gbWVyZ2UobGVmdCwgcmlnaHQpO1xuXG5cbn0iLCJleHBvcnQgY29uc3QgY291bnRVbmlxdWVWYWx1ZXMgPSAoYXJyKSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBqID0gMTtcblxuICAgIHdoaWxlIChqIDwgYXJyLmxlbmd0aCkge1xuICAgICAgICBpZiAoYXJyW2ldID09PSBhcnJbal0pIHtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGFycltpXSA9IGFycltqXTtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFyci5zcGxpY2UoaSArIDEpO1xuICAgIHJldHVybiBhcnIubGVuZ3RoO1xufVxuXG5leHBvcnQgY29uc3QgdGVzdCA9IChhcnIpID0+IHtcbiAgICBjb25zdCBjb3VudCA9IHt9O1xuICAgIGZvciAobGV0IHZhbHVlIG9mIGFycikge1xuICAgICAgICBjb3VudFt2YWx1ZV0gPSAoY291bnRbdmFsdWVdIHx8IDApICsgMVxuICAgIH1cblxuICAgIGxldCB1bmlxdWVWYWx1ZXMgPSAwO1xuICAgIGZvciAobGV0IGtleSBpbiBjb3VudCkge1xuICAgICAgICBpZiAoY291bnRba2V5XSA9PT0gMSkge1xuICAgICAgICAgICAgdW5pcXVlVmFsdWVzKys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5pcXVlVmFsdWVzXG59XG5cbi8vIEZpbmRzIGlmIGFueSBhcmd1bWVudHMgYXJlIGR1bHBsaWNhdGVzIChtdWx0aVBvaW50ZXJzKVxuXG5jb25zdCBhcmVUaGVyZUR1cHMgPSAoLi4uYXJncykgPT4ge1xuICAgIC8vIEkgZ2V0IHRoaXMgbm93LiBSZWxpZXMgb24gdGhlIHByaW5jaXBsZSBpZiBBID0gQiBhbmQgQiA9IEMgdGhlbiBBID0gQywgZXhjZXB0IHRoZSBpbnZlcnNlXG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBqID0gMTtcblxuXG4gICAgd2hpbGUoIGogPCBhcmdzLmxlbmd0aCApIHtcbiAgICAgICAgaWYgKGFyZ3NbaV0gPT09IGFyZ3Nbal0pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaisrXG4gICAgICAgICAgICBpKytcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gRGV0ZXJtaW5lIHdoZXRoZXIgYSBwYWlyIGluIHRoZSBhcmd1bWVudCBhcnJheSBhdmVyYWdlcyB0byB0aGUgYXJndW1lbnQgYXZlcmFnZVxuXG5cbmNvbnN0IGNvbnRhaW5zQXZlcmFnZSA9IChhcnIsIGF2KSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBqID0gYXJyLmxlbmd0aDtcblxuICAgIHdoaWxlIChqICE9PSBpKSB7XG5cbiAgICAgICAgaWYgKChhcnJbal0gKyBhcnJbaV0pLzIgPT09IGF2KSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICBpZiAoKGFycltpXSArIGFycltqXSkvMiAgPCBhdikge1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgai0tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5jb25zdCBpc1N1YnNlcXVlbmNlID0gKHN0cjEsIHN0cjIpID0+IHtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGogPSAwO1xuXG4gICAgd2hpbGUgKCBpIDwgc3RyMS5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHN0cjFbaV0gPT09IHN0cjJbal0pIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqID4gc3RyMi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcblxufSIsImV4cG9ydCBjb25zdCBwb3dlciA9IChiYXNlLCBleHApID0+IHtcbiAgICBpZiAoZXhwID09PSAwKSByZXR1cm4gMTtcbiAgICByZXR1cm4gYmFzZSAqIHBvd2VyKGJhc2UsIGV4cCAtIDEpO1xufVxuXG5leHBvcnQgY29uc3QgcHJvZHVjdE9mQXJyYXkgPSAoYXJyKSA9PiB7XG4gICAgaWYgKGFyci5sZW5ndGggPT09IDApIHJldHVybiAxO1xuICAgIGxldCBteVZhciA9IGFyci5zaGlmdCgpO1xuICAgIHJldHVybiBteVZhciAqIHByb2R1Y3RPZkFycmF5KGFycik7XG59XG4iLCJpbXBvcnQgeyBzd2FwIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xuXG5jb25zdCB0ZXN0QXJyID0gWzEsIDIsIDMsIDEsIDIsIDU0LCAyMywgNiwgMSwgNjddO1xuXG4vLyBXb3JrcyBsaWtlIGJ1YmJsZSBzb3J0IGluIHJldmVyc2UuIExvb3AgdGhyb3VnaCwgZmluZCBtaW5pbXVtLCBzd2FwIGl0IHdpdGggaSwgaW5jcmVtZW50IGksIHJlcGVhdFxuLy8gVGltZTogQmVzdCwgd29yc3QgYW5kIGF2ZXJhZ2UgTyhuXjIpXG4vLyBTcGFjZTogTygxKTtcbi8vIE9ubHkgYmV0dGVyIHRoYW4gYnViYmxlIHNvcnQgaWYgeW91IG5lZWQgdG8gbWluaW1pemUgdGhlIG51bWJlciBvZiBzd2Fwcywgc2luY2Ugd2Ugb25seSBkbyBuIHN3YXBzIFxuLy8gaWUgbWluaW1pemUgaG93IG9mdGVuIHdlIHdyaXRlIHRvIG1lbW9yeSwgc3VwZXIgdW5jb21tb24gc2NlbmFyaW9cbi8vIFN1Y2tzIHByZXR0eSBoYXJkLCBhbG1vc3Qgbm8gcmVhc29uIHRvIHVzZSBpdFxuXG5leHBvcnQgY29uc3Qgc2VsZWN0aW9uU29ydCA9IChhcnIpID0+IHtcbiAgICBsZXQgaSA9IDA7XG4gICAgd2hpbGUoaSA8IGFyci5sZW5ndGgpIHtcbiAgICAgICAgbGV0IG1pbiA9IGk7XG4gICAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IGFyci5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKGFycltqXSA8IGFyclttaW5dKSB7XG4gICAgICAgICAgICAgICAgbWluID0gajtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9wdGltaXphdGlvbiBjb25kaXRpb25hbCBcbiAgICAgICAgaWYgKGkgIT09IG1pbikgc3dhcChhcnIsIGksIG1pbik7XG4gICAgICAgIGkrKztcblxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gYXJyO1xufVxuXG5jb25zb2xlLmxvZygnT3JpZ2luYWwgYXJyOiAnKTtcbmNvbnNvbGUubG9nKHRlc3RBcnIpO1xuXG5jb25zb2xlLmxvZygnU2VsZWN0aW9uIFNvcnQ6ICcpO1xuY29uc29sZS5sb2coc2VsZWN0aW9uU29ydCh0ZXN0QXJyKSk7IiwiLy8gRmluZCB0aGUgbG9uZ2VzdCBzZXF1ZW5jZSBvZiB1bmlxdWUgY2hhcmFjdGVycyBpbiBhIHN0cmluZ1xuXG4vLyBcIk5haXZlIHNvbHV0aW9uXCIgKHByZXR0eSBzdXJlIGl0J3MgYWN0dWFsbHkgTygxKSBzaW5jZSB0aGVyZSdzIGEgZmluaXRlIG51bWJlciBvZiB1bmlxdWUgYWxwaGFudW1lcmljIGNoYXJhY3RlcnMpXG5leHBvcnQgY29uc3QgbG9uZ2VzdFNlcXVlbmNlTmFpdmUgPSAoc3RyKSA9PiB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGxldCBoaWdoZXN0ID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSBpOyBqIDwgc3RyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoIWFyci5pbmNsdWRlcyhzdHJbal0pKSB7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2goc3RyW2pdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyci5sZW5ndGggPiBoaWdoZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGhpZ2hlc3QgPSBhcnIubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhcnIgPSBbXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBoaWdoZXN0O1xufVxuXG4vLyBGaW5kIHRoZSBtYXhpbXVtIHN1bSBvZiBuIGNvbnNlY3V0aXZlIGRpZ2l0cyBpbiBhbiBhcnJheVxuY29uc3QgbWF4U3VtID0gKGFyciwgbikgPT4ge1xuICAgIGlmIChhcnIubGVuZ3RoIDwgbikgcmV0dXJuIG51bGw7XG5cbiAgICBsZXQgdGVtcCA9IDA7XG4gICAgbGV0IG1heCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgbWF4ICs9IGFycltpXTtcbiAgICB9XG5cbiAgICB0ZW1wID0gbWF4O1xuXG4gICAgZm9yIChsZXQgaSA9IG51bTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICB0ZW1wIC09IChhcnJbaSAtIG51bV0gKyBhcnJbaV0pO1xuICAgICAgICBpZiAobWF4IDwgdGVtcCkgbWF4ID0gdGVtcDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF4O1xufVxuXG5jb25zdCBtYXhTdWJhcnJheVN1bSA9IChhcnIsIG4pID0+IHtcbiAgICBpZiAobiA+IGFyci5sZW5ndGgpIHJldHVybiBudWxsO1xuXG4gICAgbGV0IG1heFN1bSA9IDA7XG4gICAgbGV0IHRlbXAgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIG1heFN1bSArPSBhcnJbaV07XG4gICAgfVxuXG4gICAgdGVtcCA9IG1heFN1bVxuICAgIGZvciAobGV0IGkgPSBuOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRlbXAgPSB0ZW1wIC0gYXJyW2kgLSBuXSArIGFycltpXVxuICAgICAgICBpZiAodGVtcCA+IG1heFN1bSkge1xuICAgICAgICAgICAgbWF4U3VtID0gdGVtcFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1heFN1bVxufVxuIFxuXG5jb25zdCBtaW5TdWJBcnJheUxlbmd0aCA9IChhcnIsIG4pID0+IHtcbiAgICBsZXQgc3VtID0gMDtcblxuICAgIGxldCBtYXggPSAwO1xuICAgIHdoaWxlIChzdW0gPD0gbikge1xuICAgICAgICBzdW0gKz0gYXJyW21heF07XG4gICAgICAgIG1heCsrO1xuXG4gICAgICAgIGlmIChtYXggPiBhcnIubGVuZ3RoIC0gMSkgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgbGV0IHRlbXAgPSBzdW07XG4gICAgZm9yIChsZXQgaSA9IG1heDsgaSA8IChhcnIubGVuZ3RoIC0gbWF4KTsgaSsrKSB7XG4gICAgICAgIGxldCBqID0gaSAtIG1heDtcblxuICAgICAgICB0ZW1wID0gdGVtcCAtIGFycltqXSArIGFycltpXTtcblxuICAgICAgICB3aGlsZSAodGVtcCA+PSBuKSB7XG4gICAgICAgICAgICB0ZW1wIC09IGFycltqXVxuICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgbWF4LS07XG4gICAgICAgIH1cbiAgICB9IFxufSIsImV4cG9ydCBjb25zdCBzdHJpbmdTZWFyY2hOYWl2ZSA9IChzdHIsIHN1YnN0cikgPT4ge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHN0cltpXSA9PT0gc3Vic3RyWzBdKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHN1YnN0ci5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbaSArIGpdICE9PSBzdWJzdHJbal0pIGJyZWFrO1xuICAgICAgICAgICAgICAgIGlmIChqID09PSBzdWJzdHIubGVuZ3RoIC0gMSkgY291bnQrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvdW50O1xufVxuXG5jb25zdCBzdHIxID0gJ3V3dSB1d3UgdXd1J1xuY29uc3QgcGF0dGVybiA9ICd1d3UnO1xuXG5jb25zb2xlLmxvZyhzdHJpbmdTZWFyY2hOYWl2ZShzdHIxLCBwYXR0ZXJuKSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2FsZ1RpbWVyfSBmcm9tIFwiLi9hbGdvcml0aG1zL2hlbHBlcnNcIjtcbmltcG9ydCB7aXNBbmFncmFtQmFkLCBpc0FuYWdyYW0sIGlzU3F1YXJlc30gZnJvbSBcIi4vYWxnb3JpdGhtcy9mcmVxQ291bnRlclwiO1xuaW1wb3J0IHtjb3VudFVuaXF1ZVZhbHVlcywgdGVzdH0gZnJvbSBcIi4vYWxnb3JpdGhtcy9tdWx0aVBvaW50ZXJzXCI7XG5pbXBvcnQgeyBsb25nZXN0U2VxdWVuY2VOYWl2ZSB9IGZyb20gXCIuL2FsZ29yaXRobXMvc2xpZGluZ1dpbmRvd1wiO1xuaW1wb3J0IHsgcG93ZXIgfSBmcm9tIFwiLi9hbGdvcml0aG1zL3JlY3Vyc2lvblwiO1xuaW1wb3J0IHsgYmluYXJ5U2VhcmNoIH0gZnJvbSBcIi4vYWxnb3JpdGhtcy9iaW5hcnlTZWFyY2hcIjtcbmltcG9ydCB7IHN0cmluZ1NlYXJjaE5haXZlIH0gZnJvbSBcIi4vYWxnb3JpdGhtcy9zdHJpbmdTZWFyY2hcIjtcbmltcG9ydCB7IGJ1YmJsZVNvcnQgfSBmcm9tIFwiLi9hbGdvcml0aG1zL2J1YmJsZVNvcnRcIjtcbmltcG9ydCB7IHNlbGVjdGlvblNvcnQgfSBmcm9tIFwiLi9hbGdvcml0aG1zL3NlbGVjdGlvblNvcnRcIjtcbmltcG9ydCB7IGluc2VydGlvblNvcnQgfSBmcm9tIFwiLi9hbGdvcml0aG1zL2luc2VydGlvblNvcnRcIjtcbmltcG9ydCBcIi4vYWxnb3JpdGhtcy9tZXJnZVNvcnRcIjtcblxuY29uc3QgYXJyMSA9IFsxLCAyLCAzLCA0LCA0LCA0LCA1LCA2LCA3LCA3LCA4LCA4LCA4LCA5LCAxMiwgMTAwMDBdO1xuXG5jb25zdCBhcnIyID0gYXJyMS5tYXAoaXRlbSA9PiBpdGVtKioyKTtcblxuY29uc3Qgc3RyID0gXCJjYWxjdWxhdGVcIlxuXG5cbmNvbnN0IGFycjMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOF07XG5jb25zb2xlLmxvZyhiaW5hcnlTZWFyY2goYXJyMSwgNykpXG5cbmNvbnN0IHVuc29ydGVkQXJyID0gWzEsIDIsIDMsIDQsIDEsIDMsIDQsIDEsIDEyMiwgNCwgMjMsIDk1LCAzMl07XG5jb25zb2xlLmxvZyhidWJibGVTb3J0KHVuc29ydGVkQXJyKSk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9