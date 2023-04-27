/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data-structures/stacksAndQueues.js":
/*!************************************************!*\
  !*** ./src/data-structures/stacksAndQueues.js ***!
  \************************************************/
/***/ (function() {

// Stacks (array implimentation)
// Linked list could be better since we don't need all the array methods 

// No matter what, insertion and removal need to be O(1) for both stacks and queues

class StackClass {
    #array = [];
    inheretedProp = 'Hi dude'

    constructor () {
        this.top = null;
        this.length = 0;
        this.inheretedProp = 'Hi'

    }

    push(value) {
        this.top = value;
        this.#array.push(value);
        this.length++;
    }

    pop() {
        const popped = this.#array.pop();
        this.top = this.#array[this.#array.length - 1];
        this.length--;
        return popped;
    }

    peek() {
        return this.top;
    }

    getLength() {
        return this.length;
    }

}

class NewStack extends StackClass {
    constructor() {
        super();
    }
}

const StackContructor = () => {
    const array = [];

    let top = null;
    let length = 0;


    const push = (value) => {
        array.push(value);
        top = value;
        length++;
        return array;
    }

    const pop = () => {
        const popped = array.pop();
        top = array[this.length - 1];
        return popped;

    }

    const peek = () => top;


    const getLength = () => length;

    const getAll = () => array;

    return {push, pop, peek, getLength, getAll};
}

const NewStackConstructor = () => {
    const proto = StackContructor();
    
    const newMethod = () => 'I am a new method';

    return Object.assign({}, proto, {newMethod});
}

const stackTests = () => {
    const testStack = new StackClass();
    testStack.push('Hello');
    testStack.push('There');
    testStack.push('Buddy')
    
    console.log(testStack.peek())
    console.log(testStack.getLength())
    console.log(testStack.pop());
    console.log(testStack.peek())
    console.log(testStack.inheretedProp);
    
    const newStack = new NewStack();
    console.log(newStack.inheretedProp)
    
    const newStack2 = NewStackConstructor();
    newStack2.push('First');
    console.log(newStack2.peek())
    console.log(newStack2.newMethod())
    
}
// stackTests();

// Stack (SLL implimentation with all methods constant time)


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    // Preferred way of impimenting a stack with large data sets
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        this.size++;
        return this;
    }

    pop() {
        if (!this.size) return undefined;

        const temp = this.first;

        if (this.size === 1) this.last = null;
        
        this.first = this.first.next;
        this.size--;

        return temp.value;

    }
}

// Queue (array implimentation)


class ArrayQueue {
    #array = [];
    #length = 0;

    add(value) {
        this.#array.unshift(value);
        this.#length++;
        return this;
    }

    peek() {
        return this.#array[this.#length - 1]
    }

    pop() {
        if (!this.#length) return undefined;
        this.#length--;
        return this.#array.pop();
    }
}

class Queue {
    // Preferred way of implimenting a queue (SLL)
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.size++;
        return this;
    }

    dequeue() {
        if (!this.first) return undefined;
        
        const temp = this.first;
        this.first = this.first.next;
        if (this.size === 1) this.last = null;
        this.size--;
        return temp.value;
    }

}

const testQueue = new Queue();
testQueue.enqueue('Entry 1');
testQueue.enqueue('Entry 2');
testQueue.enqueue('Entry 3');
console.log(testQueue)
console.log(testQueue.dequeue())
console.log(testQueue.dequeue())
// console.log(testQueue.dequeue())
console.log(testQueue)

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/* harmony import */ var _data_structures_stacksAndQueues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-structures/stacksAndQueues */ "./src/data-structures/stacksAndQueues.js");
/* harmony import */ var _data_structures_stacksAndQueues__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_structures_stacksAndQueues__WEBPACK_IMPORTED_MODULE_0__);
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



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUEsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixVQUFVLFVBQVU7QUFDL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDNU5BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUMwQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VkZW15LWRzYS8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvc3RhY2tzQW5kUXVldWVzLmpzIiwid2VicGFjazovL3VkZW15LWRzYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91ZGVteS1kc2Evd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdWRlbXktZHNhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly91ZGVteS1kc2Evd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly91ZGVteS1kc2Evd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91ZGVteS1kc2EvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gU3RhY2tzIChhcnJheSBpbXBsaW1lbnRhdGlvbilcbi8vIExpbmtlZCBsaXN0IGNvdWxkIGJlIGJldHRlciBzaW5jZSB3ZSBkb24ndCBuZWVkIGFsbCB0aGUgYXJyYXkgbWV0aG9kcyBcblxuLy8gTm8gbWF0dGVyIHdoYXQsIGluc2VydGlvbiBhbmQgcmVtb3ZhbCBuZWVkIHRvIGJlIE8oMSkgZm9yIGJvdGggc3RhY2tzIGFuZCBxdWV1ZXNcblxuY2xhc3MgU3RhY2tDbGFzcyB7XG4gICAgI2FycmF5ID0gW107XG4gICAgaW5oZXJldGVkUHJvcCA9ICdIaSBkdWRlJ1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnRvcCA9IG51bGw7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5pbmhlcmV0ZWRQcm9wID0gJ0hpJ1xuXG4gICAgfVxuXG4gICAgcHVzaCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnRvcCA9IHZhbHVlO1xuICAgICAgICB0aGlzLiNhcnJheS5wdXNoKHZhbHVlKTtcbiAgICAgICAgdGhpcy5sZW5ndGgrKztcbiAgICB9XG5cbiAgICBwb3AoKSB7XG4gICAgICAgIGNvbnN0IHBvcHBlZCA9IHRoaXMuI2FycmF5LnBvcCgpO1xuICAgICAgICB0aGlzLnRvcCA9IHRoaXMuI2FycmF5W3RoaXMuI2FycmF5Lmxlbmd0aCAtIDFdO1xuICAgICAgICB0aGlzLmxlbmd0aC0tO1xuICAgICAgICByZXR1cm4gcG9wcGVkO1xuICAgIH1cblxuICAgIHBlZWsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvcDtcbiAgICB9XG5cbiAgICBnZXRMZW5ndGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aDtcbiAgICB9XG5cbn1cblxuY2xhc3MgTmV3U3RhY2sgZXh0ZW5kcyBTdGFja0NsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmNvbnN0IFN0YWNrQ29udHJ1Y3RvciA9ICgpID0+IHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuXG4gICAgbGV0IHRvcCA9IG51bGw7XG4gICAgbGV0IGxlbmd0aCA9IDA7XG5cblxuICAgIGNvbnN0IHB1c2ggPSAodmFsdWUpID0+IHtcbiAgICAgICAgYXJyYXkucHVzaCh2YWx1ZSk7XG4gICAgICAgIHRvcCA9IHZhbHVlO1xuICAgICAgICBsZW5ndGgrKztcbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cblxuICAgIGNvbnN0IHBvcCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcG9wcGVkID0gYXJyYXkucG9wKCk7XG4gICAgICAgIHRvcCA9IGFycmF5W3RoaXMubGVuZ3RoIC0gMV07XG4gICAgICAgIHJldHVybiBwb3BwZWQ7XG5cbiAgICB9XG5cbiAgICBjb25zdCBwZWVrID0gKCkgPT4gdG9wO1xuXG5cbiAgICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiBsZW5ndGg7XG5cbiAgICBjb25zdCBnZXRBbGwgPSAoKSA9PiBhcnJheTtcblxuICAgIHJldHVybiB7cHVzaCwgcG9wLCBwZWVrLCBnZXRMZW5ndGgsIGdldEFsbH07XG59XG5cbmNvbnN0IE5ld1N0YWNrQ29uc3RydWN0b3IgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvdG8gPSBTdGFja0NvbnRydWN0b3IoKTtcbiAgICBcbiAgICBjb25zdCBuZXdNZXRob2QgPSAoKSA9PiAnSSBhbSBhIG5ldyBtZXRob2QnO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByb3RvLCB7bmV3TWV0aG9kfSk7XG59XG5cbmNvbnN0IHN0YWNrVGVzdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgdGVzdFN0YWNrID0gbmV3IFN0YWNrQ2xhc3MoKTtcbiAgICB0ZXN0U3RhY2sucHVzaCgnSGVsbG8nKTtcbiAgICB0ZXN0U3RhY2sucHVzaCgnVGhlcmUnKTtcbiAgICB0ZXN0U3RhY2sucHVzaCgnQnVkZHknKVxuICAgIFxuICAgIGNvbnNvbGUubG9nKHRlc3RTdGFjay5wZWVrKCkpXG4gICAgY29uc29sZS5sb2codGVzdFN0YWNrLmdldExlbmd0aCgpKVxuICAgIGNvbnNvbGUubG9nKHRlc3RTdGFjay5wb3AoKSk7XG4gICAgY29uc29sZS5sb2codGVzdFN0YWNrLnBlZWsoKSlcbiAgICBjb25zb2xlLmxvZyh0ZXN0U3RhY2suaW5oZXJldGVkUHJvcCk7XG4gICAgXG4gICAgY29uc3QgbmV3U3RhY2sgPSBuZXcgTmV3U3RhY2soKTtcbiAgICBjb25zb2xlLmxvZyhuZXdTdGFjay5pbmhlcmV0ZWRQcm9wKVxuICAgIFxuICAgIGNvbnN0IG5ld1N0YWNrMiA9IE5ld1N0YWNrQ29uc3RydWN0b3IoKTtcbiAgICBuZXdTdGFjazIucHVzaCgnRmlyc3QnKTtcbiAgICBjb25zb2xlLmxvZyhuZXdTdGFjazIucGVlaygpKVxuICAgIGNvbnNvbGUubG9nKG5ld1N0YWNrMi5uZXdNZXRob2QoKSlcbiAgICBcbn1cbi8vIHN0YWNrVGVzdHMoKTtcblxuLy8gU3RhY2sgKFNMTCBpbXBsaW1lbnRhdGlvbiB3aXRoIGFsbCBtZXRob2RzIGNvbnN0YW50IHRpbWUpXG5cblxuY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm5leHQgPSBudWxsO1xuICAgIH1cbn1cblxuY2xhc3MgU3RhY2sge1xuICAgIC8vIFByZWZlcnJlZCB3YXkgb2YgaW1waW1lbnRpbmcgYSBzdGFjayB3aXRoIGxhcmdlIGRhdGEgc2V0c1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmZpcnN0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zaXplID0gMDtcbiAgICB9XG5cbiAgICBwdXNoKHZhbCkge1xuICAgICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUodmFsKTtcbiAgICAgICAgaWYgKCF0aGlzLmZpcnN0KSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0ID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIHRoaXMubGFzdCA9IG5ld05vZGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gdGhpcy5maXJzdDtcbiAgICAgICAgICAgIHRoaXMuZmlyc3QgPSBuZXdOb2RlO1xuICAgICAgICAgICAgdGhpcy5maXJzdC5uZXh0ID0gdGVtcDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNpemUrKztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcG9wKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2l6ZSkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgICAgICBjb25zdCB0ZW1wID0gdGhpcy5maXJzdDtcblxuICAgICAgICBpZiAodGhpcy5zaXplID09PSAxKSB0aGlzLmxhc3QgPSBudWxsO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5maXJzdCA9IHRoaXMuZmlyc3QubmV4dDtcbiAgICAgICAgdGhpcy5zaXplLS07XG5cbiAgICAgICAgcmV0dXJuIHRlbXAudmFsdWU7XG5cbiAgICB9XG59XG5cbi8vIFF1ZXVlIChhcnJheSBpbXBsaW1lbnRhdGlvbilcblxuXG5jbGFzcyBBcnJheVF1ZXVlIHtcbiAgICAjYXJyYXkgPSBbXTtcbiAgICAjbGVuZ3RoID0gMDtcblxuICAgIGFkZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLiNhcnJheS51bnNoaWZ0KHZhbHVlKTtcbiAgICAgICAgdGhpcy4jbGVuZ3RoKys7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHBlZWsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNhcnJheVt0aGlzLiNsZW5ndGggLSAxXVxuICAgIH1cblxuICAgIHBvcCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLiNsZW5ndGgpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuI2xlbmd0aC0tO1xuICAgICAgICByZXR1cm4gdGhpcy4jYXJyYXkucG9wKCk7XG4gICAgfVxufVxuXG5jbGFzcyBRdWV1ZSB7XG4gICAgLy8gUHJlZmVycmVkIHdheSBvZiBpbXBsaW1lbnRpbmcgYSBxdWV1ZSAoU0xMKVxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmZpcnN0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zaXplID0gMDtcbiAgICB9XG5cbiAgICBlbnF1ZXVlKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgICAgIGlmICghdGhpcy5maXJzdCkge1xuICAgICAgICAgICAgdGhpcy5maXJzdCA9IG5ld05vZGU7XG4gICAgICAgICAgICB0aGlzLmxhc3QgPSBuZXdOb2RlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sYXN0Lm5leHQgPSBuZXdOb2RlO1xuICAgICAgICAgICAgdGhpcy5sYXN0ID0gbmV3Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2l6ZSsrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkZXF1ZXVlKCkge1xuICAgICAgICBpZiAoIXRoaXMuZmlyc3QpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0ZW1wID0gdGhpcy5maXJzdDtcbiAgICAgICAgdGhpcy5maXJzdCA9IHRoaXMuZmlyc3QubmV4dDtcbiAgICAgICAgaWYgKHRoaXMuc2l6ZSA9PT0gMSkgdGhpcy5sYXN0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zaXplLS07XG4gICAgICAgIHJldHVybiB0ZW1wLnZhbHVlO1xuICAgIH1cblxufVxuXG5jb25zdCB0ZXN0UXVldWUgPSBuZXcgUXVldWUoKTtcbnRlc3RRdWV1ZS5lbnF1ZXVlKCdFbnRyeSAxJyk7XG50ZXN0UXVldWUuZW5xdWV1ZSgnRW50cnkgMicpO1xudGVzdFF1ZXVlLmVucXVldWUoJ0VudHJ5IDMnKTtcbmNvbnNvbGUubG9nKHRlc3RRdWV1ZSlcbmNvbnNvbGUubG9nKHRlc3RRdWV1ZS5kZXF1ZXVlKCkpXG5jb25zb2xlLmxvZyh0ZXN0UXVldWUuZGVxdWV1ZSgpKVxuLy8gY29uc29sZS5sb2codGVzdFF1ZXVlLmRlcXVldWUoKSlcbmNvbnNvbGUubG9nKHRlc3RRdWV1ZSkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0IFwiLi9hbGdvcml0aG1zL2ZyZXFDb3VudGVyXCI7XG4vLyBpbXBvcnQgXCIuL2FsZ29yaXRobXMvbXVsdGlQb2ludGVyc1wiO1xuLy8gaW1wb3J0IFwiLi9hbGdvcml0aG1zL3NsaWRpbmdXaW5kb3dcIjtcbi8vIGltcG9ydCBcIi4vYWxnb3JpdGhtcy9yZWN1cnNpb25cIjtcbi8vIGltcG9ydCBcIi4vYWxnb3JpdGhtcy9iaW5hcnlTZWFyY2hcIjtcbi8vIGltcG9ydCBcIi4vYWxnb3JpdGhtcy9zdHJpbmdTZWFyY2hcIjtcbi8vIGltcG9ydCBcIi4vYWxnb3JpdGhtcy9idWJibGVTb3J0XCI7XG4vLyBpbXBvcnQgXCIuL2FsZ29yaXRobXMvc2VsZWN0aW9uU29ydFwiO1xuLy8gaW1wb3J0IFwiLi9hbGdvcml0aG1zL2luc2VydGlvblNvcnRcIjtcbi8vIGltcG9ydCBcIi4vYWxnb3JpdGhtcy9tZXJnZVNvcnRcIjtcbi8vIGltcG9ydCBcIi4vYWxnb3JpdGhtcy9yYWRpeFNvcnRcIjtcblxuXG4vLyBpbXBvcnQgXCIuL2RhdGEtc3RydWN0dXJlcy9jbGFzc1JlZnJlc2hlclwiXG4vLyBpbXBvcnQgXCIuL2RhdGEtc3RydWN0dXJlcy9zaW5nbHlMaW5rZWRMaXN0XCJcbi8vIGltcG9ydCBcIi4vZGF0YS1zdHJ1Y3R1cmVzL2RvdWJseUxpbmtlZExpc3RzXCJcbmltcG9ydCBcIi4vZGF0YS1zdHJ1Y3R1cmVzL3N0YWNrc0FuZFF1ZXVlc1wiXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==