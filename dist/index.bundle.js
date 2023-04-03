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
// O(n^2)
// Only better than bubble sort if you need to minimize the number of swaps, since we only do n swaps 
// ie minimize how often we write to memory, super uncommon scenario

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQix3QkFBd0I7QUFDOUM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeEZPO0FBQ1A7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0EsNEJBQTRCLG1CQUFtQjtBQUMvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7OztVQ2xCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOOEM7QUFDOEI7QUFDVDtBQUNEO0FBQ25CO0FBQ1U7QUFDSztBQUNUO0FBQ007OztBQUczRDs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQSxZQUFZLHNFQUFZOztBQUV4QjtBQUNBLFlBQVksa0VBQVUsZSIsInNvdXJjZXMiOlsid2VicGFjazovL3VkZW15LWRzYS8uL3NyYy9hbGdvcml0aG1zL2JpbmFyeVNlYXJjaC5qcyIsIndlYnBhY2s6Ly91ZGVteS1kc2EvLi9zcmMvYWxnb3JpdGhtcy9idWJibGVTb3J0LmpzIiwid2VicGFjazovL3VkZW15LWRzYS8uL3NyYy9hbGdvcml0aG1zL2ZyZXFDb3VudGVyLmpzIiwid2VicGFjazovL3VkZW15LWRzYS8uL3NyYy9hbGdvcml0aG1zL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vdWRlbXktZHNhLy4vc3JjL2FsZ29yaXRobXMvbXVsdGlQb2ludGVycy5qcyIsIndlYnBhY2s6Ly91ZGVteS1kc2EvLi9zcmMvYWxnb3JpdGhtcy9yZWN1cnNpb24uanMiLCJ3ZWJwYWNrOi8vdWRlbXktZHNhLy4vc3JjL2FsZ29yaXRobXMvc2VsZWN0aW9uU29ydC5qcyIsIndlYnBhY2s6Ly91ZGVteS1kc2EvLi9zcmMvYWxnb3JpdGhtcy9zbGlkaW5nV2luZG93LmpzIiwid2VicGFjazovL3VkZW15LWRzYS8uL3NyYy9hbGdvcml0aG1zL3N0cmluZ1NlYXJjaC5qcyIsIndlYnBhY2s6Ly91ZGVteS1kc2Evd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdWRlbXktZHNhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly91ZGVteS1kc2Evd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly91ZGVteS1kc2Evd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91ZGVteS1kc2EvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGJpbmFyeVNlYXJjaCA9IChhcnIsIHZhbCkgPT4ge1xuICAgIGxldCBzdGFydCA9IDA7XG4gICAgbGV0IGVuZCA9IGFyci5sZW5ndGggLSAxO1xuICAgIGxldCBtaWQgPSBNYXRoLmZsb29yKChzdGFydCArIGVuZCkgLyAyKVxuXG4gICAgd2hpbGUgKGFyclttaWRdICE9PSB2YWwpIHtcblxuICAgICAgICBpZiAoc3RhcnQgPj0gZW5kKSByZXR1cm4gLTE7XG4gICAgICAgIGlmIChhcnJbbWlkXSA8IHZhbCkge1xuICAgICAgICAgICAgc3RhcnQgPSBtaWQgKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW5kID0gbWlkIC0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1pZCA9IE1hdGguZmxvb3IoKHN0YXJ0ICsgZW5kKSAvIDIpO1xuICAgIH1cblxuICAgIHJldHVybiBtaWQ7XG5cbn0iLCJpbXBvcnQgeyBzd2FwIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xuXG5leHBvcnQgY29uc3QgYnViYmxlU29ydCA9IChhcnIpID0+IHtcbiAgICBsZXQgc3dhcHMgPSAxO1xuXG4gICAgbGV0IHBhc3NlcyA9IGFyci5sZW5ndGg7XG4gICAgd2hpbGUgKHN3YXBzID4gMCkge1xuICAgICAgICBzd2FwcyA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYXNzZXM7IGkrKykge1xuICAgICAgICAgICAgaWYgKGFycltpXSA8IGFycltpIC0gMV0pIHtcbiAgICAgICAgICAgICAgICBzd2FwKGFyciwgaSwgaSAtIDEpO1xuICAgICAgICAgICAgICAgIHN3YXBzKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGFzc2VzLS07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcbn1cblxuY29uc3QgdW5zb3J0ZWRBcnIgPSBbMTAsIDIsIDMsIDQsIDEsIDMsIDQsIDEsIDEyMiwgNCwgMjMsIDk1LCAzMl07XG5idWJibGVTb3J0KHVuc29ydGVkQXJyKTtcbmNvbnNvbGUubG9nKHVuc29ydGVkQXJyKVxuIiwiXG5cbi8vIEFuYWdyYW1zIE8obl4yKVxuZXhwb3J0IGNvbnN0IGlzQW5hZ3JhbUJhZCA9IChzdHIxLCBzdHIyKSA9PiB7XG4gICAgaWYgKHN0cjEubGVuZ3RoICE9PSBzdHIyLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChsZXQgbGV0dGVyMSBvZiBzdHIxKSB7XG4gICAgICAgIGlmICghc3RyMi5pbmNsdWRlcyhsZXR0ZXIxKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IFxuICAgIH0gIFxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cblxuLy8gQW5hZ3JhbXMgTyhuKVxuZXhwb3J0IGNvbnN0IGlzQW5hZ3JhbSA9IChzdHIxLCBzdHIyKSA9PiB7XG4gICAgaWYgKHN0cjEubGVuZ3RoICE9PSBzdHIyLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIFxuICAgIGNvbnN0IGNvdW50MSA9IHt9O1xuICAgIGNvbnN0IGNvdW50MiA9IHt9O1xuXG4gICAgZm9yIChsZXQgdmFsMSBvZiBzdHIxKSB7XG4gICAgICAgIGNvdW50MVt2YWwxXSA9IChjb3VudDFbdmFsMV0gfHwgMCkgKyAxOyAvLyBpZiBrZXkgZXhpc3RzLCBpbmNyZW1lbnQgaXQgYnkgMS4gSWYgbm90LCBpbml0aWFsaXplIHRvIHplcm8gYW5kIGluY3JlbWVudCBieSAxXG4gICAgfVxuXG4gICAgZm9yIChsZXQgdmFsMiBvZiBzdHIyKSB7XG4gICAgICAgIGNvdW50Mlt2YWwyXSA9IChjb3VudDJbdmFsMl0gfHwgMCkgKyAxO1xuICAgIH1cblxuICAgIGZvciAobGV0IGtleSBpbiBjb3VudDEpIHtcbiAgICAgICAgaWYgKCFjb3VudDIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvdW50MltrZXldICE9PSBjb3VudDFba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gVXNlcyB0aGUgZnJlcXVlbmN5IGNvdW50ZXIgcGF0dGVybiB0byBkZXRlcm1pbmUgaWYgb25lIGFycmF5IGNvbnRhaW5zIG9ubHkgc3F1YXJlcyBvZiBhbm90aGVyIGFycmF5XG5leHBvcnQgY29uc3QgaXNTcXVhcmVzID0gKGFycjEsIGFycjIpID0+IHtcbiAgICBpZiAoYXJyMS5sZW5ndGggIT09IGFycjIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cblxuICAgIGNvbnN0IGNvdW50MSA9IHt9XG4gICAgY29uc3QgY291bnQyID0ge31cblxuICAgIGZvciAobGV0IG51bSBvZiBhcnIxKSB7XG4gICAgICAgIGNvdW50MVtudW1dID0gKGNvdW50MVtudW1dIHx8IDApICsgMTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBudW0gb2YgYXJyMikge1xuICAgICAgICBjb3VudDJbbnVtXSA9IChjb3VudDJbbnVtXSB8fCAwKSArIDE7XG4gICAgfVxuXG4gICAgZm9yIChsZXQga2V5IGluIGNvdW50MSkge1xuICAgICAgICBpZiAoIWNvdW50Mi5oYXNPd25Qcm9wZXJ0eShrZXkqKjIpKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0cnVlO1xuXG59XG5cblxuLy8gR2l2ZW4gdHdvIHBvc2l0aXZlIGludGVnZXJzIGZpbmQgaWYgdGhlIGZyZXF1ZW5jZXMgb2YgZWFjaCBkaWdpdCBhcmUgdGhlIHNhbWVcblxuY29uc3Qgc2FtZUZyZXF1ZW5jeSA9IChuMSwgbjIpID0+IHtcbiAgICBjb25zdCBhcnIxID0gbjEudG9TdHJpbmcoKS5zcGxpdCgnJyk7XG4gICAgY29uc3QgYXJyMiA9IG4yLnRvU3RyaW5nKCkuc3BsaXQoJycpO1xuXG4gICAgaWYgKGFycjEubGVuZ3RoICE9PSBhcnIyLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgY291bnQxID0ge307XG4gICAgY29uc3QgY291bnQyID0ge307XG5cbiAgICBmb3IgKGxldCBudW0gb2YgYXJyMSkge1xuICAgICAgICBjb3VudDFbbnVtXSA9IChjb3VudDFbbnVtXSB8fCAwKSArIDE7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgbnVtIG9mIGFycjIpIHtcbiAgICAgICAgY291bnQyW251bV0gPSAoY291bnQyW251bV0gfHwgMCkgKyAxO1xuICAgIH1cblxuICAgIGZvciAobGV0IGtleSBpbiBjb3VudDEpIHtcbiAgICAgICAgaWYgKGNvdW50MVtrZXldICE9PSBjb3VudDJba2V5XSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufVxuXG5cblxuLy8gRmluZHMgaWYgYW55IGFyZ3VtZW50cyBhcmUgZHVscGxpY2F0ZXMgKGZyZXFDb3VudGVyKVxuXG5jb25zdCBhcmVUaGVyZUR1cHMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IGNvdW50ID0ge31cbiAgICBmb3IgKGxldCBhcmcgb2YgYXJncykge1xuICAgICAgICBjb3VudFthcmddID0gKGNvdW50W2FyZ10gfHwgMCkgKyAxO1xuICAgIH1cblxuICAgIGZvciAobGV0IGtleSBpbiBjb3VudCkge1xuICAgICAgICBpZiAoY291bnRba2V5XSA+IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiZXhwb3J0IGNvbnN0IGFsZ1RpbWVyID0gKGFsZykgPT4ge1xuICAgIGNvbnN0IHQxID0gcGVyZm9ybWFuY2Uubm93KClcbiAgICBhbGc7XG4gICAgY29uc3QgdDIgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICAgIGNvbnNvbGUubG9nKCh0MiAtIHQxKS50b0ZpeGVkKDEyKSk7XG59XG5cbmV4cG9ydCBjb25zdCBzd2FwID0gKGFyciwgaW5kMSwgaW5kMikgPT4ge1xuICAgIFthcnJbaW5kMV0sIGFycltpbmQyXV0gPSBbYXJyW2luZDJdLCBhcnJbaW5kMV1dOyBcbn1cblxuIiwiZXhwb3J0IGNvbnN0IGNvdW50VW5pcXVlVmFsdWVzID0gKGFycikgPT4ge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgaiA9IDE7XG5cbiAgICB3aGlsZSAoaiA8IGFyci5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGFycltpXSA9PT0gYXJyW2pdKSB7XG4gICAgICAgICAgICBqKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBhcnJbaV0gPSBhcnJbal07XG4gICAgICAgICAgICBqKys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhcnIuc3BsaWNlKGkgKyAxKTtcbiAgICByZXR1cm4gYXJyLmxlbmd0aDtcbn1cblxuZXhwb3J0IGNvbnN0IHRlc3QgPSAoYXJyKSA9PiB7XG4gICAgY29uc3QgY291bnQgPSB7fTtcbiAgICBmb3IgKGxldCB2YWx1ZSBvZiBhcnIpIHtcbiAgICAgICAgY291bnRbdmFsdWVdID0gKGNvdW50W3ZhbHVlXSB8fCAwKSArIDFcbiAgICB9XG5cbiAgICBsZXQgdW5pcXVlVmFsdWVzID0gMDtcbiAgICBmb3IgKGxldCBrZXkgaW4gY291bnQpIHtcbiAgICAgICAgaWYgKGNvdW50W2tleV0gPT09IDEpIHtcbiAgICAgICAgICAgIHVuaXF1ZVZhbHVlcysrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaXF1ZVZhbHVlc1xufVxuXG4vLyBGaW5kcyBpZiBhbnkgYXJndW1lbnRzIGFyZSBkdWxwbGljYXRlcyAobXVsdGlQb2ludGVycylcblxuY29uc3QgYXJlVGhlcmVEdXBzID0gKC4uLmFyZ3MpID0+IHtcbiAgICAvLyBJIGdldCB0aGlzIG5vdy4gUmVsaWVzIG9uIHRoZSBwcmluY2lwbGUgaWYgQSA9IEIgYW5kIEIgPSBDIHRoZW4gQSA9IEMsIGV4Y2VwdCB0aGUgaW52ZXJzZVxuICAgIGxldCBpID0gMDtcbiAgICBsZXQgaiA9IDE7XG5cblxuICAgIHdoaWxlKCBqIDwgYXJncy5sZW5ndGggKSB7XG4gICAgICAgIGlmIChhcmdzW2ldID09PSBhcmdzW2pdKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGorK1xuICAgICAgICAgICAgaSsrXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIERldGVybWluZSB3aGV0aGVyIGEgcGFpciBpbiB0aGUgYXJndW1lbnQgYXJyYXkgYXZlcmFnZXMgdG8gdGhlIGFyZ3VtZW50IGF2ZXJhZ2VcblxuXG5jb25zdCBjb250YWluc0F2ZXJhZ2UgPSAoYXJyLCBhdikgPT4ge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgaiA9IGFyci5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaiAhPT0gaSkge1xuXG4gICAgICAgIGlmICgoYXJyW2pdICsgYXJyW2ldKS8yID09PSBhdikgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgaWYgKChhcnJbaV0gKyBhcnJbal0pLzIgIDwgYXYpIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGotLTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuY29uc3QgaXNTdWJzZXF1ZW5jZSA9IChzdHIxLCBzdHIyKSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBqID0gMDtcblxuICAgIHdoaWxlICggaSA8IHN0cjEubGVuZ3RoKSB7XG4gICAgICAgIGlmIChzdHIxW2ldID09PSBzdHIyW2pdKSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBqKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBqKys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA+IHN0cjIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG5cbn0iLCJleHBvcnQgY29uc3QgcG93ZXIgPSAoYmFzZSwgZXhwKSA9PiB7XG4gICAgaWYgKGV4cCA9PT0gMCkgcmV0dXJuIDE7XG4gICAgcmV0dXJuIGJhc2UgKiBwb3dlcihiYXNlLCBleHAgLSAxKTtcbn1cblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RPZkFycmF5ID0gKGFycikgPT4ge1xuICAgIGlmIChhcnIubGVuZ3RoID09PSAwKSByZXR1cm4gMTtcbiAgICBsZXQgbXlWYXIgPSBhcnIuc2hpZnQoKTtcbiAgICByZXR1cm4gbXlWYXIgKiBwcm9kdWN0T2ZBcnJheShhcnIpO1xufVxuIiwiaW1wb3J0IHsgc3dhcCB9IGZyb20gXCIuL2hlbHBlcnNcIjtcblxuY29uc3QgdGVzdEFyciA9IFsxLCAyLCAzLCAxLCAyLCA1NCwgMjMsIDYsIDEsIDY3XTtcblxuLy8gV29ya3MgbGlrZSBidWJibGUgc29ydCBpbiByZXZlcnNlLiBMb29wIHRocm91Z2gsIGZpbmQgbWluaW11bSwgc3dhcCBpdCB3aXRoIGksIGluY3JlbWVudCBpLCByZXBlYXRcbi8vIE8obl4yKVxuLy8gT25seSBiZXR0ZXIgdGhhbiBidWJibGUgc29ydCBpZiB5b3UgbmVlZCB0byBtaW5pbWl6ZSB0aGUgbnVtYmVyIG9mIHN3YXBzLCBzaW5jZSB3ZSBvbmx5IGRvIG4gc3dhcHMgXG4vLyBpZSBtaW5pbWl6ZSBob3cgb2Z0ZW4gd2Ugd3JpdGUgdG8gbWVtb3J5LCBzdXBlciB1bmNvbW1vbiBzY2VuYXJpb1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0aW9uU29ydCA9IChhcnIpID0+IHtcbiAgICBsZXQgaSA9IDA7XG4gICAgd2hpbGUoaSA8IGFyci5sZW5ndGgpIHtcbiAgICAgICAgbGV0IG1pbiA9IGk7XG4gICAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IGFyci5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKGFycltqXSA8IGFyclttaW5dKSB7XG4gICAgICAgICAgICAgICAgbWluID0gajtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9wdGltaXphdGlvbiBjb25kaXRpb25hbCBcbiAgICAgICAgaWYgKGkgIT09IG1pbikgc3dhcChhcnIsIGksIG1pbik7XG4gICAgICAgIGkrKztcblxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gYXJyO1xufVxuXG5jb25zb2xlLmxvZygnT3JpZ2luYWwgYXJyOiAnKTtcbmNvbnNvbGUubG9nKHRlc3RBcnIpO1xuXG5jb25zb2xlLmxvZygnU2VsZWN0aW9uIFNvcnQ6ICcpO1xuY29uc29sZS5sb2coc2VsZWN0aW9uU29ydCh0ZXN0QXJyKSk7IiwiLy8gRmluZCB0aGUgbG9uZ2VzdCBzZXF1ZW5jZSBvZiB1bmlxdWUgY2hhcmFjdGVycyBpbiBhIHN0cmluZ1xuXG4vLyBcIk5haXZlIHNvbHV0aW9uXCIgKHByZXR0eSBzdXJlIGl0J3MgYWN0dWFsbHkgTygxKSBzaW5jZSB0aGVyZSdzIGEgZmluaXRlIG51bWJlciBvZiB1bmlxdWUgYWxwaGFudW1lcmljIGNoYXJhY3RlcnMpXG5leHBvcnQgY29uc3QgbG9uZ2VzdFNlcXVlbmNlTmFpdmUgPSAoc3RyKSA9PiB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGxldCBoaWdoZXN0ID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSBpOyBqIDwgc3RyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoIWFyci5pbmNsdWRlcyhzdHJbal0pKSB7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2goc3RyW2pdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyci5sZW5ndGggPiBoaWdoZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGhpZ2hlc3QgPSBhcnIubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhcnIgPSBbXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBoaWdoZXN0O1xufVxuXG4vLyBGaW5kIHRoZSBtYXhpbXVtIHN1bSBvZiBuIGNvbnNlY3V0aXZlIGRpZ2l0cyBpbiBhbiBhcnJheVxuY29uc3QgbWF4U3VtID0gKGFyciwgbikgPT4ge1xuICAgIGlmIChhcnIubGVuZ3RoIDwgbikgcmV0dXJuIG51bGw7XG5cbiAgICBsZXQgdGVtcCA9IDA7XG4gICAgbGV0IG1heCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgbWF4ICs9IGFycltpXTtcbiAgICB9XG5cbiAgICB0ZW1wID0gbWF4O1xuXG4gICAgZm9yIChsZXQgaSA9IG51bTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICB0ZW1wIC09IChhcnJbaSAtIG51bV0gKyBhcnJbaV0pO1xuICAgICAgICBpZiAobWF4IDwgdGVtcCkgbWF4ID0gdGVtcDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF4O1xufVxuXG5jb25zdCBtYXhTdWJhcnJheVN1bSA9IChhcnIsIG4pID0+IHtcbiAgICBpZiAobiA+IGFyci5sZW5ndGgpIHJldHVybiBudWxsO1xuXG4gICAgbGV0IG1heFN1bSA9IDA7XG4gICAgbGV0IHRlbXAgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIG1heFN1bSArPSBhcnJbaV07XG4gICAgfVxuXG4gICAgdGVtcCA9IG1heFN1bVxuICAgIGZvciAobGV0IGkgPSBuOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRlbXAgPSB0ZW1wIC0gYXJyW2kgLSBuXSArIGFycltpXVxuICAgICAgICBpZiAodGVtcCA+IG1heFN1bSkge1xuICAgICAgICAgICAgbWF4U3VtID0gdGVtcFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1heFN1bVxufVxuIFxuXG5jb25zdCBtaW5TdWJBcnJheUxlbmd0aCA9IChhcnIsIG4pID0+IHtcbiAgICBsZXQgc3VtID0gMDtcblxuICAgIGxldCBtYXggPSAwO1xuICAgIHdoaWxlIChzdW0gPD0gbikge1xuICAgICAgICBzdW0gKz0gYXJyW21heF07XG4gICAgICAgIG1heCsrO1xuXG4gICAgICAgIGlmIChtYXggPiBhcnIubGVuZ3RoIC0gMSkgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgbGV0IHRlbXAgPSBzdW07XG4gICAgZm9yIChsZXQgaSA9IG1heDsgaSA8IChhcnIubGVuZ3RoIC0gbWF4KTsgaSsrKSB7XG4gICAgICAgIGxldCBqID0gaSAtIG1heDtcblxuICAgICAgICB0ZW1wID0gdGVtcCAtIGFycltqXSArIGFycltpXTtcblxuICAgICAgICB3aGlsZSAodGVtcCA+PSBuKSB7XG4gICAgICAgICAgICB0ZW1wIC09IGFycltqXVxuICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgbWF4LS07XG4gICAgICAgIH1cbiAgICB9IFxufSIsImV4cG9ydCBjb25zdCBzdHJpbmdTZWFyY2hOYWl2ZSA9IChzdHIsIHN1YnN0cikgPT4ge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHN0cltpXSA9PT0gc3Vic3RyWzBdKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHN1YnN0ci5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbaSArIGpdICE9PSBzdWJzdHJbal0pIGJyZWFrO1xuICAgICAgICAgICAgICAgIGlmIChqID09PSBzdWJzdHIubGVuZ3RoIC0gMSkgY291bnQrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvdW50O1xufVxuXG5jb25zdCBzdHIxID0gJ3V3dSB1d3UgdXd1J1xuY29uc3QgcGF0dGVybiA9ICd1d3UnO1xuXG5jb25zb2xlLmxvZyhzdHJpbmdTZWFyY2hOYWl2ZShzdHIxLCBwYXR0ZXJuKSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2FsZ1RpbWVyfSBmcm9tIFwiLi9hbGdvcml0aG1zL2hlbHBlcnNcIjtcbmltcG9ydCB7aXNBbmFncmFtQmFkLCBpc0FuYWdyYW0sIGlzU3F1YXJlc30gZnJvbSBcIi4vYWxnb3JpdGhtcy9mcmVxQ291bnRlclwiO1xuaW1wb3J0IHtjb3VudFVuaXF1ZVZhbHVlcywgdGVzdH0gZnJvbSBcIi4vYWxnb3JpdGhtcy9tdWx0aVBvaW50ZXJzXCI7XG5pbXBvcnQgeyBsb25nZXN0U2VxdWVuY2VOYWl2ZSB9IGZyb20gXCIuL2FsZ29yaXRobXMvc2xpZGluZ1dpbmRvd1wiO1xuaW1wb3J0IHsgcG93ZXIgfSBmcm9tIFwiLi9hbGdvcml0aG1zL3JlY3Vyc2lvblwiO1xuaW1wb3J0IHsgYmluYXJ5U2VhcmNoIH0gZnJvbSBcIi4vYWxnb3JpdGhtcy9iaW5hcnlTZWFyY2hcIjtcbmltcG9ydCB7IHN0cmluZ1NlYXJjaE5haXZlIH0gZnJvbSBcIi4vYWxnb3JpdGhtcy9zdHJpbmdTZWFyY2hcIjtcbmltcG9ydCB7IGJ1YmJsZVNvcnQgfSBmcm9tIFwiLi9hbGdvcml0aG1zL2J1YmJsZVNvcnRcIjtcbmltcG9ydCB7IHNlbGVjdGlvblNvcnQgfSBmcm9tIFwiLi9hbGdvcml0aG1zL3NlbGVjdGlvblNvcnRcIjtcblxuXG5jb25zdCBhcnIxID0gWzEsIDIsIDMsIDQsIDQsIDQsIDUsIDYsIDcsIDcsIDgsIDgsIDgsIDksIDEyLCAxMDAwMF07XG5cbmNvbnN0IGFycjIgPSBhcnIxLm1hcChpdGVtID0+IGl0ZW0qKjIpO1xuXG5jb25zdCBzdHIgPSBcImNhbGN1bGF0ZVwiXG5cblxuY29uc3QgYXJyMyA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XTtcbmNvbnNvbGUubG9nKGJpbmFyeVNlYXJjaChhcnIxLCA3KSlcblxuY29uc3QgdW5zb3J0ZWRBcnIgPSBbMSwgMiwgMywgNCwgMSwgMywgNCwgMSwgMTIyLCA0LCAyMywgOTUsIDMyXTtcbmNvbnNvbGUubG9nKGJ1YmJsZVNvcnQodW5zb3J0ZWRBcnIpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=