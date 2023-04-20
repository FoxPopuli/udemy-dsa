/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data-structures/singlyLinkedList.js":
/*!*************************************************!*\
  !*** ./src/data-structures/singlyLinkedList.js ***!
  \*************************************************/
/***/ (() => {

// Linked list is an ordered data structure in which every item (node) has a value and a link to the next element, or null if it's the last element


// Structure tracks the head (first node), tail (last node) and length

// Random access is not allowed ie can't jump to a particular value, must traverse the list to find a value (stairs rather than elevator)
// Trade off is that linked lists are good at insertion and deletion (main reason to use a linked list)

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Technically a linked list, but it sucks
const first = new Node("Hi");
first.next = new Node('Sup');
first.next.next = new Node('Ahh');
first.next.next.next = new Node('Wew');

// Properly this time
class SinglyLinkedList {
    // No constructor argumnents, using push instead
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }

        this.length++;

        return this;
    }

    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = this.head;
        
        // newTail lags one instance behind the current node
        while (current.next) {
            newTail = current
            current = current.next
        }

        newTail.next = null
        this.tail = newTail;
        this.length--;

        // Need to account for the edge case of having just one item
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current; 
    }

    // Removes and returns the head
    shift() {
        if (!this.head) return undefined;

        let currentHead = this.head
        this.head = currentHead.next;
        currentHead.next = null;
        this.length--;

        if (this.length === 0) this.tail = null;

        return currentHead;
    }

    // Adds new head
    unshift(value) {
        const newHead = new Node(value)
        if (!this.head) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            newHead.next = this.head
            this.head = newHead;
        }


        this.length++;
        return this;
    }

    get(index) {
        if (index < 0) return undefined;
        
        let currentNode = this.head;
        let i = 0;
        while (i < index) {
            currentNode = currentNode.next;
            i++;
            if (!currentNode) return undefined;
        }

        return currentNode;
    }

    insert(index, value) {
        if (index === 0) {
            this.unshift(value);
            return true
        }

        if (index === this.length) {
            this.push(value);
            return true;
        }

        const currentNode = this.get(index);
        if (!currentNode) return false;

        const newNode = new Node(value);
        const prevNode = this.get(index - 1)
        prevNode.next = newNode
        newNode.next = currentNode;
        this.length++;
        return true;
    }

    set(index, value) {
        const updatedNode = this.get(index);
        if (!updatedNode) return false;
        updatedNode.value = value;
        return this;
    }

    remove(index) {

        const foundNode = this.get(index);
        if (!foundNode) return false;

        // Edge cases
        if (index === 0) {
            return this.shift();
        } else if (!foundNode.next) {
            return this.pop();
        }

        const prevNode = this.get(index - 1);
        const nextNode = this.get(index + 1);
        prevNode.next = nextNode;
        this.length--;
        return foundNode;
    }

    printAll() {
        let current = this.head;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }


    // Classic interview question

}

const list = new SinglyLinkedList()
list.push('Item 1');
list.push('Item 2');
list.push('Item 3');
list.unshift('Item 0');

list.insert(4, 'Item 4');
list.printAll()



const range = (n) => [...new Array(n).keys()];



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
/* harmony import */ var _data_structures_singlyLinkedList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-structures/singlyLinkedList */ "./src/data-structures/singlyLinkedList.js");
/* harmony import */ var _data_structures_singlyLinkedList__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_structures_singlyLinkedList__WEBPACK_IMPORTED_MODULE_0__);
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

// import "./data-structures/linkedListTest"



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTs7Ozs7Ozs7VUMxTEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDMkM7QUFDM0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91ZGVteS1kc2EvLi9zcmMvZGF0YS1zdHJ1Y3R1cmVzL3NpbmdseUxpbmtlZExpc3QuanMiLCJ3ZWJwYWNrOi8vdWRlbXktZHNhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VkZW15LWRzYS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly91ZGVteS1kc2Evd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3VkZW15LWRzYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3VkZW15LWRzYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VkZW15LWRzYS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMaW5rZWQgbGlzdCBpcyBhbiBvcmRlcmVkIGRhdGEgc3RydWN0dXJlIGluIHdoaWNoIGV2ZXJ5IGl0ZW0gKG5vZGUpIGhhcyBhIHZhbHVlIGFuZCBhIGxpbmsgdG8gdGhlIG5leHQgZWxlbWVudCwgb3IgbnVsbCBpZiBpdCdzIHRoZSBsYXN0IGVsZW1lbnRcblxuXG4vLyBTdHJ1Y3R1cmUgdHJhY2tzIHRoZSBoZWFkIChmaXJzdCBub2RlKSwgdGFpbCAobGFzdCBub2RlKSBhbmQgbGVuZ3RoXG5cbi8vIFJhbmRvbSBhY2Nlc3MgaXMgbm90IGFsbG93ZWQgaWUgY2FuJ3QganVtcCB0byBhIHBhcnRpY3VsYXIgdmFsdWUsIG11c3QgdHJhdmVyc2UgdGhlIGxpc3QgdG8gZmluZCBhIHZhbHVlIChzdGFpcnMgcmF0aGVyIHRoYW4gZWxldmF0b3IpXG4vLyBUcmFkZSBvZmYgaXMgdGhhdCBsaW5rZWQgbGlzdHMgYXJlIGdvb2QgYXQgaW5zZXJ0aW9uIGFuZCBkZWxldGlvbiAobWFpbiByZWFzb24gdG8gdXNlIGEgbGlua2VkIGxpc3QpXG5cbmNsYXNzIE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgICB9XG59XG5cbi8vIFRlY2huaWNhbGx5IGEgbGlua2VkIGxpc3QsIGJ1dCBpdCBzdWNrc1xuY29uc3QgZmlyc3QgPSBuZXcgTm9kZShcIkhpXCIpO1xuZmlyc3QubmV4dCA9IG5ldyBOb2RlKCdTdXAnKTtcbmZpcnN0Lm5leHQubmV4dCA9IG5ldyBOb2RlKCdBaGgnKTtcbmZpcnN0Lm5leHQubmV4dC5uZXh0ID0gbmV3IE5vZGUoJ1dldycpO1xuXG4vLyBQcm9wZXJseSB0aGlzIHRpbWVcbmNsYXNzIFNpbmdseUxpbmtlZExpc3Qge1xuICAgIC8vIE5vIGNvbnN0cnVjdG9yIGFyZ3VtbmVudHMsIHVzaW5nIHB1c2ggaW5zdGVhZFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuaGVhZCA9IG51bGw7XG4gICAgICAgIHRoaXMudGFpbCA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVzaCh2YWx1ZSkge1xuICAgICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUodmFsdWUpXG4gICAgICAgIGlmICghdGhpcy5oZWFkKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWQgPSBuZXdOb2RlO1xuICAgICAgICAgICAgdGhpcy50YWlsID0gbmV3Tm9kZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGFpbC5uZXh0ID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIHRoaXMudGFpbCA9IG5ld05vZGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGVuZ3RoKys7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcG9wKCkge1xuICAgICAgICBpZiAoIXRoaXMuaGVhZCkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgICAgbGV0IG5ld1RhaWwgPSB0aGlzLmhlYWQ7XG4gICAgICAgIFxuICAgICAgICAvLyBuZXdUYWlsIGxhZ3Mgb25lIGluc3RhbmNlIGJlaGluZCB0aGUgY3VycmVudCBub2RlXG4gICAgICAgIHdoaWxlIChjdXJyZW50Lm5leHQpIHtcbiAgICAgICAgICAgIG5ld1RhaWwgPSBjdXJyZW50XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0XG4gICAgICAgIH1cblxuICAgICAgICBuZXdUYWlsLm5leHQgPSBudWxsXG4gICAgICAgIHRoaXMudGFpbCA9IG5ld1RhaWw7XG4gICAgICAgIHRoaXMubGVuZ3RoLS07XG5cbiAgICAgICAgLy8gTmVlZCB0byBhY2NvdW50IGZvciB0aGUgZWRnZSBjYXNlIG9mIGhhdmluZyBqdXN0IG9uZSBpdGVtXG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5oZWFkID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMudGFpbCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3VycmVudDsgXG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlcyBhbmQgcmV0dXJucyB0aGUgaGVhZFxuICAgIHNoaWZ0KCkge1xuICAgICAgICBpZiAoIXRoaXMuaGVhZCkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgICAgICBsZXQgY3VycmVudEhlYWQgPSB0aGlzLmhlYWRcbiAgICAgICAgdGhpcy5oZWFkID0gY3VycmVudEhlYWQubmV4dDtcbiAgICAgICAgY3VycmVudEhlYWQubmV4dCA9IG51bGw7XG4gICAgICAgIHRoaXMubGVuZ3RoLS07XG5cbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB0aGlzLnRhaWwgPSBudWxsO1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50SGVhZDtcbiAgICB9XG5cbiAgICAvLyBBZGRzIG5ldyBoZWFkXG4gICAgdW5zaGlmdCh2YWx1ZSkge1xuICAgICAgICBjb25zdCBuZXdIZWFkID0gbmV3IE5vZGUodmFsdWUpXG4gICAgICAgIGlmICghdGhpcy5oZWFkKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWQgPSBuZXdIZWFkO1xuICAgICAgICAgICAgdGhpcy50YWlsID0gbmV3SGVhZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld0hlYWQubmV4dCA9IHRoaXMuaGVhZFxuICAgICAgICAgICAgdGhpcy5oZWFkID0gbmV3SGVhZDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5sZW5ndGgrKztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0KGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIFxuICAgICAgICBsZXQgY3VycmVudE5vZGUgPSB0aGlzLmhlYWQ7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgd2hpbGUgKGkgPCBpbmRleCkge1xuICAgICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0O1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgaWYgKCFjdXJyZW50Tm9kZSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgICB9XG5cbiAgICBpbnNlcnQoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy51bnNoaWZ0KHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjdXJyZW50Tm9kZSA9IHRoaXMuZ2V0KGluZGV4KTtcbiAgICAgICAgaWYgKCFjdXJyZW50Tm9kZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgICAgIGNvbnN0IHByZXZOb2RlID0gdGhpcy5nZXQoaW5kZXggLSAxKVxuICAgICAgICBwcmV2Tm9kZS5uZXh0ID0gbmV3Tm9kZVxuICAgICAgICBuZXdOb2RlLm5leHQgPSBjdXJyZW50Tm9kZTtcbiAgICAgICAgdGhpcy5sZW5ndGgrKztcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgc2V0KGluZGV4LCB2YWx1ZSkge1xuICAgICAgICBjb25zdCB1cGRhdGVkTm9kZSA9IHRoaXMuZ2V0KGluZGV4KTtcbiAgICAgICAgaWYgKCF1cGRhdGVkTm9kZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB1cGRhdGVkTm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZW1vdmUoaW5kZXgpIHtcblxuICAgICAgICBjb25zdCBmb3VuZE5vZGUgPSB0aGlzLmdldChpbmRleCk7XG4gICAgICAgIGlmICghZm91bmROb2RlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgLy8gRWRnZSBjYXNlc1xuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNoaWZ0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIWZvdW5kTm9kZS5uZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZXZOb2RlID0gdGhpcy5nZXQoaW5kZXggLSAxKTtcbiAgICAgICAgY29uc3QgbmV4dE5vZGUgPSB0aGlzLmdldChpbmRleCArIDEpO1xuICAgICAgICBwcmV2Tm9kZS5uZXh0ID0gbmV4dE5vZGU7XG4gICAgICAgIHRoaXMubGVuZ3RoLS07XG4gICAgICAgIHJldHVybiBmb3VuZE5vZGU7XG4gICAgfVxuXG4gICAgcHJpbnRBbGwoKSB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgICB3aGlsZShjdXJyZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50LnZhbHVlKTtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIENsYXNzaWMgaW50ZXJ2aWV3IHF1ZXN0aW9uXG5cbn1cblxuY29uc3QgbGlzdCA9IG5ldyBTaW5nbHlMaW5rZWRMaXN0KClcbmxpc3QucHVzaCgnSXRlbSAxJyk7XG5saXN0LnB1c2goJ0l0ZW0gMicpO1xubGlzdC5wdXNoKCdJdGVtIDMnKTtcbmxpc3QudW5zaGlmdCgnSXRlbSAwJyk7XG5cbmxpc3QuaW5zZXJ0KDQsICdJdGVtIDQnKTtcbmxpc3QucHJpbnRBbGwoKVxuXG5cblxuY29uc3QgcmFuZ2UgPSAobikgPT4gWy4uLm5ldyBBcnJheShuKS5rZXlzKCldO1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0IFwiLi9hbGdvcml0aG1zL2ZyZXFDb3VudGVyXCI7XG4vLyBpbXBvcnQgXCIuL2FsZ29yaXRobXMvbXVsdGlQb2ludGVyc1wiO1xuLy8gaW1wb3J0IFwiLi9hbGdvcml0aG1zL3NsaWRpbmdXaW5kb3dcIjtcbi8vIGltcG9ydCBcIi4vYWxnb3JpdGhtcy9yZWN1cnNpb25cIjtcbi8vIGltcG9ydCBcIi4vYWxnb3JpdGhtcy9iaW5hcnlTZWFyY2hcIjtcbi8vIGltcG9ydCBcIi4vYWxnb3JpdGhtcy9zdHJpbmdTZWFyY2hcIjtcbi8vIGltcG9ydCBcIi4vYWxnb3JpdGhtcy9idWJibGVTb3J0XCI7XG4vLyBpbXBvcnQgXCIuL2FsZ29yaXRobXMvc2VsZWN0aW9uU29ydFwiO1xuLy8gaW1wb3J0IFwiLi9hbGdvcml0aG1zL2luc2VydGlvblNvcnRcIjtcbi8vIGltcG9ydCBcIi4vYWxnb3JpdGhtcy9tZXJnZVNvcnRcIjtcbi8vIGltcG9ydCBcIi4vYWxnb3JpdGhtcy9yYWRpeFNvcnRcIjtcblxuXG4vLyBpbXBvcnQgXCIuL2RhdGEtc3RydWN0dXJlcy9jbGFzc1JlZnJlc2hlclwiXG5pbXBvcnQgXCIuL2RhdGEtc3RydWN0dXJlcy9zaW5nbHlMaW5rZWRMaXN0XCJcbi8vIGltcG9ydCBcIi4vZGF0YS1zdHJ1Y3R1cmVzL2xpbmtlZExpc3RUZXN0XCJcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=