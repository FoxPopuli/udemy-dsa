/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/algorithms/algTimer.js":
/*!************************************!*\
  !*** ./src/algorithms/algTimer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const algTimer = (alg) => {
    const t1 = performance.now()
    alg;
    const t2 = performance.now();

    console.log((t2 - t1).toFixed(12));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (algTimer);

/***/ }),

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
/* harmony import */ var _algorithms_algTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./algorithms/algTimer */ "./src/algorithms/algTimer.js");
/* harmony import */ var _algorithms_freqCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./algorithms/freqCounter */ "./src/algorithms/freqCounter.js");
/* harmony import */ var _algorithms_multiPointers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./algorithms/multiPointers */ "./src/algorithms/multiPointers.js");
/* harmony import */ var _algorithms_slidingWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./algorithms/slidingWindow */ "./src/algorithms/slidingWindow.js");
/* harmony import */ var _algorithms_recursion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./algorithms/recursion */ "./src/algorithms/recursion.js");
/* harmony import */ var _algorithms_binarySearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./algorithms/binarySearch */ "./src/algorithms/binarySearch.js");







const arr1 = [1, 2, 3, 4, 4, 4, 5, 6, 7, 7, 8, 8, 8, 9, 12, 10000];

const arr2 = arr1.map(item => item**2);

const str = "calculate"


const arr3 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log((0,_algorithms_binarySearch__WEBPACK_IMPORTED_MODULE_5__.binarySearch)(arr1, 7))


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bkI7QUFDVTs7QUFFekQ7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0EsWUFBWSxzRUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3VkZW15LWRzYS8uL3NyYy9hbGdvcml0aG1zL2FsZ1RpbWVyLmpzIiwid2VicGFjazovL3VkZW15LWRzYS8uL3NyYy9hbGdvcml0aG1zL2JpbmFyeVNlYXJjaC5qcyIsIndlYnBhY2s6Ly91ZGVteS1kc2EvLi9zcmMvYWxnb3JpdGhtcy9mcmVxQ291bnRlci5qcyIsIndlYnBhY2s6Ly91ZGVteS1kc2EvLi9zcmMvYWxnb3JpdGhtcy9tdWx0aVBvaW50ZXJzLmpzIiwid2VicGFjazovL3VkZW15LWRzYS8uL3NyYy9hbGdvcml0aG1zL3JlY3Vyc2lvbi5qcyIsIndlYnBhY2s6Ly91ZGVteS1kc2EvLi9zcmMvYWxnb3JpdGhtcy9zbGlkaW5nV2luZG93LmpzIiwid2VicGFjazovL3VkZW15LWRzYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91ZGVteS1kc2Evd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3VkZW15LWRzYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3VkZW15LWRzYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VkZW15LWRzYS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhbGdUaW1lciA9IChhbGcpID0+IHtcbiAgICBjb25zdCB0MSA9IHBlcmZvcm1hbmNlLm5vdygpXG4gICAgYWxnO1xuICAgIGNvbnN0IHQyID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgICBjb25zb2xlLmxvZygodDIgLSB0MSkudG9GaXhlZCgxMikpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhbGdUaW1lcjsiLCJleHBvcnQgY29uc3QgYmluYXJ5U2VhcmNoID0gKGFyciwgdmFsKSA9PiB7XG4gICAgbGV0IHN0YXJ0ID0gMDtcbiAgICBsZXQgZW5kID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgbGV0IG1pZCA9IE1hdGguZmxvb3IoKHN0YXJ0ICsgZW5kKSAvIDIpXG5cbiAgICB3aGlsZSAoYXJyW21pZF0gIT09IHZhbCkge1xuXG4gICAgICAgIGlmIChzdGFydCA+PSBlbmQpIHJldHVybiAtMTtcbiAgICAgICAgaWYgKGFyclttaWRdIDwgdmFsKSB7XG4gICAgICAgICAgICBzdGFydCA9IG1pZCArIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbmQgPSBtaWQgLSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgbWlkID0gTWF0aC5mbG9vcigoc3RhcnQgKyBlbmQpIC8gMik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1pZDtcblxufSIsIlxuXG4vLyBBbmFncmFtcyBPKG5eMilcbmV4cG9ydCBjb25zdCBpc0FuYWdyYW1CYWQgPSAoc3RyMSwgc3RyMikgPT4ge1xuICAgIGlmIChzdHIxLmxlbmd0aCAhPT0gc3RyMi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAobGV0IGxldHRlcjEgb2Ygc3RyMSkge1xuICAgICAgICBpZiAoIXN0cjIuaW5jbHVkZXMobGV0dGVyMSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBcbiAgICB9ICBcblxuICAgIHJldHVybiB0cnVlO1xufVxuXG5cbi8vIEFuYWdyYW1zIE8obilcbmV4cG9ydCBjb25zdCBpc0FuYWdyYW0gPSAoc3RyMSwgc3RyMikgPT4ge1xuICAgIGlmIChzdHIxLmxlbmd0aCAhPT0gc3RyMi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICBcbiAgICBjb25zdCBjb3VudDEgPSB7fTtcbiAgICBjb25zdCBjb3VudDIgPSB7fTtcblxuICAgIGZvciAobGV0IHZhbDEgb2Ygc3RyMSkge1xuICAgICAgICBjb3VudDFbdmFsMV0gPSAoY291bnQxW3ZhbDFdIHx8IDApICsgMTsgLy8gaWYga2V5IGV4aXN0cywgaW5jcmVtZW50IGl0IGJ5IDEuIElmIG5vdCwgaW5pdGlhbGl6ZSB0byB6ZXJvIGFuZCBpbmNyZW1lbnQgYnkgMVxuICAgIH1cblxuICAgIGZvciAobGV0IHZhbDIgb2Ygc3RyMikge1xuICAgICAgICBjb3VudDJbdmFsMl0gPSAoY291bnQyW3ZhbDJdIHx8IDApICsgMTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gY291bnQxKSB7XG4gICAgICAgIGlmICghY291bnQyLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb3VudDJba2V5XSAhPT0gY291bnQxW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbi8vIFVzZXMgdGhlIGZyZXF1ZW5jeSBjb3VudGVyIHBhdHRlcm4gdG8gZGV0ZXJtaW5lIGlmIG9uZSBhcnJheSBjb250YWlucyBvbmx5IHNxdWFyZXMgb2YgYW5vdGhlciBhcnJheVxuZXhwb3J0IGNvbnN0IGlzU3F1YXJlcyA9IChhcnIxLCBhcnIyKSA9PiB7XG4gICAgaWYgKGFycjEubGVuZ3RoICE9PSBhcnIyLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG5cbiAgICBjb25zdCBjb3VudDEgPSB7fVxuICAgIGNvbnN0IGNvdW50MiA9IHt9XG5cbiAgICBmb3IgKGxldCBudW0gb2YgYXJyMSkge1xuICAgICAgICBjb3VudDFbbnVtXSA9IChjb3VudDFbbnVtXSB8fCAwKSArIDE7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgbnVtIG9mIGFycjIpIHtcbiAgICAgICAgY291bnQyW251bV0gPSAoY291bnQyW251bV0gfHwgMCkgKyAxO1xuICAgIH1cblxuICAgIGZvciAobGV0IGtleSBpbiBjb3VudDEpIHtcbiAgICAgICAgaWYgKCFjb3VudDIuaGFzT3duUHJvcGVydHkoa2V5KioyKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdHJ1ZTtcblxufVxuXG5cbi8vIEdpdmVuIHR3byBwb3NpdGl2ZSBpbnRlZ2VycyBmaW5kIGlmIHRoZSBmcmVxdWVuY2VzIG9mIGVhY2ggZGlnaXQgYXJlIHRoZSBzYW1lXG5cbmNvbnN0IHNhbWVGcmVxdWVuY3kgPSAobjEsIG4yKSA9PiB7XG4gICAgY29uc3QgYXJyMSA9IG4xLnRvU3RyaW5nKCkuc3BsaXQoJycpO1xuICAgIGNvbnN0IGFycjIgPSBuMi50b1N0cmluZygpLnNwbGl0KCcnKTtcblxuICAgIGlmIChhcnIxLmxlbmd0aCAhPT0gYXJyMi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IGNvdW50MSA9IHt9O1xuICAgIGNvbnN0IGNvdW50MiA9IHt9O1xuXG4gICAgZm9yIChsZXQgbnVtIG9mIGFycjEpIHtcbiAgICAgICAgY291bnQxW251bV0gPSAoY291bnQxW251bV0gfHwgMCkgKyAxO1xuICAgIH1cblxuICAgIGZvciAobGV0IG51bSBvZiBhcnIyKSB7XG4gICAgICAgIGNvdW50MltudW1dID0gKGNvdW50MltudW1dIHx8IDApICsgMTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gY291bnQxKSB7XG4gICAgICAgIGlmIChjb3VudDFba2V5XSAhPT0gY291bnQyW2tleV0pIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuXG5cbi8vIEZpbmRzIGlmIGFueSBhcmd1bWVudHMgYXJlIGR1bHBsaWNhdGVzIChmcmVxQ291bnRlcilcblxuY29uc3QgYXJlVGhlcmVEdXBzID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBjb3VudCA9IHt9XG4gICAgZm9yIChsZXQgYXJnIG9mIGFyZ3MpIHtcbiAgICAgICAgY291bnRbYXJnXSA9IChjb3VudFthcmddIHx8IDApICsgMTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gY291bnQpIHtcbiAgICAgICAgaWYgKGNvdW50W2tleV0gPiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImV4cG9ydCBjb25zdCBjb3VudFVuaXF1ZVZhbHVlcyA9IChhcnIpID0+IHtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGogPSAxO1xuXG4gICAgd2hpbGUgKGogPCBhcnIubGVuZ3RoKSB7XG4gICAgICAgIGlmIChhcnJbaV0gPT09IGFycltqXSkge1xuICAgICAgICAgICAgaisrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgYXJyW2ldID0gYXJyW2pdO1xuICAgICAgICAgICAgaisrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXJyLnNwbGljZShpICsgMSk7XG4gICAgcmV0dXJuIGFyci5sZW5ndGg7XG59XG5cbmV4cG9ydCBjb25zdCB0ZXN0ID0gKGFycikgPT4ge1xuICAgIGNvbnN0IGNvdW50ID0ge307XG4gICAgZm9yIChsZXQgdmFsdWUgb2YgYXJyKSB7XG4gICAgICAgIGNvdW50W3ZhbHVlXSA9IChjb3VudFt2YWx1ZV0gfHwgMCkgKyAxXG4gICAgfVxuXG4gICAgbGV0IHVuaXF1ZVZhbHVlcyA9IDA7XG4gICAgZm9yIChsZXQga2V5IGluIGNvdW50KSB7XG4gICAgICAgIGlmIChjb3VudFtrZXldID09PSAxKSB7XG4gICAgICAgICAgICB1bmlxdWVWYWx1ZXMrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmlxdWVWYWx1ZXNcbn1cblxuLy8gRmluZHMgaWYgYW55IGFyZ3VtZW50cyBhcmUgZHVscGxpY2F0ZXMgKG11bHRpUG9pbnRlcnMpXG5cbmNvbnN0IGFyZVRoZXJlRHVwcyA9ICguLi5hcmdzKSA9PiB7XG4gICAgLy8gSSBnZXQgdGhpcyBub3cuIFJlbGllcyBvbiB0aGUgcHJpbmNpcGxlIGlmIEEgPSBCIGFuZCBCID0gQyB0aGVuIEEgPSBDLCBleGNlcHQgdGhlIGludmVyc2VcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGogPSAxO1xuXG5cbiAgICB3aGlsZSggaiA8IGFyZ3MubGVuZ3RoICkge1xuICAgICAgICBpZiAoYXJnc1tpXSA9PT0gYXJnc1tqXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBqKytcbiAgICAgICAgICAgIGkrK1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBEZXRlcm1pbmUgd2hldGhlciBhIHBhaXIgaW4gdGhlIGFyZ3VtZW50IGFycmF5IGF2ZXJhZ2VzIHRvIHRoZSBhcmd1bWVudCBhdmVyYWdlXG5cblxuY29uc3QgY29udGFpbnNBdmVyYWdlID0gKGFyciwgYXYpID0+IHtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGogPSBhcnIubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGogIT09IGkpIHtcblxuICAgICAgICBpZiAoKGFycltqXSArIGFycltpXSkvMiA9PT0gYXYpIHJldHVybiB0cnVlO1xuXG4gICAgICAgIGlmICgoYXJyW2ldICsgYXJyW2pdKS8yICA8IGF2KSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBqLS07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmNvbnN0IGlzU3Vic2VxdWVuY2UgPSAoc3RyMSwgc3RyMikgPT4ge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgaiA9IDA7XG5cbiAgICB3aGlsZSAoIGkgPCBzdHIxLmxlbmd0aCkge1xuICAgICAgICBpZiAoc3RyMVtpXSA9PT0gc3RyMltqXSkge1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgaisrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaisrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGogPiBzdHIyLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuXG59IiwiZXhwb3J0IGNvbnN0IHBvd2VyID0gKGJhc2UsIGV4cCkgPT4ge1xuICAgIGlmIChleHAgPT09IDApIHJldHVybiAxO1xuICAgIHJldHVybiBiYXNlICogcG93ZXIoYmFzZSwgZXhwIC0gMSk7XG59XG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0T2ZBcnJheSA9IChhcnIpID0+IHtcbiAgICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDE7XG4gICAgbGV0IG15VmFyID0gYXJyLnNoaWZ0KCk7XG4gICAgcmV0dXJuIG15VmFyICogcHJvZHVjdE9mQXJyYXkoYXJyKTtcbn1cbiIsIi8vIEZpbmQgdGhlIGxvbmdlc3Qgc2VxdWVuY2Ugb2YgdW5pcXVlIGNoYXJhY3RlcnMgaW4gYSBzdHJpbmdcblxuLy8gXCJOYWl2ZSBzb2x1dGlvblwiIChwcmV0dHkgc3VyZSBpdCdzIGFjdHVhbGx5IE8oMSkgc2luY2UgdGhlcmUncyBhIGZpbml0ZSBudW1iZXIgb2YgdW5pcXVlIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzKVxuZXhwb3J0IGNvbnN0IGxvbmdlc3RTZXF1ZW5jZU5haXZlID0gKHN0cikgPT4ge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgaGlnaGVzdCA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gaTsgaiA8IHN0ci5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKCFhcnIuaW5jbHVkZXMoc3RyW2pdKSkge1xuICAgICAgICAgICAgICAgIGFyci5wdXNoKHN0cltqXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChhcnIubGVuZ3RoID4gaGlnaGVzdCkge1xuICAgICAgICAgICAgICAgICAgICBoaWdoZXN0ID0gYXJyLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXJyID0gW107XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9ICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaGlnaGVzdDtcbn1cblxuLy8gRmluZCB0aGUgbWF4aW11bSBzdW0gb2YgbiBjb25zZWN1dGl2ZSBkaWdpdHMgaW4gYW4gYXJyYXlcbmNvbnN0IG1heFN1bSA9IChhcnIsIG4pID0+IHtcbiAgICBpZiAoYXJyLmxlbmd0aCA8IG4pIHJldHVybiBudWxsO1xuXG4gICAgbGV0IHRlbXAgPSAwO1xuICAgIGxldCBtYXggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIG1heCArPSBhcnJbaV07XG4gICAgfVxuXG4gICAgdGVtcCA9IG1heDtcblxuICAgIGZvciAobGV0IGkgPSBudW07IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGVtcCAtPSAoYXJyW2kgLSBudW1dICsgYXJyW2ldKTtcbiAgICAgICAgaWYgKG1heCA8IHRlbXApIG1heCA9IHRlbXA7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1heDtcbn1cblxuY29uc3QgbWF4U3ViYXJyYXlTdW0gPSAoYXJyLCBuKSA9PiB7XG4gICAgaWYgKG4gPiBhcnIubGVuZ3RoKSByZXR1cm4gbnVsbDtcblxuICAgIGxldCBtYXhTdW0gPSAwO1xuICAgIGxldCB0ZW1wID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICBtYXhTdW0gKz0gYXJyW2ldO1xuICAgIH1cblxuICAgIHRlbXAgPSBtYXhTdW1cbiAgICBmb3IgKGxldCBpID0gbjsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICB0ZW1wID0gdGVtcCAtIGFycltpIC0gbl0gKyBhcnJbaV1cbiAgICAgICAgaWYgKHRlbXAgPiBtYXhTdW0pIHtcbiAgICAgICAgICAgIG1heFN1bSA9IHRlbXBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXhTdW1cbn1cbiAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBhbGdUaW1lciBmcm9tIFwiLi9hbGdvcml0aG1zL2FsZ1RpbWVyXCI7XG5pbXBvcnQge2lzQW5hZ3JhbUJhZCwgaXNBbmFncmFtLCBpc1NxdWFyZXN9IGZyb20gXCIuL2FsZ29yaXRobXMvZnJlcUNvdW50ZXJcIjtcbmltcG9ydCB7Y291bnRVbmlxdWVWYWx1ZXMsIHRlc3R9IGZyb20gXCIuL2FsZ29yaXRobXMvbXVsdGlQb2ludGVyc1wiO1xuaW1wb3J0IHsgbG9uZ2VzdFNlcXVlbmNlTmFpdmUgfSBmcm9tIFwiLi9hbGdvcml0aG1zL3NsaWRpbmdXaW5kb3dcIjtcbmltcG9ydCB7IHBvd2VyIH0gZnJvbSBcIi4vYWxnb3JpdGhtcy9yZWN1cnNpb25cIjtcbmltcG9ydCB7IGJpbmFyeVNlYXJjaCB9IGZyb20gXCIuL2FsZ29yaXRobXMvYmluYXJ5U2VhcmNoXCI7XG5cbmNvbnN0IGFycjEgPSBbMSwgMiwgMywgNCwgNCwgNCwgNSwgNiwgNywgNywgOCwgOCwgOCwgOSwgMTIsIDEwMDAwXTtcblxuY29uc3QgYXJyMiA9IGFycjEubWFwKGl0ZW0gPT4gaXRlbSoqMik7XG5cbmNvbnN0IHN0ciA9IFwiY2FsY3VsYXRlXCJcblxuXG5jb25zdCBhcnIzID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdO1xuY29uc29sZS5sb2coYmluYXJ5U2VhcmNoKGFycjEsIDcpKVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=