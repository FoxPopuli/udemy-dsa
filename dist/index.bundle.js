/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data-structures/stacksAndQueues.js":
/*!************************************************!*\
  !*** ./src/data-structures/stacksAndQueues.js ***!
  \************************************************/
/***/ (function() {

// Stacks

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
        return
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

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class TestQueue {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    shift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {

            let oldHead = this.head;
            this.head = newNode;
            this.head.next = oldHead;

            if (this.length === 1) oldHead.prev = this.head;
        }

        this.length++;
        return this;
    }

    pop() {
        const poppedNode = this.tail;


    }


}


class Queue {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsVUFBVSxVQUFVO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7O0FBRVY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOzs7QUFHQTs7O0FBR0E7O0FBRUE7Ozs7OztVQ3RKQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDMEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91ZGVteS1kc2EvLi9zcmMvZGF0YS1zdHJ1Y3R1cmVzL3N0YWNrc0FuZFF1ZXVlcy5qcyIsIndlYnBhY2s6Ly91ZGVteS1kc2Evd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdWRlbXktZHNhL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3VkZW15LWRzYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdWRlbXktZHNhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdWRlbXktZHNhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdWRlbXktZHNhLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFN0YWNrc1xuXG5jbGFzcyBTdGFja0NsYXNzIHtcbiAgICAjYXJyYXkgPSBbXTtcbiAgICBpbmhlcmV0ZWRQcm9wID0gJ0hpIGR1ZGUnXG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMudG9wID0gbnVsbDtcbiAgICAgICAgdGhpcy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmluaGVyZXRlZFByb3AgPSAnSGknXG5cbiAgICB9XG5cbiAgICBwdXNoKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudG9wID0gdmFsdWU7XG4gICAgICAgIHRoaXMuI2FycmF5LnB1c2godmFsdWUpO1xuICAgICAgICB0aGlzLmxlbmd0aCsrO1xuICAgIH1cblxuICAgIHBvcCgpIHtcbiAgICAgICAgY29uc3QgcG9wcGVkID0gdGhpcy4jYXJyYXkucG9wKCk7XG4gICAgICAgIHRoaXMudG9wID0gdGhpcy4jYXJyYXlbdGhpcy4jYXJyYXkubGVuZ3RoIC0gMV07XG4gICAgICAgIHRoaXMubGVuZ3RoLS07XG4gICAgICAgIHJldHVybiBwb3BwZWQ7XG4gICAgfVxuXG4gICAgcGVlaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9wO1xuICAgIH1cblxuICAgIGdldExlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xuICAgIH1cblxufVxuXG5jbGFzcyBOZXdTdGFjayBleHRlbmRzIFN0YWNrQ2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbn1cblxuY29uc3QgU3RhY2tDb250cnVjdG9yID0gKCkgPT4ge1xuICAgIGNvbnN0IGFycmF5ID0gW107XG5cbiAgICBsZXQgdG9wID0gbnVsbDtcbiAgICBsZXQgbGVuZ3RoID0gMDtcblxuXG4gICAgY29uc3QgcHVzaCA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBhcnJheS5wdXNoKHZhbHVlKTtcbiAgICAgICAgdG9wID0gdmFsdWU7XG4gICAgICAgIGxlbmd0aCsrO1xuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuXG4gICAgY29uc3QgcG9wID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwb3BwZWQgPSBhcnJheS5wb3AoKTtcbiAgICAgICAgdG9wID0gYXJyYXlbdGhpcy5sZW5ndGggLSAxXTtcbiAgICAgICAgcmV0dXJuIHBvcHBlZDtcblxuICAgIH1cblxuICAgIGNvbnN0IHBlZWsgPSAoKSA9PiB0b3A7XG5cblxuICAgIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IGxlbmd0aDtcblxuICAgIGNvbnN0IGdldEFsbCA9ICgpID0+IGFycmF5O1xuXG4gICAgcmV0dXJuIHtwdXNoLCBwb3AsIHBlZWssIGdldExlbmd0aCwgZ2V0QWxsfTtcbn1cblxuY29uc3QgTmV3U3RhY2tDb25zdHJ1Y3RvciA9ICgpID0+IHtcbiAgICBjb25zdCBwcm90byA9IFN0YWNrQ29udHJ1Y3RvcigpO1xuICAgIFxuICAgIGNvbnN0IG5ld01ldGhvZCA9ICgpID0+ICdJIGFtIGEgbmV3IG1ldGhvZCc7XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJvdG8sIHtuZXdNZXRob2R9KTtcbn1cblxuY29uc3Qgc3RhY2tUZXN0cyA9ICgpID0+IHtcbiAgICBjb25zdCB0ZXN0U3RhY2sgPSBuZXcgU3RhY2tDbGFzcygpO1xuICAgIHRlc3RTdGFjay5wdXNoKCdIZWxsbycpO1xuICAgIHRlc3RTdGFjay5wdXNoKCdUaGVyZScpO1xuICAgIHRlc3RTdGFjay5wdXNoKCdCdWRkeScpXG4gICAgXG4gICAgY29uc29sZS5sb2codGVzdFN0YWNrLnBlZWsoKSlcbiAgICBjb25zb2xlLmxvZyh0ZXN0U3RhY2suZ2V0TGVuZ3RoKCkpXG4gICAgY29uc29sZS5sb2codGVzdFN0YWNrLnBvcCgpKTtcbiAgICBjb25zb2xlLmxvZyh0ZXN0U3RhY2sucGVlaygpKVxuICAgIGNvbnNvbGUubG9nKHRlc3RTdGFjay5pbmhlcmV0ZWRQcm9wKTtcbiAgICBcbiAgICBjb25zdCBuZXdTdGFjayA9IG5ldyBOZXdTdGFjaygpO1xuICAgIGNvbnNvbGUubG9nKG5ld1N0YWNrLmluaGVyZXRlZFByb3ApXG4gICAgXG4gICAgY29uc3QgbmV3U3RhY2syID0gTmV3U3RhY2tDb25zdHJ1Y3RvcigpO1xuICAgIG5ld1N0YWNrMi5wdXNoKCdGaXJzdCcpO1xuICAgIGNvbnNvbGUubG9nKG5ld1N0YWNrMi5wZWVrKCkpXG4gICAgY29uc29sZS5sb2cobmV3U3RhY2syLm5ld01ldGhvZCgpKVxuICAgIFxufVxuLy8gc3RhY2tUZXN0cygpO1xuXG5jbGFzcyBOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubmV4dCA9IG51bGw7XG4gICAgfVxufVxuXG5jbGFzcyBUZXN0UXVldWUge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5oZWFkID0gbnVsbDtcbiAgICAgICAgdGhpcy50YWlsID0gbnVsbDtcbiAgICAgICAgdGhpcy5sZW5ndGggPSAwO1xuICAgIH1cblxuICAgIHNoaWZ0KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgICAgIGlmICghdGhpcy5oZWFkKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWQgPSBuZXdOb2RlO1xuICAgICAgICAgICAgdGhpcy50YWlsID0gbmV3Tm9kZTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgbGV0IG9sZEhlYWQgPSB0aGlzLmhlYWQ7XG4gICAgICAgICAgICB0aGlzLmhlYWQgPSBuZXdOb2RlO1xuICAgICAgICAgICAgdGhpcy5oZWFkLm5leHQgPSBvbGRIZWFkO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IDEpIG9sZEhlYWQucHJldiA9IHRoaXMuaGVhZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGVuZ3RoKys7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHBvcCgpIHtcbiAgICAgICAgY29uc3QgcG9wcGVkTm9kZSA9IHRoaXMudGFpbDtcblxuXG4gICAgfVxuXG5cbn1cblxuXG5jbGFzcyBRdWV1ZSB7XG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0IFwiLi9hbGdvcml0aG1zL2ZyZXFDb3VudGVyXCI7XG4vLyBpbXBvcnQgXCIuL2FsZ29yaXRobXMvbXVsdGlQb2ludGVyc1wiO1xuLy8gaW1wb3J0IFwiLi9hbGdvcml0aG1zL3NsaWRpbmdXaW5kb3dcIjtcbi8vIGltcG9ydCBcIi4vYWxnb3JpdGhtcy9yZWN1cnNpb25cIjtcbi8vIGltcG9ydCBcIi4vYWxnb3JpdGhtcy9iaW5hcnlTZWFyY2hcIjtcbi8vIGltcG9ydCBcIi4vYWxnb3JpdGhtcy9zdHJpbmdTZWFyY2hcIjtcbi8vIGltcG9ydCBcIi4vYWxnb3JpdGhtcy9idWJibGVTb3J0XCI7XG4vLyBpbXBvcnQgXCIuL2FsZ29yaXRobXMvc2VsZWN0aW9uU29ydFwiO1xuLy8gaW1wb3J0IFwiLi9hbGdvcml0aG1zL2luc2VydGlvblNvcnRcIjtcbi8vIGltcG9ydCBcIi4vYWxnb3JpdGhtcy9tZXJnZVNvcnRcIjtcbi8vIGltcG9ydCBcIi4vYWxnb3JpdGhtcy9yYWRpeFNvcnRcIjtcblxuXG4vLyBpbXBvcnQgXCIuL2RhdGEtc3RydWN0dXJlcy9jbGFzc1JlZnJlc2hlclwiXG4vLyBpbXBvcnQgXCIuL2RhdGEtc3RydWN0dXJlcy9zaW5nbHlMaW5rZWRMaXN0XCJcbi8vIGltcG9ydCBcIi4vZGF0YS1zdHJ1Y3R1cmVzL2RvdWJseUxpbmtlZExpc3RzXCJcbmltcG9ydCBcIi4vZGF0YS1zdHJ1Y3R1cmVzL3N0YWNrc0FuZFF1ZXVlc1wiXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==