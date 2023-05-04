/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data-structures/binaryHeaps.js":
/*!********************************************!*\
  !*** ./src/data-structures/binaryHeaps.js ***!
  \********************************************/
/***/ (() => {


// Binary Heaps
// Each parent has at most 2 children
// All children of each nodeare as full as they can be
// Left nodes are filled in first
// No implied ordering between siblings
// 2 Types of binary heaps:
//      1) Max - Every child node is smaller than its parent
//      2) Min - Every child node is larger than its parent

// Used in priority queues, which are very common

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);

        let index = this.values.length - 1;
        const element = this.values[index];
        while(index > 0) {
            let parentIndex = Math.floor((index-1)/2);;
            let parent = this.values[parentIndex]

            if (parent >= element) break;
            this.values[parentIndex] = element
            this.values[index] = parent;

            index = parentIndex;
        }

        return this;
    }

    sinkDown() {
        let idx = 0;
        const element = this.values[0];
        while(true) {
            // 1) get child indices
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;

            // 2) Initialize child values
            let leftChild, rightChild;

            // 3) Keep track of if a swap happened this iteration
            let swap = null;


            // 4) Check if indices are in bounds and if so, assign child values
            if (this.values[leftChildIdx]) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }

            if (this.values[rightChildIdx]) {
                rightChild = this.values[rightChildIdx];
                if (
                    // What a travesty, find a way to fix 
                    // Ensures that the larger child gets assigned to swap
                    // if both are larger than element
                    (!swap && rightChild > element) ||
                    (swap && rightChild > leftChild) 
                ) {
                    swap = rightChildIdx;
                }
            }


            if (!swap) break;

            // 5) Do the swap
            this.values[idx]  = this.values[swap];
            this.values[swap] = element;

            // 6) Set current index to that of the swapped child
            idx = swap;
        }
    }

    extractMax() {
        const max = this.values[0]
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end
            this.sinkDown();
        }

        return max;

    }


}

 
const binary = new MaxBinaryHeap()
binary.insert(41)
binary.insert(43)
binary.insert(19)
binary.insert(12)
binary.insert(55)
console.log(binary)
console.log(binary.extractMax());
console.log(binary.extractMax());

console.log(binary)
// binary


// Priority queue
// Data structure where each element has a priority
// Elements with higher priorities are served before elements with lower priorities

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

// Priority Queue using a min binary heap

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    bubbleUp() {
        // Lower value = higher priority (UNIX style)
        let idx = this.values.length - 1;
        const element = this.values[idx];

        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];

            if (parent.priority < element.priority) break;

            this.values[parentIdx] = element;
            this.values[idx] = parent;

            idx = parentIdx;

        }

    }

    enqueue(val, priority) {
        const newNode = new Node(val, priority);
        this.values.push(newNode);
        // this.bubbleUp()
        return this;
    }

    dequeue() {
        return;
    }
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_structures_binaryHeaps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-structures/binaryHeaps */ "./src/data-structures/binaryHeaps.js");
/* harmony import */ var _data_structures_binaryHeaps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_structures_binaryHeaps__WEBPACK_IMPORTED_MODULE_0__);
// import "./algorithms/freqCounter";
// import "./algorithms/multiPointers";
// import "./algorithms/slidingWindow";
// import "./algorithms/recursion";
// import "./algorithms/binarySearch";
// import "./algorithms/stringSearch";
// import "./algorithms/bubbleSort";
// import "./algorithms/selectionSort";
// import "./algorithms/insertionSort";
// import "./algorithms/mergeSort";
// import "./algorithms/radixSort";


// import "./data-structures/classRefresher"
// import "./data-structures/singlyLinkedList"
// import "./data-structures/doublyLinkedLists"
// import "./data-structures/stacksAndQueues"
// import "./data-structures/trees"
// import "./data-structures/treeTraversal"
// import "./incomeTax"



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNsS0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91ZGVteS1kc2EvLi9zcmMvZGF0YS1zdHJ1Y3R1cmVzL2JpbmFyeUhlYXBzLmpzIiwid2VicGFjazovL3VkZW15LWRzYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91ZGVteS1kc2Evd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdWRlbXktZHNhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly91ZGVteS1kc2Evd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly91ZGVteS1kc2Evd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91ZGVteS1kc2EvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBCaW5hcnkgSGVhcHNcbi8vIEVhY2ggcGFyZW50IGhhcyBhdCBtb3N0IDIgY2hpbGRyZW5cbi8vIEFsbCBjaGlsZHJlbiBvZiBlYWNoIG5vZGVhcmUgYXMgZnVsbCBhcyB0aGV5IGNhbiBiZVxuLy8gTGVmdCBub2RlcyBhcmUgZmlsbGVkIGluIGZpcnN0XG4vLyBObyBpbXBsaWVkIG9yZGVyaW5nIGJldHdlZW4gc2libGluZ3Ncbi8vIDIgVHlwZXMgb2YgYmluYXJ5IGhlYXBzOlxuLy8gICAgICAxKSBNYXggLSBFdmVyeSBjaGlsZCBub2RlIGlzIHNtYWxsZXIgdGhhbiBpdHMgcGFyZW50XG4vLyAgICAgIDIpIE1pbiAtIEV2ZXJ5IGNoaWxkIG5vZGUgaXMgbGFyZ2VyIHRoYW4gaXRzIHBhcmVudFxuXG4vLyBVc2VkIGluIHByaW9yaXR5IHF1ZXVlcywgd2hpY2ggYXJlIHZlcnkgY29tbW9uXG5cbmNsYXNzIE1heEJpbmFyeUhlYXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnZhbHVlcyA9IFtdO1xuICAgIH1cblxuICAgIGluc2VydCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlcy5wdXNoKHZhbHVlKTtcblxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnZhbHVlcy5sZW5ndGggLSAxO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy52YWx1ZXNbaW5kZXhdO1xuICAgICAgICB3aGlsZShpbmRleCA+IDApIHtcbiAgICAgICAgICAgIGxldCBwYXJlbnRJbmRleCA9IE1hdGguZmxvb3IoKGluZGV4LTEpLzIpOztcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLnZhbHVlc1twYXJlbnRJbmRleF1cblxuICAgICAgICAgICAgaWYgKHBhcmVudCA+PSBlbGVtZW50KSBicmVhaztcbiAgICAgICAgICAgIHRoaXMudmFsdWVzW3BhcmVudEluZGV4XSA9IGVsZW1lbnRcbiAgICAgICAgICAgIHRoaXMudmFsdWVzW2luZGV4XSA9IHBhcmVudDtcblxuICAgICAgICAgICAgaW5kZXggPSBwYXJlbnRJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNpbmtEb3duKCkge1xuICAgICAgICBsZXQgaWR4ID0gMDtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMudmFsdWVzWzBdO1xuICAgICAgICB3aGlsZSh0cnVlKSB7XG4gICAgICAgICAgICAvLyAxKSBnZXQgY2hpbGQgaW5kaWNlc1xuICAgICAgICAgICAgbGV0IGxlZnRDaGlsZElkeCA9IDIgKiBpZHggKyAxO1xuICAgICAgICAgICAgbGV0IHJpZ2h0Q2hpbGRJZHggPSAyICogaWR4ICsgMjtcblxuICAgICAgICAgICAgLy8gMikgSW5pdGlhbGl6ZSBjaGlsZCB2YWx1ZXNcbiAgICAgICAgICAgIGxldCBsZWZ0Q2hpbGQsIHJpZ2h0Q2hpbGQ7XG5cbiAgICAgICAgICAgIC8vIDMpIEtlZXAgdHJhY2sgb2YgaWYgYSBzd2FwIGhhcHBlbmVkIHRoaXMgaXRlcmF0aW9uXG4gICAgICAgICAgICBsZXQgc3dhcCA9IG51bGw7XG5cblxuICAgICAgICAgICAgLy8gNCkgQ2hlY2sgaWYgaW5kaWNlcyBhcmUgaW4gYm91bmRzIGFuZCBpZiBzbywgYXNzaWduIGNoaWxkIHZhbHVlc1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVzW2xlZnRDaGlsZElkeF0pIHtcbiAgICAgICAgICAgICAgICBsZWZ0Q2hpbGQgPSB0aGlzLnZhbHVlc1tsZWZ0Q2hpbGRJZHhdO1xuICAgICAgICAgICAgICAgIGlmIChsZWZ0Q2hpbGQgPiBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHN3YXAgPSBsZWZ0Q2hpbGRJZHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZXNbcmlnaHRDaGlsZElkeF0pIHtcbiAgICAgICAgICAgICAgICByaWdodENoaWxkID0gdGhpcy52YWx1ZXNbcmlnaHRDaGlsZElkeF07XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAvLyBXaGF0IGEgdHJhdmVzdHksIGZpbmQgYSB3YXkgdG8gZml4IFxuICAgICAgICAgICAgICAgICAgICAvLyBFbnN1cmVzIHRoYXQgdGhlIGxhcmdlciBjaGlsZCBnZXRzIGFzc2lnbmVkIHRvIHN3YXBcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgYm90aCBhcmUgbGFyZ2VyIHRoYW4gZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAoIXN3YXAgJiYgcmlnaHRDaGlsZCA+IGVsZW1lbnQpIHx8XG4gICAgICAgICAgICAgICAgICAgIChzd2FwICYmIHJpZ2h0Q2hpbGQgPiBsZWZ0Q2hpbGQpIFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBzd2FwID0gcmlnaHRDaGlsZElkeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgaWYgKCFzd2FwKSBicmVhaztcblxuICAgICAgICAgICAgLy8gNSkgRG8gdGhlIHN3YXBcbiAgICAgICAgICAgIHRoaXMudmFsdWVzW2lkeF0gID0gdGhpcy52YWx1ZXNbc3dhcF07XG4gICAgICAgICAgICB0aGlzLnZhbHVlc1tzd2FwXSA9IGVsZW1lbnQ7XG5cbiAgICAgICAgICAgIC8vIDYpIFNldCBjdXJyZW50IGluZGV4IHRvIHRoYXQgb2YgdGhlIHN3YXBwZWQgY2hpbGRcbiAgICAgICAgICAgIGlkeCA9IHN3YXA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHRyYWN0TWF4KCkge1xuICAgICAgICBjb25zdCBtYXggPSB0aGlzLnZhbHVlc1swXVxuICAgICAgICBjb25zdCBlbmQgPSB0aGlzLnZhbHVlcy5wb3AoKTtcbiAgICAgICAgaWYgKHRoaXMudmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzWzBdID0gZW5kXG4gICAgICAgICAgICB0aGlzLnNpbmtEb3duKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWF4O1xuXG4gICAgfVxuXG5cbn1cblxuIFxuY29uc3QgYmluYXJ5ID0gbmV3IE1heEJpbmFyeUhlYXAoKVxuYmluYXJ5Lmluc2VydCg0MSlcbmJpbmFyeS5pbnNlcnQoNDMpXG5iaW5hcnkuaW5zZXJ0KDE5KVxuYmluYXJ5Lmluc2VydCgxMilcbmJpbmFyeS5pbnNlcnQoNTUpXG5jb25zb2xlLmxvZyhiaW5hcnkpXG5jb25zb2xlLmxvZyhiaW5hcnkuZXh0cmFjdE1heCgpKTtcbmNvbnNvbGUubG9nKGJpbmFyeS5leHRyYWN0TWF4KCkpO1xuXG5jb25zb2xlLmxvZyhiaW5hcnkpXG4vLyBiaW5hcnlcblxuXG4vLyBQcmlvcml0eSBxdWV1ZVxuLy8gRGF0YSBzdHJ1Y3R1cmUgd2hlcmUgZWFjaCBlbGVtZW50IGhhcyBhIHByaW9yaXR5XG4vLyBFbGVtZW50cyB3aXRoIGhpZ2hlciBwcmlvcml0aWVzIGFyZSBzZXJ2ZWQgYmVmb3JlIGVsZW1lbnRzIHdpdGggbG93ZXIgcHJpb3JpdGllc1xuXG5jbGFzcyBOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxufVxuXG4vLyBQcmlvcml0eSBRdWV1ZSB1c2luZyBhIG1pbiBiaW5hcnkgaGVhcFxuXG5jbGFzcyBQcmlvcml0eVF1ZXVlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSBbXTtcbiAgICB9XG5cbiAgICBidWJibGVVcCgpIHtcbiAgICAgICAgLy8gTG93ZXIgdmFsdWUgPSBoaWdoZXIgcHJpb3JpdHkgKFVOSVggc3R5bGUpXG4gICAgICAgIGxldCBpZHggPSB0aGlzLnZhbHVlcy5sZW5ndGggLSAxO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy52YWx1ZXNbaWR4XTtcblxuICAgICAgICB3aGlsZShpZHggPiAwKSB7XG4gICAgICAgICAgICBsZXQgcGFyZW50SWR4ID0gTWF0aC5mbG9vcigoaWR4IC0gMSkgLyAyKTtcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLnZhbHVlc1twYXJlbnRJZHhdO1xuXG4gICAgICAgICAgICBpZiAocGFyZW50LnByaW9yaXR5IDwgZWxlbWVudC5wcmlvcml0eSkgYnJlYWs7XG5cbiAgICAgICAgICAgIHRoaXMudmFsdWVzW3BhcmVudElkeF0gPSBlbGVtZW50O1xuICAgICAgICAgICAgdGhpcy52YWx1ZXNbaWR4XSA9IHBhcmVudDtcblxuICAgICAgICAgICAgaWR4ID0gcGFyZW50SWR4O1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGVucXVldWUodmFsLCBwcmlvcml0eSkge1xuICAgICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUodmFsLCBwcmlvcml0eSk7XG4gICAgICAgIHRoaXMudmFsdWVzLnB1c2gobmV3Tm9kZSk7XG4gICAgICAgIC8vIHRoaXMuYnViYmxlVXAoKVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkZXF1ZXVlKCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgXCIuL2FsZ29yaXRobXMvZnJlcUNvdW50ZXJcIjtcbi8vIGltcG9ydCBcIi4vYWxnb3JpdGhtcy9tdWx0aVBvaW50ZXJzXCI7XG4vLyBpbXBvcnQgXCIuL2FsZ29yaXRobXMvc2xpZGluZ1dpbmRvd1wiO1xuLy8gaW1wb3J0IFwiLi9hbGdvcml0aG1zL3JlY3Vyc2lvblwiO1xuLy8gaW1wb3J0IFwiLi9hbGdvcml0aG1zL2JpbmFyeVNlYXJjaFwiO1xuLy8gaW1wb3J0IFwiLi9hbGdvcml0aG1zL3N0cmluZ1NlYXJjaFwiO1xuLy8gaW1wb3J0IFwiLi9hbGdvcml0aG1zL2J1YmJsZVNvcnRcIjtcbi8vIGltcG9ydCBcIi4vYWxnb3JpdGhtcy9zZWxlY3Rpb25Tb3J0XCI7XG4vLyBpbXBvcnQgXCIuL2FsZ29yaXRobXMvaW5zZXJ0aW9uU29ydFwiO1xuLy8gaW1wb3J0IFwiLi9hbGdvcml0aG1zL21lcmdlU29ydFwiO1xuLy8gaW1wb3J0IFwiLi9hbGdvcml0aG1zL3JhZGl4U29ydFwiO1xuXG5cbi8vIGltcG9ydCBcIi4vZGF0YS1zdHJ1Y3R1cmVzL2NsYXNzUmVmcmVzaGVyXCJcbi8vIGltcG9ydCBcIi4vZGF0YS1zdHJ1Y3R1cmVzL3NpbmdseUxpbmtlZExpc3RcIlxuLy8gaW1wb3J0IFwiLi9kYXRhLXN0cnVjdHVyZXMvZG91Ymx5TGlua2VkTGlzdHNcIlxuLy8gaW1wb3J0IFwiLi9kYXRhLXN0cnVjdHVyZXMvc3RhY2tzQW5kUXVldWVzXCJcbi8vIGltcG9ydCBcIi4vZGF0YS1zdHJ1Y3R1cmVzL3RyZWVzXCJcbi8vIGltcG9ydCBcIi4vZGF0YS1zdHJ1Y3R1cmVzL3RyZWVUcmF2ZXJzYWxcIlxuLy8gaW1wb3J0IFwiLi9pbmNvbWVUYXhcIlxuaW1wb3J0IFwiLi9kYXRhLXN0cnVjdHVyZXMvYmluYXJ5SGVhcHNcIlxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=