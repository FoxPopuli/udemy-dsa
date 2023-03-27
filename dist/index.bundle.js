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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQ1JoQjtBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ087QUFDUDs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ25FTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDLHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBOztBQUVBOztBQUVBLHNCQUFzQixnQkFBZ0I7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7OztVQzFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ042QztBQUMrQjtBQUNUO0FBQ0Q7QUFDTDs7QUFFN0Q7QUFDQSxZQUFZLDRFQUFpQjtBQUM3QixZQUFZLCtEQUFJOztBQUVoQjtBQUNBLFlBQVksa0VBQVM7O0FBRXJCOztBQUVBLFlBQVksK0VBQW9COztBQUVoQzs7QUFFQSxZQUFZLDBFQUFZLFciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91ZGVteS1kc2EvLi9zcmMvYWxnb3JpdGhtcy9hbGdUaW1lci5qcyIsIndlYnBhY2s6Ly91ZGVteS1kc2EvLi9zcmMvYWxnb3JpdGhtcy9kaXZpZGVBbmRDb25xdW9yLmpzIiwid2VicGFjazovL3VkZW15LWRzYS8uL3NyYy9hbGdvcml0aG1zL2ZyZXFDb3VudGVyLmpzIiwid2VicGFjazovL3VkZW15LWRzYS8uL3NyYy9hbGdvcml0aG1zL211bHRpUG9pbnRlcnMuanMiLCJ3ZWJwYWNrOi8vdWRlbXktZHNhLy4vc3JjL2FsZ29yaXRobXMvc2xpZGluZ1dpbmRvdy5qcyIsIndlYnBhY2s6Ly91ZGVteS1kc2Evd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdWRlbXktZHNhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly91ZGVteS1kc2Evd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly91ZGVteS1kc2Evd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91ZGVteS1kc2EvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWxnVGltZXIgPSAoYWxnKSA9PiB7XG4gICAgY29uc3QgdDEgPSBwZXJmb3JtYW5jZS5ub3coKVxuICAgIGFsZztcbiAgICBjb25zdCB0MiA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG4gICAgY29uc29sZS5sb2coKHQyIC0gdDEpLnRvRml4ZWQoMTIpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWxnVGltZXI7IiwiZXhwb3J0IGNvbnN0IGJpbmFyeVNlYXJjaCA9IChhcnIsIHZhbCkgPT4ge1xuICAgIGlmIChhcnIubGVuZ3RoID09PSAxICYmIGFyclswXSAhPT0gdmFsKSByZXR1cm4gLTE7XG4gICAgXG4gICAgbGV0IGluZCA9IE1hdGguZmxvb3IoKGFyci5sZW5ndGggLSAxKS8yKTtcblxuICAgIGlmIChhcnJbaW5kXSA9PT0gdmFsKSByZXR1cm4gaW5kO1xuICAgIGNvbnNvbGUubG9nKGluZClcblxuICAgIGxldCBuZXdBcnI7XG4gICAgaWYgKGFycltpbmRdIDwgdmFsKSB7XG4gICAgICAgIG5ld0FyciA9IGFyci5zcGxpY2UoaW5kKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0FyciA9IGFyci5zcGxpY2UoMCwgaW5kKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhuZXdBcnIpXG4gICAgYmluYXJ5U2VhcmNoKG5ld0FyciwgdmFsKTtcblxufSAiLCJcblxuLy8gQW5hZ3JhbXMgTyhuXjIpXG5leHBvcnQgY29uc3QgaXNBbmFncmFtQmFkID0gKHN0cjEsIHN0cjIpID0+IHtcbiAgICBpZiAoc3RyMS5sZW5ndGggIT09IHN0cjIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBsZXR0ZXIxIG9mIHN0cjEpIHtcbiAgICAgICAgaWYgKCFzdHIyLmluY2x1ZGVzKGxldHRlcjEpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gXG4gICAgfSAgXG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuXG4vLyBBbmFncmFtcyBPKG4pXG5leHBvcnQgY29uc3QgaXNBbmFncmFtID0gKHN0cjEsIHN0cjIpID0+IHtcbiAgICBpZiAoc3RyMS5sZW5ndGggIT09IHN0cjIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgXG4gICAgY29uc3QgY291bnQxID0ge307XG4gICAgY29uc3QgY291bnQyID0ge307XG5cbiAgICBmb3IgKGxldCB2YWwxIG9mIHN0cjEpIHtcbiAgICAgICAgY291bnQxW3ZhbDFdID0gKGNvdW50MVt2YWwxXSB8fCAwKSArIDE7IC8vIGlmIGtleSBleGlzdHMsIGluY3JlbWVudCBpdCBieSAxLiBJZiBub3QsIGluaXRpYWxpemUgdG8gemVybyBhbmQgaW5jcmVtZW50IGJ5IDFcbiAgICB9XG5cbiAgICBmb3IgKGxldCB2YWwyIG9mIHN0cjIpIHtcbiAgICAgICAgY291bnQyW3ZhbDJdID0gKGNvdW50Mlt2YWwyXSB8fCAwKSArIDE7XG4gICAgfVxuXG4gICAgZm9yIChsZXQga2V5IGluIGNvdW50MSkge1xuICAgICAgICBpZiAoIWNvdW50Mi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY291bnQyW2tleV0gIT09IGNvdW50MVtrZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufVxuXG4vLyBVc2VzIHRoZSBmcmVxdWVuY3kgY291bnRlciBwYXR0ZXJuIHRvIGRldGVybWluZSBpZiBvbmUgYXJyYXkgY29udGFpbnMgb25seSBzcXVhcmVzIG9mIGFub3RoZXIgYXJyYXlcbmV4cG9ydCBjb25zdCBpc1NxdWFyZXMgPSAoYXJyMSwgYXJyMikgPT4ge1xuICAgIGlmIChhcnIxLmxlbmd0aCAhPT0gYXJyMi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuXG4gICAgY29uc3QgY291bnQxID0ge31cbiAgICBjb25zdCBjb3VudDIgPSB7fVxuXG4gICAgZm9yIChsZXQgbnVtIG9mIGFycjEpIHtcbiAgICAgICAgY291bnQxW251bV0gPSAoY291bnQxW251bV0gfHwgMCkgKyAxO1xuICAgIH1cblxuICAgIGZvciAobGV0IG51bSBvZiBhcnIyKSB7XG4gICAgICAgIGNvdW50MltudW1dID0gKGNvdW50MltudW1dIHx8IDApICsgMTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gY291bnQxKSB7XG4gICAgICAgIGlmICghY291bnQyLmhhc093blByb3BlcnR5KGtleSoqMikpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRydWU7XG5cbn0iLCJleHBvcnQgY29uc3QgY291bnRVbmlxdWVWYWx1ZXMgPSAoYXJyKSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBqID0gMTtcblxuICAgIHdoaWxlIChqIDwgYXJyLmxlbmd0aCkge1xuICAgICAgICBpZiAoYXJyW2ldID09PSBhcnJbal0pIHtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGFycltpXSA9IGFycltqXTtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFyci5zcGxpY2UoaSArIDEpO1xuICAgIHJldHVybiBhcnIubGVuZ3RoO1xufVxuXG5leHBvcnQgY29uc3QgdGVzdCA9IChhcnIpID0+IHtcbiAgICBjb25zdCBjb3VudCA9IHt9O1xuICAgIGZvciAobGV0IHZhbHVlIG9mIGFycikge1xuICAgICAgICBjb3VudFt2YWx1ZV0gPSAoY291bnRbdmFsdWVdIHx8IDApICsgMVxuICAgIH1cblxuICAgIGxldCB1bmlxdWVWYWx1ZXMgPSAwO1xuICAgIGZvciAobGV0IGtleSBpbiBjb3VudCkge1xuICAgICAgICBpZiAoY291bnRba2V5XSA9PT0gMSkge1xuICAgICAgICAgICAgdW5pcXVlVmFsdWVzKys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5pcXVlVmFsdWVzXG59XG4iLCIvLyBGaW5kIHRoZSBsb25nZXN0IHNlcXVlbmNlIG9mIHVuaXF1ZSBjaGFyYWN0ZXJzIGluIGEgc3RyaW5nXG5cbi8vIFwiTmFpdmUgc29sdXRpb25cIiAocHJldHR5IHN1cmUgaXQncyBhY3R1YWxseSBPKDEpIHNpbmNlIHRoZXJlJ3MgYSBmaW5pdGUgbnVtYmVyIG9mIHVuaXF1ZSBhbHBoYW51bWVyaWMgY2hhcmFjdGVycylcbmV4cG9ydCBjb25zdCBsb25nZXN0U2VxdWVuY2VOYWl2ZSA9IChzdHIpID0+IHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgbGV0IGhpZ2hlc3QgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IGk7IGogPCBzdHIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmICghYXJyLmluY2x1ZGVzKHN0cltqXSkpIHtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChzdHJbal0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyLmxlbmd0aCA+IGhpZ2hlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlnaGVzdCA9IGFyci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFyciA9IFtdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGhpZ2hlc3Q7XG59XG5cbi8vIEZpbmQgdGhlIG1heGltdW0gc3VtIG9mIG4gY29uc2VjdXRpdmUgZGlnaXRzIGluIGFuIGFycmF5XG5jb25zdCBtYXhTdW0gPSAoYXJyLCBuKSA9PiB7XG4gICAgaWYgKGFyci5sZW5ndGggPCBuKSByZXR1cm4gbnVsbDtcblxuICAgIGxldCB0ZW1wID0gMDtcbiAgICBsZXQgbWF4ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICBtYXggKz0gYXJyW2ldO1xuICAgIH1cblxuICAgIHRlbXAgPSBtYXg7XG5cbiAgICBmb3IgKGxldCBpID0gbnVtOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRlbXAgLT0gKGFycltpIC0gbnVtXSArIGFycltpXSk7XG4gICAgICAgIGlmIChtYXggPCB0ZW1wKSBtYXggPSB0ZW1wO1xuICAgIH1cblxuICAgIHJldHVybiBtYXg7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgYWxnVGltZXIgZnJvbSBcIi4vYWxnb3JpdGhtcy9hbGdUaW1lclwiO1xuaW1wb3J0IHtpc0FuYWdyYW1CYWQsIGlzQW5hZ3JhbSwgaXNTcXVhcmVzfSBmcm9tIFwiLi9hbGdvcml0aG1zL2ZyZXFDb3VudGVyXCI7XG5pbXBvcnQge2NvdW50VW5pcXVlVmFsdWVzLCB0ZXN0fSBmcm9tIFwiLi9hbGdvcml0aG1zL211bHRpUG9pbnRlcnNcIjtcbmltcG9ydCB7IGxvbmdlc3RTZXF1ZW5jZU5haXZlIH0gZnJvbSBcIi4vYWxnb3JpdGhtcy9zbGlkaW5nV2luZG93XCI7XG5pbXBvcnQgeyBiaW5hcnlTZWFyY2ggfSBmcm9tIFwiLi9hbGdvcml0aG1zL2RpdmlkZUFuZENvbnF1b3JcIjtcblxuY29uc3QgYXJyMSA9IFsxLCAyLCAzLCA0LCA0LCA0LCA1LCA2LCA3LCA3LCA4LCA4LCA4LCA5LCAxMiwgMTAwMDBdO1xuY29uc29sZS5sb2coY291bnRVbmlxdWVWYWx1ZXMoYXJyMSkpO1xuY29uc29sZS5sb2codGVzdChhcnIxKSlcblxuY29uc3QgYXJyMiA9IGFycjEubWFwKGl0ZW0gPT4gaXRlbSoqMik7XG5jb25zb2xlLmxvZyhpc1NxdWFyZXMoYXJyMSwgYXJyMikpO1xuXG5jb25zdCBzdHIgPSBcImNhbGN1bGF0ZVwiXG5cbmNvbnNvbGUubG9nKGxvbmdlc3RTZXF1ZW5jZU5haXZlKHN0cikpXG5cbmNvbnN0IGFycjMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOF07XG5cbmNvbnNvbGUubG9nKGJpbmFyeVNlYXJjaChhcnIzLCAxKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9