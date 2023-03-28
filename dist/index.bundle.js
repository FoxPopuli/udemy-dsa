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

/***/ "./src/algorithms/divideAndConquor.js":
/*!********************************************!*\
  !*** ./src/algorithms/divideAndConquor.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "binarySearch": () => (/* binding */ binarySearch)
/* harmony export */ });
const binarySearch = (arr, val) => {
    if (arr.length === 1 && arr[0] !== val) return -1;
    
    let ind = Math.floor((arr.length - 1)/2);

    if (arr[ind] === val) return ind;
    console.log(ind)

    let newArr;
    if (arr[ind] < val) {
        newArr = arr.splice(ind)
    } else {
        newArr = arr.splice(0, ind);
    }

    console.log(newArr)
    binarySearch(newArr, val);

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

console.log(sameFrequency(123, 321))


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
/* harmony import */ var _algorithms_divideAndConquor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./algorithms/divideAndConquor */ "./src/algorithms/divideAndConquor.js");






const arr1 = [1, 2, 3, 4, 4, 4, 5, 6, 7, 7, 8, 8, 8, 9, 12, 10000];
console.log((0,_algorithms_multiPointers__WEBPACK_IMPORTED_MODULE_2__.countUniqueValues)(arr1));
console.log((0,_algorithms_multiPointers__WEBPACK_IMPORTED_MODULE_2__.test)(arr1))

const arr2 = arr1.map(item => item**2);
console.log((0,_algorithms_freqCounter__WEBPACK_IMPORTED_MODULE_1__.isSquares)(arr1, arr2));

const str = "calculate"

console.log((0,_algorithms_slidingWindow__WEBPACK_IMPORTED_MODULE_3__.longestSequenceNaive)(str))

const arr3 = [0, 1, 2, 3, 4, 5, 6, 7, 8];

console.log((0,_algorithms_divideAndConquor__WEBPACK_IMPORTED_MODULE_4__.binarySearch)(arr3, 1));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxrRUFBUzs7QUFFckI7O0FBRUEsWUFBWSwrRUFBb0I7O0FBRWhDOztBQUVBLFlBQVksMEVBQVksVyIsInNvdXJjZXMiOlsid2VicGFjazovL3VkZW15LWRzYS8uL3NyYy9hbGdvcml0aG1zL2FsZ1RpbWVyLmpzIiwid2VicGFjazovL3VkZW15LWRzYS8uL3NyYy9hbGdvcml0aG1zL2RpdmlkZUFuZENvbnF1b3IuanMiLCJ3ZWJwYWNrOi8vdWRlbXktZHNhLy4vc3JjL2FsZ29yaXRobXMvZnJlcUNvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vdWRlbXktZHNhLy4vc3JjL2FsZ29yaXRobXMvbXVsdGlQb2ludGVycy5qcyIsIndlYnBhY2s6Ly91ZGVteS1kc2EvLi9zcmMvYWxnb3JpdGhtcy9zbGlkaW5nV2luZG93LmpzIiwid2VicGFjazovL3VkZW15LWRzYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91ZGVteS1kc2Evd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3VkZW15LWRzYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3VkZW15LWRzYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VkZW15LWRzYS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhbGdUaW1lciA9IChhbGcpID0+IHtcbiAgICBjb25zdCB0MSA9IHBlcmZvcm1hbmNlLm5vdygpXG4gICAgYWxnO1xuICAgIGNvbnN0IHQyID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgICBjb25zb2xlLmxvZygodDIgLSB0MSkudG9GaXhlZCgxMikpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhbGdUaW1lcjsiLCJleHBvcnQgY29uc3QgYmluYXJ5U2VhcmNoID0gKGFyciwgdmFsKSA9PiB7XG4gICAgaWYgKGFyci5sZW5ndGggPT09IDEgJiYgYXJyWzBdICE9PSB2YWwpIHJldHVybiAtMTtcbiAgICBcbiAgICBsZXQgaW5kID0gTWF0aC5mbG9vcigoYXJyLmxlbmd0aCAtIDEpLzIpO1xuXG4gICAgaWYgKGFycltpbmRdID09PSB2YWwpIHJldHVybiBpbmQ7XG4gICAgY29uc29sZS5sb2coaW5kKVxuXG4gICAgbGV0IG5ld0FycjtcbiAgICBpZiAoYXJyW2luZF0gPCB2YWwpIHtcbiAgICAgICAgbmV3QXJyID0gYXJyLnNwbGljZShpbmQpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3QXJyID0gYXJyLnNwbGljZSgwLCBpbmQpO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKG5ld0FycilcbiAgICBiaW5hcnlTZWFyY2gobmV3QXJyLCB2YWwpO1xuXG59ICIsIlxuXG4vLyBBbmFncmFtcyBPKG5eMilcbmV4cG9ydCBjb25zdCBpc0FuYWdyYW1CYWQgPSAoc3RyMSwgc3RyMikgPT4ge1xuICAgIGlmIChzdHIxLmxlbmd0aCAhPT0gc3RyMi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAobGV0IGxldHRlcjEgb2Ygc3RyMSkge1xuICAgICAgICBpZiAoIXN0cjIuaW5jbHVkZXMobGV0dGVyMSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBcbiAgICB9ICBcblxuICAgIHJldHVybiB0cnVlO1xufVxuXG5cbi8vIEFuYWdyYW1zIE8obilcbmV4cG9ydCBjb25zdCBpc0FuYWdyYW0gPSAoc3RyMSwgc3RyMikgPT4ge1xuICAgIGlmIChzdHIxLmxlbmd0aCAhPT0gc3RyMi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICBcbiAgICBjb25zdCBjb3VudDEgPSB7fTtcbiAgICBjb25zdCBjb3VudDIgPSB7fTtcblxuICAgIGZvciAobGV0IHZhbDEgb2Ygc3RyMSkge1xuICAgICAgICBjb3VudDFbdmFsMV0gPSAoY291bnQxW3ZhbDFdIHx8IDApICsgMTsgLy8gaWYga2V5IGV4aXN0cywgaW5jcmVtZW50IGl0IGJ5IDEuIElmIG5vdCwgaW5pdGlhbGl6ZSB0byB6ZXJvIGFuZCBpbmNyZW1lbnQgYnkgMVxuICAgIH1cblxuICAgIGZvciAobGV0IHZhbDIgb2Ygc3RyMikge1xuICAgICAgICBjb3VudDJbdmFsMl0gPSAoY291bnQyW3ZhbDJdIHx8IDApICsgMTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gY291bnQxKSB7XG4gICAgICAgIGlmICghY291bnQyLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb3VudDJba2V5XSAhPT0gY291bnQxW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbi8vIFVzZXMgdGhlIGZyZXF1ZW5jeSBjb3VudGVyIHBhdHRlcm4gdG8gZGV0ZXJtaW5lIGlmIG9uZSBhcnJheSBjb250YWlucyBvbmx5IHNxdWFyZXMgb2YgYW5vdGhlciBhcnJheVxuZXhwb3J0IGNvbnN0IGlzU3F1YXJlcyA9IChhcnIxLCBhcnIyKSA9PiB7XG4gICAgaWYgKGFycjEubGVuZ3RoICE9PSBhcnIyLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG5cbiAgICBjb25zdCBjb3VudDEgPSB7fVxuICAgIGNvbnN0IGNvdW50MiA9IHt9XG5cbiAgICBmb3IgKGxldCBudW0gb2YgYXJyMSkge1xuICAgICAgICBjb3VudDFbbnVtXSA9IChjb3VudDFbbnVtXSB8fCAwKSArIDE7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgbnVtIG9mIGFycjIpIHtcbiAgICAgICAgY291bnQyW251bV0gPSAoY291bnQyW251bV0gfHwgMCkgKyAxO1xuICAgIH1cblxuICAgIGZvciAobGV0IGtleSBpbiBjb3VudDEpIHtcbiAgICAgICAgaWYgKCFjb3VudDIuaGFzT3duUHJvcGVydHkoa2V5KioyKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdHJ1ZTtcblxufVxuXG5cbi8vIEdpdmVuIHR3byBwb3NpdGl2ZSBpbnRlZ2VycyBmaW5kIGlmIHRoZSBmcmVxdWVuY2VzIG9mIGVhY2ggZGlnaXQgYXJlIHRoZSBzYW1lXG5cbmNvbnN0IHNhbWVGcmVxdWVuY3kgPSAobjEsIG4yKSA9PiB7XG4gICAgY29uc3QgYXJyMSA9IG4xLnRvU3RyaW5nKCkuc3BsaXQoJycpO1xuICAgIGNvbnN0IGFycjIgPSBuMi50b1N0cmluZygpLnNwbGl0KCcnKTtcblxuICAgIGlmIChhcnIxLmxlbmd0aCAhPT0gYXJyMi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IGNvdW50MSA9IHt9O1xuICAgIGNvbnN0IGNvdW50MiA9IHt9O1xuXG4gICAgZm9yIChsZXQgbnVtIG9mIGFycjEpIHtcbiAgICAgICAgY291bnQxW251bV0gPSAoY291bnQxW251bV0gfHwgMCkgKyAxO1xuICAgIH1cblxuICAgIGZvciAobGV0IG51bSBvZiBhcnIyKSB7XG4gICAgICAgIGNvdW50MltudW1dID0gKGNvdW50MltudW1dIHx8IDApICsgMTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gY291bnQxKSB7XG4gICAgICAgIGlmIChjb3VudDFba2V5XSAhPT0gY291bnQyW2tleV0pIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuY29uc29sZS5sb2coc2FtZUZyZXF1ZW5jeSgxMjMsIDMyMSkpXG5cblxuLy8gRmluZHMgaWYgYW55IGFyZ3VtZW50cyBhcmUgZHVscGxpY2F0ZXMgKGZyZXFDb3VudGVyKVxuXG5jb25zdCBhcmVUaGVyZUR1cHMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IGNvdW50ID0ge31cbiAgICBmb3IgKGxldCBhcmcgb2YgYXJncykge1xuICAgICAgICBjb3VudFthcmddID0gKGNvdW50W2FyZ10gfHwgMCkgKyAxO1xuICAgIH1cblxuICAgIGZvciAobGV0IGtleSBpbiBjb3VudCkge1xuICAgICAgICBpZiAoY291bnRba2V5XSA+IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiZXhwb3J0IGNvbnN0IGNvdW50VW5pcXVlVmFsdWVzID0gKGFycikgPT4ge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgaiA9IDE7XG5cbiAgICB3aGlsZSAoaiA8IGFyci5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGFycltpXSA9PT0gYXJyW2pdKSB7XG4gICAgICAgICAgICBqKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBhcnJbaV0gPSBhcnJbal07XG4gICAgICAgICAgICBqKys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhcnIuc3BsaWNlKGkgKyAxKTtcbiAgICByZXR1cm4gYXJyLmxlbmd0aDtcbn1cblxuZXhwb3J0IGNvbnN0IHRlc3QgPSAoYXJyKSA9PiB7XG4gICAgY29uc3QgY291bnQgPSB7fTtcbiAgICBmb3IgKGxldCB2YWx1ZSBvZiBhcnIpIHtcbiAgICAgICAgY291bnRbdmFsdWVdID0gKGNvdW50W3ZhbHVlXSB8fCAwKSArIDFcbiAgICB9XG5cbiAgICBsZXQgdW5pcXVlVmFsdWVzID0gMDtcbiAgICBmb3IgKGxldCBrZXkgaW4gY291bnQpIHtcbiAgICAgICAgaWYgKGNvdW50W2tleV0gPT09IDEpIHtcbiAgICAgICAgICAgIHVuaXF1ZVZhbHVlcysrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaXF1ZVZhbHVlc1xufVxuXG4vLyBGaW5kcyBpZiBhbnkgYXJndW1lbnRzIGFyZSBkdWxwbGljYXRlcyAobXVsdGlQb2ludGVycylcblxuY29uc3QgYXJlVGhlcmVEdXBzID0gKC4uLmFyZ3MpID0+IHtcbiAgICAvLyBJIGdldCB0aGlzIG5vdy4gUmVsaWVzIG9uIHRoZSBwcmluY2lwbGUgaWYgQSA9IEIgYW5kIEIgPSBDIHRoZW4gQSA9IEMsIGV4Y2VwdCB0aGUgaW52ZXJzZVxuICAgIGxldCBpID0gMDtcbiAgICBsZXQgaiA9IDE7XG5cblxuICAgIHdoaWxlKCBqIDwgYXJncy5sZW5ndGggKSB7XG4gICAgICAgIGlmIChhcmdzW2ldID09PSBhcmdzW2pdKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGorK1xuICAgICAgICAgICAgaSsrXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIERldGVybWluZSB3aGV0aGVyIGEgcGFpciBpbiB0aGUgYXJndW1lbnQgYXJyYXkgYXZlcmFnZXMgdG8gdGhlIGFyZ3VtZW50IGF2ZXJhZ2VcblxuXG5jb25zdCBjb250YWluc0F2ZXJhZ2UgPSAoYXJyLCBhdikgPT4ge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgaiA9IGFyci5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaiAhPT0gaSkge1xuXG4gICAgICAgIGlmICgoYXJyW2pdICsgYXJyW2ldKS8yID09PSBhdikgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgaWYgKChhcnJbaV0gKyBhcnJbal0pLzIgIDwgYXYpIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGotLTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuY29uc3QgaXNTdWJzZXF1ZW5jZSA9IChzdHIxLCBzdHIyKSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBqID0gMDtcblxuICAgIHdoaWxlICggaSA8IHN0cjEubGVuZ3RoKSB7XG4gICAgICAgIGlmIChzdHIxW2ldID09PSBzdHIyW2pdKSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBqKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBqKys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA+IHN0cjIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG5cbn0iLCIvLyBGaW5kIHRoZSBsb25nZXN0IHNlcXVlbmNlIG9mIHVuaXF1ZSBjaGFyYWN0ZXJzIGluIGEgc3RyaW5nXG5cbi8vIFwiTmFpdmUgc29sdXRpb25cIiAocHJldHR5IHN1cmUgaXQncyBhY3R1YWxseSBPKDEpIHNpbmNlIHRoZXJlJ3MgYSBmaW5pdGUgbnVtYmVyIG9mIHVuaXF1ZSBhbHBoYW51bWVyaWMgY2hhcmFjdGVycylcbmV4cG9ydCBjb25zdCBsb25nZXN0U2VxdWVuY2VOYWl2ZSA9IChzdHIpID0+IHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgbGV0IGhpZ2hlc3QgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IGk7IGogPCBzdHIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmICghYXJyLmluY2x1ZGVzKHN0cltqXSkpIHtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChzdHJbal0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyLmxlbmd0aCA+IGhpZ2hlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlnaGVzdCA9IGFyci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFyciA9IFtdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGhpZ2hlc3Q7XG59XG5cbi8vIEZpbmQgdGhlIG1heGltdW0gc3VtIG9mIG4gY29uc2VjdXRpdmUgZGlnaXRzIGluIGFuIGFycmF5XG5jb25zdCBtYXhTdW0gPSAoYXJyLCBuKSA9PiB7XG4gICAgaWYgKGFyci5sZW5ndGggPCBuKSByZXR1cm4gbnVsbDtcblxuICAgIGxldCB0ZW1wID0gMDtcbiAgICBsZXQgbWF4ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICBtYXggKz0gYXJyW2ldO1xuICAgIH1cblxuICAgIHRlbXAgPSBtYXg7XG5cbiAgICBmb3IgKGxldCBpID0gbnVtOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRlbXAgLT0gKGFycltpIC0gbnVtXSArIGFycltpXSk7XG4gICAgICAgIGlmIChtYXggPCB0ZW1wKSBtYXggPSB0ZW1wO1xuICAgIH1cblxuICAgIHJldHVybiBtYXg7XG59XG5cbmNvbnN0IG1heFN1YmFycmF5U3VtID0gKGFyciwgbikgPT4ge1xuICAgIGlmIChuID4gYXJyLmxlbmd0aCkgcmV0dXJuIG51bGw7XG5cbiAgICBsZXQgbWF4U3VtID0gMDtcbiAgICBsZXQgdGVtcCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgbWF4U3VtICs9IGFycltpXTtcbiAgICB9XG5cbiAgICB0ZW1wID0gbWF4U3VtXG4gICAgZm9yIChsZXQgaSA9IG47IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGVtcCA9IHRlbXAgLSBhcnJbaSAtIG5dICsgYXJyW2ldXG4gICAgICAgIGlmICh0ZW1wID4gbWF4U3VtKSB7XG4gICAgICAgICAgICBtYXhTdW0gPSB0ZW1wXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF4U3VtXG59XG4gIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgYWxnVGltZXIgZnJvbSBcIi4vYWxnb3JpdGhtcy9hbGdUaW1lclwiO1xuaW1wb3J0IHtpc0FuYWdyYW1CYWQsIGlzQW5hZ3JhbSwgaXNTcXVhcmVzfSBmcm9tIFwiLi9hbGdvcml0aG1zL2ZyZXFDb3VudGVyXCI7XG5pbXBvcnQge2NvdW50VW5pcXVlVmFsdWVzLCB0ZXN0fSBmcm9tIFwiLi9hbGdvcml0aG1zL211bHRpUG9pbnRlcnNcIjtcbmltcG9ydCB7IGxvbmdlc3RTZXF1ZW5jZU5haXZlIH0gZnJvbSBcIi4vYWxnb3JpdGhtcy9zbGlkaW5nV2luZG93XCI7XG5pbXBvcnQgeyBiaW5hcnlTZWFyY2ggfSBmcm9tIFwiLi9hbGdvcml0aG1zL2RpdmlkZUFuZENvbnF1b3JcIjtcblxuY29uc3QgYXJyMSA9IFsxLCAyLCAzLCA0LCA0LCA0LCA1LCA2LCA3LCA3LCA4LCA4LCA4LCA5LCAxMiwgMTAwMDBdO1xuY29uc29sZS5sb2coY291bnRVbmlxdWVWYWx1ZXMoYXJyMSkpO1xuY29uc29sZS5sb2codGVzdChhcnIxKSlcblxuY29uc3QgYXJyMiA9IGFycjEubWFwKGl0ZW0gPT4gaXRlbSoqMik7XG5jb25zb2xlLmxvZyhpc1NxdWFyZXMoYXJyMSwgYXJyMikpO1xuXG5jb25zdCBzdHIgPSBcImNhbGN1bGF0ZVwiXG5cbmNvbnNvbGUubG9nKGxvbmdlc3RTZXF1ZW5jZU5haXZlKHN0cikpXG5cbmNvbnN0IGFycjMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOF07XG5cbmNvbnNvbGUubG9nKGJpbmFyeVNlYXJjaChhcnIzLCAxKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9