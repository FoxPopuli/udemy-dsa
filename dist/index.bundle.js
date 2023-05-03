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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDaktBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdWRlbXktZHNhLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9iaW5hcnlIZWFwcy5qcyIsIndlYnBhY2s6Ly91ZGVteS1kc2Evd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdWRlbXktZHNhL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3VkZW15LWRzYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdWRlbXktZHNhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdWRlbXktZHNhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdWRlbXktZHNhLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gQmluYXJ5IEhlYXBzXG4vLyBFYWNoIHBhcmVudCBoYXMgYXQgbW9zdCAyIGNoaWxkcmVuXG4vLyBBbGwgY2hpbGRyZW4gb2YgZWFjaCBub2RlYXJlIGFzIGZ1bGwgYXMgdGhleSBjYW4gYmVcbi8vIExlZnQgbm9kZXMgYXJlIGZpbGxlZCBpbiBmaXJzdFxuLy8gTm8gaW1wbGllZCBvcmRlcmluZyBiZXR3ZWVuIHNpYmxpbmdzXG4vLyAyIFR5cGVzIG9mIGJpbmFyeSBoZWFwczpcbi8vICAgICAgMSkgTWF4IC0gRXZlcnkgY2hpbGQgbm9kZSBpcyBzbWFsbGVyIHRoYW4gaXRzIHBhcmVudFxuLy8gICAgICAyKSBNaW4gLSBFdmVyeSBjaGlsZCBub2RlIGlzIGxhcmdlciB0aGFuIGl0cyBwYXJlbnRcblxuLy8gVXNlZCBpbiBwcmlvcml0eSBxdWV1ZXMsIHdoaWNoIGFyZSB2ZXJ5IGNvbW1vblxuXG5jbGFzcyBNYXhCaW5hcnlIZWFwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSBbXTtcbiAgICB9XG5cbiAgICBpbnNlcnQodmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZXMucHVzaCh2YWx1ZSk7XG5cbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy52YWx1ZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMudmFsdWVzW2luZGV4XTtcbiAgICAgICAgd2hpbGUoaW5kZXggPiAwKSB7XG4gICAgICAgICAgICBsZXQgcGFyZW50SW5kZXggPSBNYXRoLmZsb29yKChpbmRleC0xKS8yKTs7XG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy52YWx1ZXNbcGFyZW50SW5kZXhdXG5cbiAgICAgICAgICAgIGlmIChwYXJlbnQgPj0gZWxlbWVudCkgYnJlYWs7XG4gICAgICAgICAgICB0aGlzLnZhbHVlc1twYXJlbnRJbmRleF0gPSBlbGVtZW50XG4gICAgICAgICAgICB0aGlzLnZhbHVlc1tpbmRleF0gPSBwYXJlbnQ7XG5cbiAgICAgICAgICAgIGluZGV4ID0gcGFyZW50SW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzaW5rRG93bigpIHtcbiAgICAgICAgbGV0IGlkeCA9IDA7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnZhbHVlc1swXTtcbiAgICAgICAgd2hpbGUodHJ1ZSkge1xuICAgICAgICAgICAgLy8gMSkgZ2V0IGNoaWxkIGluZGljZXNcbiAgICAgICAgICAgIGxldCBsZWZ0Q2hpbGRJZHggPSAyICogaWR4ICsgMTtcbiAgICAgICAgICAgIGxldCByaWdodENoaWxkSWR4ID0gMiAqIGlkeCArIDI7XG5cbiAgICAgICAgICAgIC8vIDIpIEluaXRpYWxpemUgY2hpbGQgdmFsdWVzXG4gICAgICAgICAgICBsZXQgbGVmdENoaWxkLCByaWdodENoaWxkO1xuXG4gICAgICAgICAgICAvLyAzKSBLZWVwIHRyYWNrIG9mIGlmIGEgc3dhcCBoYXBwZW5lZCB0aGlzIGl0ZXJhdGlvblxuICAgICAgICAgICAgbGV0IHN3YXAgPSBudWxsO1xuXG5cbiAgICAgICAgICAgIC8vIDQpIENoZWNrIGlmIGluZGljZXMgYXJlIGluIGJvdW5kcyBhbmQgaWYgc28sIGFzc2lnbiBjaGlsZCB2YWx1ZXNcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlc1tsZWZ0Q2hpbGRJZHhdKSB7XG4gICAgICAgICAgICAgICAgbGVmdENoaWxkID0gdGhpcy52YWx1ZXNbbGVmdENoaWxkSWR4XTtcbiAgICAgICAgICAgICAgICBpZiAobGVmdENoaWxkID4gZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBzd2FwID0gbGVmdENoaWxkSWR4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVzW3JpZ2h0Q2hpbGRJZHhdKSB7XG4gICAgICAgICAgICAgICAgcmlnaHRDaGlsZCA9IHRoaXMudmFsdWVzW3JpZ2h0Q2hpbGRJZHhdO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgLy8gV2hhdCBhIHRyYXZlc3R5LCBmaW5kIGEgd2F5IHRvIGZpeCBcbiAgICAgICAgICAgICAgICAgICAgLy8gRW5zdXJlcyB0aGF0IHRoZSBsYXJnZXIgY2hpbGQgZ2V0cyBhc3NpZ25lZCB0byBzd2FwXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIGJvdGggYXJlIGxhcmdlciB0aGFuIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgKCFzd2FwICYmIHJpZ2h0Q2hpbGQgPiBlbGVtZW50KSB8fFxuICAgICAgICAgICAgICAgICAgICAoc3dhcCAmJiByaWdodENoaWxkID4gbGVmdENoaWxkKSBcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhcCA9IHJpZ2h0Q2hpbGRJZHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGlmICghc3dhcCkgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIDUpIERvIHRoZSBzd2FwXG4gICAgICAgICAgICB0aGlzLnZhbHVlc1tpZHhdICA9IHRoaXMudmFsdWVzW3N3YXBdO1xuICAgICAgICAgICAgdGhpcy52YWx1ZXNbc3dhcF0gPSBlbGVtZW50O1xuXG4gICAgICAgICAgICAvLyA2KSBTZXQgY3VycmVudCBpbmRleCB0byB0aGF0IG9mIHRoZSBzd2FwcGVkIGNoaWxkXG4gICAgICAgICAgICBpZHggPSBzd2FwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXh0cmFjdE1heCgpIHtcbiAgICAgICAgY29uc3QgbWF4ID0gdGhpcy52YWx1ZXNbMF1cbiAgICAgICAgY29uc3QgZW5kID0gdGhpcy52YWx1ZXMucG9wKCk7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlc1swXSA9IGVuZFxuICAgICAgICAgICAgdGhpcy5zaW5rRG93bigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1heDtcblxuICAgIH1cblxuXG59XG5cbiBcbmNvbnN0IGJpbmFyeSA9IG5ldyBNYXhCaW5hcnlIZWFwKClcbmJpbmFyeS5pbnNlcnQoNDEpXG5iaW5hcnkuaW5zZXJ0KDQzKVxuYmluYXJ5Lmluc2VydCgxOSlcbmJpbmFyeS5pbnNlcnQoMTIpXG5iaW5hcnkuaW5zZXJ0KDU1KVxuY29uc29sZS5sb2coYmluYXJ5KVxuY29uc29sZS5sb2coYmluYXJ5LmV4dHJhY3RNYXgoKSk7XG5jb25zb2xlLmxvZyhiaW5hcnkuZXh0cmFjdE1heCgpKTtcblxuY29uc29sZS5sb2coYmluYXJ5KVxuLy8gYmluYXJ5XG5cblxuLy8gUHJpb3JpdHkgcXVldWVcbi8vIERhdGEgc3RydWN0dXJlIHdoZXJlIGVhY2ggZWxlbWVudCBoYXMgYSBwcmlvcml0eVxuLy8gRWxlbWVudHMgd2l0aCBoaWdoZXIgcHJpb3JpdGllcyBhcmUgc2VydmVkIGJlZm9yZSBlbGVtZW50cyB3aXRoIGxvd2VyIHByaW9yaXRpZXNcblxuY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3IodmFsdWUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cbn1cblxuLy8gUHJpb3JpdHkgUXVldWUgdXNpbmcgYSBtaW4gYmluYXJ5IGhlYXBcblxuY2xhc3MgUHJpb3JpdHlRdWV1ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudmFsdWVzID0gW107XG4gICAgfVxuXG4gICAgYnViYmxlVXAoKSB7XG4gICAgICAgIGxldCBpZHggPSB0aGlzLnZhbHVlcy5sZW5ndGggLSAxO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy52YWx1ZXNbaWR4XTtcblxuICAgICAgICB3aGlsZShpZHggPiAwKSB7XG4gICAgICAgICAgICBsZXQgcGFyZW50SWR4ID0gTWF0aC5mbG9vcigoaWR4IC0gMSkgLyAyKTtcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLnZhbHVlc1twYXJlbnRJZHhdO1xuXG4gICAgICAgICAgICBpZiAocGFyZW50LnByaW9yaXR5IDwgZWxlbWVudC5wcmlvcml0eSkgYnJlYWs7XG5cbiAgICAgICAgICAgIHRoaXMudmFsdWVzW3BhcmVudElkeF0gPSBlbGVtZW50O1xuICAgICAgICAgICAgdGhpcy52YWx1ZXNbaWR4XSA9IHBhcmVudDtcblxuICAgICAgICAgICAgaWR4ID0gcGFyZW50SWR4O1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGVucXVldWUodmFsLCBwcmlvcml0eSkge1xuICAgICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUodmFsLCBwcmlvcml0eSk7XG4gICAgICAgIHRoaXMudmFsdWVzLnB1c2gobmV3Tm9kZSk7XG4gICAgICAgIC8vIHRoaXMuYnViYmxlVXAoKVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkZXF1ZXVlKCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgXCIuL2FsZ29yaXRobXMvZnJlcUNvdW50ZXJcIjtcbi8vIGltcG9ydCBcIi4vYWxnb3JpdGhtcy9tdWx0aVBvaW50ZXJzXCI7XG4vLyBpbXBvcnQgXCIuL2FsZ29yaXRobXMvc2xpZGluZ1dpbmRvd1wiO1xuLy8gaW1wb3J0IFwiLi9hbGdvcml0aG1zL3JlY3Vyc2lvblwiO1xuLy8gaW1wb3J0IFwiLi9hbGdvcml0aG1zL2JpbmFyeVNlYXJjaFwiO1xuLy8gaW1wb3J0IFwiLi9hbGdvcml0aG1zL3N0cmluZ1NlYXJjaFwiO1xuLy8gaW1wb3J0IFwiLi9hbGdvcml0aG1zL2J1YmJsZVNvcnRcIjtcbi8vIGltcG9ydCBcIi4vYWxnb3JpdGhtcy9zZWxlY3Rpb25Tb3J0XCI7XG4vLyBpbXBvcnQgXCIuL2FsZ29yaXRobXMvaW5zZXJ0aW9uU29ydFwiO1xuLy8gaW1wb3J0IFwiLi9hbGdvcml0aG1zL21lcmdlU29ydFwiO1xuLy8gaW1wb3J0IFwiLi9hbGdvcml0aG1zL3JhZGl4U29ydFwiO1xuXG5cbi8vIGltcG9ydCBcIi4vZGF0YS1zdHJ1Y3R1cmVzL2NsYXNzUmVmcmVzaGVyXCJcbi8vIGltcG9ydCBcIi4vZGF0YS1zdHJ1Y3R1cmVzL3NpbmdseUxpbmtlZExpc3RcIlxuLy8gaW1wb3J0IFwiLi9kYXRhLXN0cnVjdHVyZXMvZG91Ymx5TGlua2VkTGlzdHNcIlxuLy8gaW1wb3J0IFwiLi9kYXRhLXN0cnVjdHVyZXMvc3RhY2tzQW5kUXVldWVzXCJcbi8vIGltcG9ydCBcIi4vZGF0YS1zdHJ1Y3R1cmVzL3RyZWVzXCJcbi8vIGltcG9ydCBcIi4vZGF0YS1zdHJ1Y3R1cmVzL3RyZWVUcmF2ZXJzYWxcIlxuLy8gaW1wb3J0IFwiLi9pbmNvbWVUYXhcIlxuaW1wb3J0IFwiLi9kYXRhLXN0cnVjdHVyZXMvYmluYXJ5SGVhcHNcIlxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=