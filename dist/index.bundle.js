/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data-structures/doublyLinkedLists.js":
/*!**************************************************!*\
  !*** ./src/data-structures/doublyLinkedLists.js ***!
  \**************************************************/
/***/ (() => {

// Downside is that it uses more memory than an SLL

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let node = new Node(value);

        if (!this.head) {
            // Next and prev both point to null. Obvious if you think about it
            this.head = node;
            this.tail = node;
        } else {
            let prev = this.tail;
            this.tail.next = node;
            this.tail = node;
            this.tail.prev = prev;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;

        const tail = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.length--;
        return tail;
    }

    shift(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    unshift() {
        const oldHead = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
        return oldHead;
    }

    get(index) {
        if (index > this.length - 1 || index < 0) return undefined;

        let current = this.head;
        for (let i = 0; i < index; i++) current = current.next;

        return current;
    }


    set(value, index) {
        if (index > this.length - 1 || index < 0) return undefined;

        let current = this.get(index);
        current.value = value;
    }

    insert(value, index) {
        if (index < 0 || index > this.length - 1) return false;

        this.length++;
        if (index === 0) {
            this.shift(value)
            return this;
        } else if (index === this.length - 1) {
            this.push(value);
            return this;
        }


        const newNode = new Node(value);

        const oldNode = this.get(index - 1);
        // console.log(oldNode)

        newNode.next = oldNode.next;
        newNode.prev = oldNode;
        oldNode.next = newNode;




        return this;
    }

    remove(index) {

        if (index === 0) return this.unshift();
        if (index === this.length - 1) return this.pop();
        
        const node = this.get(index);
        const forward = node.next;
        const back = node.prev;

        forward.prev = back;
        back.next = forward;
        
        this.length--;
        return node;

    }

    reverse() {
        let node = this.head;
        [this.head, this.tail] = [this.tail, this.head];
        let next;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            [node.next, node.prev] = [node.prev, node.next];
            node = next;
        }
        return this;
    }


    printNodes() {
        let current = this.head;
        while(current) {
            console.log(current);
            current = current.next;
        }
    }

    printValues() {
        let current = this.head;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const list = new DoublyLinkedList();

list.push('Item 1');
list.push('Item 2');
list.push('Item 3');
list.shift('Item 0');
list.reverse()
// list.remove(3)

// list.unshift()
// console.log('Poppped:')
// console.log(list.pop())
// console.log(`\n`)
// console.log(list.set('Hello', ))
// list.insert('Sup', 2)
// list.remove(2)
list.printNodes()
// console.log(list.get(2))
// list.printValues()
// console.log(list)

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
/* harmony import */ var _data_structures_doublyLinkedLists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-structures/doublyLinkedLists */ "./src/data-structures/doublyLinkedLists.js");
/* harmony import */ var _data_structures_doublyLinkedLists__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_structures_doublyLinkedLists__WEBPACK_IMPORTED_MODULE_0__);
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



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixXQUFXOztBQUVuQztBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUM3S0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUM0QyIsInNvdXJjZXMiOlsid2VicGFjazovL3VkZW15LWRzYS8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvZG91Ymx5TGlua2VkTGlzdHMuanMiLCJ3ZWJwYWNrOi8vdWRlbXktZHNhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VkZW15LWRzYS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly91ZGVteS1kc2Evd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3VkZW15LWRzYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3VkZW15LWRzYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VkZW15LWRzYS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEb3duc2lkZSBpcyB0aGF0IGl0IHVzZXMgbW9yZSBtZW1vcnkgdGhhbiBhbiBTTExcblxuY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm5leHQgPSBudWxsO1xuICAgICAgICB0aGlzLnByZXYgPSBudWxsO1xuICAgIH1cbn1cblxuY2xhc3MgRG91Ymx5TGlua2VkTGlzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGVhZCA9IG51bGw7XG4gICAgICAgIHRoaXMudGFpbCA9IG51bGw7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICBwdXNoKHZhbHVlKSB7XG4gICAgICAgIGxldCBub2RlID0gbmV3IE5vZGUodmFsdWUpO1xuXG4gICAgICAgIGlmICghdGhpcy5oZWFkKSB7XG4gICAgICAgICAgICAvLyBOZXh0IGFuZCBwcmV2IGJvdGggcG9pbnQgdG8gbnVsbC4gT2J2aW91cyBpZiB5b3UgdGhpbmsgYWJvdXQgaXRcbiAgICAgICAgICAgIHRoaXMuaGVhZCA9IG5vZGU7XG4gICAgICAgICAgICB0aGlzLnRhaWwgPSBub2RlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHByZXYgPSB0aGlzLnRhaWw7XG4gICAgICAgICAgICB0aGlzLnRhaWwubmV4dCA9IG5vZGU7XG4gICAgICAgICAgICB0aGlzLnRhaWwgPSBub2RlO1xuICAgICAgICAgICAgdGhpcy50YWlsLnByZXYgPSBwcmV2O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGVuZ3RoKys7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHBvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgICAgIGNvbnN0IHRhaWwgPSB0aGlzLnRhaWw7XG4gICAgICAgIHRoaXMudGFpbCA9IHRoaXMudGFpbC5wcmV2O1xuICAgICAgICB0aGlzLnRhaWwubmV4dCA9IG51bGw7XG4gICAgICAgIHRoaXMubGVuZ3RoLS07XG4gICAgICAgIHJldHVybiB0YWlsO1xuICAgIH1cblxuICAgIHNoaWZ0KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG5cbiAgICAgICAgbmV3Tm9kZS5uZXh0ID0gdGhpcy5oZWFkO1xuICAgICAgICB0aGlzLmhlYWQucHJldiA9IG5ld05vZGU7XG4gICAgICAgIHRoaXMuaGVhZCA9IG5ld05vZGU7XG4gICAgICAgIHRoaXMubGVuZ3RoKys7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHVuc2hpZnQoKSB7XG4gICAgICAgIGNvbnN0IG9sZEhlYWQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0O1xuICAgICAgICB0aGlzLmhlYWQucHJldiA9IG51bGw7XG4gICAgICAgIHRoaXMubGVuZ3RoLS07XG4gICAgICAgIHJldHVybiBvbGRIZWFkO1xuICAgIH1cblxuICAgIGdldChpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPiB0aGlzLmxlbmd0aCAtIDEgfHwgaW5kZXggPCAwKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGV4OyBpKyspIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG5cbiAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgfVxuXG5cbiAgICBzZXQodmFsdWUsIGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA+IHRoaXMubGVuZ3RoIC0gMSB8fCBpbmRleCA8IDApIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmdldChpbmRleCk7XG4gICAgICAgIGN1cnJlbnQudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBpbnNlcnQodmFsdWUsIGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiB0aGlzLmxlbmd0aCAtIDEpIHJldHVybiBmYWxzZTtcblxuICAgICAgICB0aGlzLmxlbmd0aCsrO1xuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2hpZnQodmFsdWUpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gdGhpcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG5cbiAgICAgICAgY29uc3Qgb2xkTm9kZSA9IHRoaXMuZ2V0KGluZGV4IC0gMSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG9sZE5vZGUpXG5cbiAgICAgICAgbmV3Tm9kZS5uZXh0ID0gb2xkTm9kZS5uZXh0O1xuICAgICAgICBuZXdOb2RlLnByZXYgPSBvbGROb2RlO1xuICAgICAgICBvbGROb2RlLm5leHQgPSBuZXdOb2RlO1xuXG5cblxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlbW92ZShpbmRleCkge1xuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkgcmV0dXJuIHRoaXMudW5zaGlmdCgpO1xuICAgICAgICBpZiAoaW5kZXggPT09IHRoaXMubGVuZ3RoIC0gMSkgcmV0dXJuIHRoaXMucG9wKCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5nZXQoaW5kZXgpO1xuICAgICAgICBjb25zdCBmb3J3YXJkID0gbm9kZS5uZXh0O1xuICAgICAgICBjb25zdCBiYWNrID0gbm9kZS5wcmV2O1xuXG4gICAgICAgIGZvcndhcmQucHJldiA9IGJhY2s7XG4gICAgICAgIGJhY2submV4dCA9IGZvcndhcmQ7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmxlbmd0aC0tO1xuICAgICAgICByZXR1cm4gbm9kZTtcblxuICAgIH1cblxuICAgIHJldmVyc2UoKSB7XG4gICAgICAgIGxldCBub2RlID0gdGhpcy5oZWFkO1xuICAgICAgICBbdGhpcy5oZWFkLCB0aGlzLnRhaWxdID0gW3RoaXMudGFpbCwgdGhpcy5oZWFkXTtcbiAgICAgICAgbGV0IG5leHQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbmV4dCA9IG5vZGUubmV4dDtcbiAgICAgICAgICAgIFtub2RlLm5leHQsIG5vZGUucHJldl0gPSBbbm9kZS5wcmV2LCBub2RlLm5leHRdO1xuICAgICAgICAgICAgbm9kZSA9IG5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBwcmludE5vZGVzKCkge1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgICAgd2hpbGUoY3VycmVudCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudCk7XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpbnRWYWx1ZXMoKSB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgICB3aGlsZShjdXJyZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50LnZhbHVlKTtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGxpc3QgPSBuZXcgRG91Ymx5TGlua2VkTGlzdCgpO1xuXG5saXN0LnB1c2goJ0l0ZW0gMScpO1xubGlzdC5wdXNoKCdJdGVtIDInKTtcbmxpc3QucHVzaCgnSXRlbSAzJyk7XG5saXN0LnNoaWZ0KCdJdGVtIDAnKTtcbmxpc3QucmV2ZXJzZSgpXG4vLyBsaXN0LnJlbW92ZSgzKVxuXG4vLyBsaXN0LnVuc2hpZnQoKVxuLy8gY29uc29sZS5sb2coJ1BvcHBwZWQ6Jylcbi8vIGNvbnNvbGUubG9nKGxpc3QucG9wKCkpXG4vLyBjb25zb2xlLmxvZyhgXFxuYClcbi8vIGNvbnNvbGUubG9nKGxpc3Quc2V0KCdIZWxsbycsICkpXG4vLyBsaXN0Lmluc2VydCgnU3VwJywgMilcbi8vIGxpc3QucmVtb3ZlKDIpXG5saXN0LnByaW50Tm9kZXMoKVxuLy8gY29uc29sZS5sb2cobGlzdC5nZXQoMikpXG4vLyBsaXN0LnByaW50VmFsdWVzKClcbi8vIGNvbnNvbGUubG9nKGxpc3QpIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCBcIi4vYWxnb3JpdGhtcy9mcmVxQ291bnRlclwiO1xuLy8gaW1wb3J0IFwiLi9hbGdvcml0aG1zL211bHRpUG9pbnRlcnNcIjtcbi8vIGltcG9ydCBcIi4vYWxnb3JpdGhtcy9zbGlkaW5nV2luZG93XCI7XG4vLyBpbXBvcnQgXCIuL2FsZ29yaXRobXMvcmVjdXJzaW9uXCI7XG4vLyBpbXBvcnQgXCIuL2FsZ29yaXRobXMvYmluYXJ5U2VhcmNoXCI7XG4vLyBpbXBvcnQgXCIuL2FsZ29yaXRobXMvc3RyaW5nU2VhcmNoXCI7XG4vLyBpbXBvcnQgXCIuL2FsZ29yaXRobXMvYnViYmxlU29ydFwiO1xuLy8gaW1wb3J0IFwiLi9hbGdvcml0aG1zL3NlbGVjdGlvblNvcnRcIjtcbi8vIGltcG9ydCBcIi4vYWxnb3JpdGhtcy9pbnNlcnRpb25Tb3J0XCI7XG4vLyBpbXBvcnQgXCIuL2FsZ29yaXRobXMvbWVyZ2VTb3J0XCI7XG4vLyBpbXBvcnQgXCIuL2FsZ29yaXRobXMvcmFkaXhTb3J0XCI7XG5cblxuLy8gaW1wb3J0IFwiLi9kYXRhLXN0cnVjdHVyZXMvY2xhc3NSZWZyZXNoZXJcIlxuLy8gaW1wb3J0IFwiLi9kYXRhLXN0cnVjdHVyZXMvc2luZ2x5TGlua2VkTGlzdFwiXG5pbXBvcnQgXCIuL2RhdGEtc3RydWN0dXJlcy9kb3VibHlMaW5rZWRMaXN0c1wiXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==