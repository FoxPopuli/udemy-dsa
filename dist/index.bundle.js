/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data-structures/doublyLinkedLists.js":
/*!**************************************************!*\
  !*** ./src/data-structures/doublyLinkedLists.js ***!
  \**************************************************/
/***/ (() => {


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
            this.head = node;
            this.tail = node;
            this.head.next = this.tail;
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
        return this;
    }

    unshift() {
        const oldHead = this.head;
        this.head = this.head.next;
        this.head.prev = null;
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
// list.unshift()
// list.pop()
// console.log(list.set('Hello', ))
list.insert('Sup', 2)
list.remove(2)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixXQUFXOztBQUVuQztBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDdkpBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDNEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91ZGVteS1kc2EvLi9zcmMvZGF0YS1zdHJ1Y3R1cmVzL2RvdWJseUxpbmtlZExpc3RzLmpzIiwid2VicGFjazovL3VkZW15LWRzYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91ZGVteS1kc2Evd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdWRlbXktZHNhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly91ZGVteS1kc2Evd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly91ZGVteS1kc2Evd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91ZGVteS1kc2EvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubmV4dCA9IG51bGw7XG4gICAgICAgIHRoaXMucHJldiA9IG51bGw7XG4gICAgfVxufVxuXG5jbGFzcyBEb3VibHlMaW5rZWRMaXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oZWFkID0gbnVsbDtcbiAgICAgICAgdGhpcy50YWlsID0gbnVsbDtcbiAgICAgICAgdGhpcy5sZW5ndGggPSAwO1xuICAgIH1cblxuICAgIHB1c2godmFsdWUpIHtcbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmhlYWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZCA9IG5vZGU7XG4gICAgICAgICAgICB0aGlzLnRhaWwgPSBub2RlO1xuICAgICAgICAgICAgdGhpcy5oZWFkLm5leHQgPSB0aGlzLnRhaWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcHJldiA9IHRoaXMudGFpbDtcbiAgICAgICAgICAgIHRoaXMudGFpbC5uZXh0ID0gbm9kZTtcbiAgICAgICAgICAgIHRoaXMudGFpbCA9IG5vZGU7XG4gICAgICAgICAgICB0aGlzLnRhaWwucHJldiA9IHByZXY7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sZW5ndGgrKztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcG9wKCkge1xuICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICAgICAgY29uc3QgdGFpbCA9IHRoaXMudGFpbDtcbiAgICAgICAgdGhpcy50YWlsID0gdGhpcy50YWlsLnByZXY7XG4gICAgICAgIHRoaXMudGFpbC5uZXh0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5sZW5ndGgtLTtcbiAgICAgICAgcmV0dXJuIHRhaWw7XG4gICAgfVxuXG4gICAgc2hpZnQodmFsdWUpIHtcbiAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKHZhbHVlKTtcblxuICAgICAgICBuZXdOb2RlLm5leHQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIHRoaXMuaGVhZC5wcmV2ID0gbmV3Tm9kZTtcbiAgICAgICAgdGhpcy5oZWFkID0gbmV3Tm9kZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdW5zaGlmdCgpIHtcbiAgICAgICAgY29uc3Qgb2xkSGVhZCA9IHRoaXMuaGVhZDtcbiAgICAgICAgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5leHQ7XG4gICAgICAgIHRoaXMuaGVhZC5wcmV2ID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIG9sZEhlYWQ7XG4gICAgfVxuXG4gICAgZ2V0KGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA+IHRoaXMubGVuZ3RoIC0gMSB8fCBpbmRleCA8IDApIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kZXg7IGkrKykgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcblxuICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICB9XG5cblxuICAgIHNldCh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4ID4gdGhpcy5sZW5ndGggLSAxIHx8IGluZGV4IDwgMCkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuZ2V0KGluZGV4KTtcbiAgICAgICAgY3VycmVudC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGluc2VydCh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IHRoaXMubGVuZ3RoIC0gMSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHRoaXMubGVuZ3RoKys7XG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zaGlmdCh2YWx1ZSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSB0aGlzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKHZhbHVlKTtcblxuICAgICAgICBjb25zdCBvbGROb2RlID0gdGhpcy5nZXQoaW5kZXggLSAxKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cob2xkTm9kZSlcblxuICAgICAgICBuZXdOb2RlLm5leHQgPSBvbGROb2RlLm5leHQ7XG4gICAgICAgIG5ld05vZGUucHJldiA9IG9sZE5vZGU7XG4gICAgICAgIG9sZE5vZGUubmV4dCA9IG5ld05vZGU7XG5cblxuXG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVtb3ZlKGluZGV4KSB7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSByZXR1cm4gdGhpcy51bnNoaWZ0KCk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gdGhpcy5sZW5ndGggLSAxKSByZXR1cm4gdGhpcy5wb3AoKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldChpbmRleCk7XG4gICAgICAgIGNvbnN0IGZvcndhcmQgPSBub2RlLm5leHQ7XG4gICAgICAgIGNvbnN0IGJhY2sgPSBub2RlLnByZXY7XG4gICAgICAgIGZvcndhcmQucHJldiA9IGJhY2s7XG4gICAgICAgIGJhY2submV4dCA9IGZvcndhcmQ7XG4gICAgICAgIHRoaXMubGVuZ3RoLS07XG4gICAgICAgIHJldHVybiBub2RlO1xuXG4gICAgfVxuXG5cbiAgICBwcmludE5vZGVzKCkge1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgICAgd2hpbGUoY3VycmVudCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudCk7XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpbnRWYWx1ZXMoKSB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgICB3aGlsZShjdXJyZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50LnZhbHVlKTtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGxpc3QgPSBuZXcgRG91Ymx5TGlua2VkTGlzdCgpO1xuXG5saXN0LnB1c2goJ0l0ZW0gMScpO1xubGlzdC5wdXNoKCdJdGVtIDInKTtcbmxpc3QucHVzaCgnSXRlbSAzJyk7XG5saXN0LnNoaWZ0KCdJdGVtIDAnKTtcbi8vIGxpc3QudW5zaGlmdCgpXG4vLyBsaXN0LnBvcCgpXG4vLyBjb25zb2xlLmxvZyhsaXN0LnNldCgnSGVsbG8nLCApKVxubGlzdC5pbnNlcnQoJ1N1cCcsIDIpXG5saXN0LnJlbW92ZSgyKVxubGlzdC5wcmludE5vZGVzKClcbi8vIGNvbnNvbGUubG9nKGxpc3QuZ2V0KDIpKVxuLy8gbGlzdC5wcmludFZhbHVlcygpXG4vLyBjb25zb2xlLmxvZyhsaXN0KSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgXCIuL2FsZ29yaXRobXMvZnJlcUNvdW50ZXJcIjtcbi8vIGltcG9ydCBcIi4vYWxnb3JpdGhtcy9tdWx0aVBvaW50ZXJzXCI7XG4vLyBpbXBvcnQgXCIuL2FsZ29yaXRobXMvc2xpZGluZ1dpbmRvd1wiO1xuLy8gaW1wb3J0IFwiLi9hbGdvcml0aG1zL3JlY3Vyc2lvblwiO1xuLy8gaW1wb3J0IFwiLi9hbGdvcml0aG1zL2JpbmFyeVNlYXJjaFwiO1xuLy8gaW1wb3J0IFwiLi9hbGdvcml0aG1zL3N0cmluZ1NlYXJjaFwiO1xuLy8gaW1wb3J0IFwiLi9hbGdvcml0aG1zL2J1YmJsZVNvcnRcIjtcbi8vIGltcG9ydCBcIi4vYWxnb3JpdGhtcy9zZWxlY3Rpb25Tb3J0XCI7XG4vLyBpbXBvcnQgXCIuL2FsZ29yaXRobXMvaW5zZXJ0aW9uU29ydFwiO1xuLy8gaW1wb3J0IFwiLi9hbGdvcml0aG1zL21lcmdlU29ydFwiO1xuLy8gaW1wb3J0IFwiLi9hbGdvcml0aG1zL3JhZGl4U29ydFwiO1xuXG5cbi8vIGltcG9ydCBcIi4vZGF0YS1zdHJ1Y3R1cmVzL2NsYXNzUmVmcmVzaGVyXCJcbi8vIGltcG9ydCBcIi4vZGF0YS1zdHJ1Y3R1cmVzL3NpbmdseUxpbmtlZExpc3RcIlxuaW1wb3J0IFwiLi9kYXRhLXN0cnVjdHVyZXMvZG91Ymx5TGlua2VkTGlzdHNcIlxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=