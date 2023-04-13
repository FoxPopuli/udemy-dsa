/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ "./src/algorithms/binarySearch.js":
/*!****************************************!*\
  !*** ./src/algorithms/binarySearch.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/algorithms/bubbleSort.js":
/*!**************************************!*\
  !*** ./src/algorithms/bubbleSort.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bubbleSort": () => (/* binding */ bubbleSort)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/algorithms/helpers.js");


// Time: Best O(n), average O(n^2), worst O(n^2)
// Space: O(1)
// Performs better than merge sort on nearly sorted data (kind of), similar to insertion sort (but slower)

const bubbleSort = (arr) => {
    let swaps = 1;

    let passes = arr.length;
    while (swaps > 0) {
        swaps = 0;

        for (let i = 1; i < passes; i++) {
            if (arr[i] < arr[i - 1]) {
                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.swap)(arr, i, i - 1);
                swaps++;
            }
        }
        passes--;
    }

    return arr;
}

const unsortedArr = [10, 2, 3, 4, 1, 3, 4, 1, 122, 4, 23, 95, 32];
bubbleSort(unsortedArr);
console.log(unsortedArr)


/***/ }),

/***/ "./src/algorithms/freqCounter.js":
/*!***************************************!*\
  !*** ./src/algorithms/freqCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/algorithms/helpers.js":
/*!***********************************!*\
  !*** ./src/algorithms/helpers.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "algTimer": () => (/* binding */ algTimer),
/* harmony export */   "swap": () => (/* binding */ swap)
/* harmony export */ });
const algTimer = (alg) => {
    const t1 = performance.now()
    alg;
    const t2 = performance.now();

    console.log((t2 - t1).toFixed(12));
}

const swap = (arr, ind1, ind2) => {
    [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]; 
}




/***/ }),

/***/ "./src/algorithms/insertionSort.js":
/*!*****************************************!*\
  !*** ./src/algorithms/insertionSort.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "insertionSort": () => (/* binding */ insertionSort)
/* harmony export */ });
// Actually useful in some scenarios, worth knowing for practicality
// Decently fast at sorting nearly sorted data (better than merge sort)

// Also good for sorting a live stream of data into a sorted array (one pass to add a new value, others have to resort the whole array)

// Time: Best O(n), average O(n^2), worst O(n^2)
// Space: O(1)

// Worst case sorting a reverse order array

// gradually builds a sorted portion of the array
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = current;
    }
    return arr;
}

const testArr = [1, 2, 4, 1, 2, 4, 12, 5];
console.log(insertionSort(testArr))

/***/ }),

/***/ "./src/algorithms/mergeSort.js":
/*!*************************************!*\
  !*** ./src/algorithms/mergeSort.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "merge": () => (/* binding */ merge)
/* harmony export */ });
// Part 1: Merging Sorted Arrays

// Helper function runs in O(n + m) time and space complexity
// Recursive function is O(log(n))
// Overall time complexity: O(nlog(n))
// Space complexity: O(n)
// Classic multi-pointers pattern



// using while (true)
const mergeBad = (arr1, arr2) => {
    const merged = [];
    let i = 0;
    let j = 0;

    while (true) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i])
            i++
        } else {
            merged.push(arr2[j])
            j++
        }

        if (i === arr1.length - 1) {
            merged.push(arr2.slice(j));
            break;
        }

        if (j === arr2.length - 1) {
            merged.push(arr1.slice(i))
            break;
        } 
    }

    return merged;
}

// not using while (true)

const merge = (arr1, arr2) => {
    const merged = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    let diff = arr1.length - arr2.length;

    if (diff > 0) {
        merged.push(...arr1.slice(i));
    } else if (diff < 0) {
        merged.push(...arr2.slice(j));
    }

    return merged;
}



console.log('merge:')
console.log(merge([1, 2, 3, 4, 10, 20, 21, 31, 41], [1, 1, 1, 1, 1, 1, 1, 12, 12, 15, 17, 19]));

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;    // Base case

    const mid = Math.floor(arr.length / 2)
    const right = mergeSort(arr.slice(mid));
    const left = mergeSort(arr.slice(0, mid));

    return merge(left, right);


}

/***/ }),

/***/ "./src/algorithms/multiPointers.js":
/*!*****************************************!*\
  !*** ./src/algorithms/multiPointers.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/algorithms/radixSort.js":
/*!*************************************!*\
  !*** ./src/algorithms/radixSort.js ***!
  \*************************************/
/***/ (() => {

// Differs from comparison sort
// Can only sort lists of numbers
// Sorts numbers into 10 (in base 10) "buckets" based on the rightmost digit


// Time complexity
// best, average, worst = O(nk)
// n is number of numbers,
// k is the length of the numbers (aka word length)
// For sufficiently random data, k = log(n), making it just as good as merge sort, sometimes better (for a large amount of small numbers for example)


// Space complexity
// O(n + k)
 
const testArr = [12, 4, 12, 44, 5, 666, 77, 23];

// getDigit helper function
const getDigit = (num, pos) => {
    return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
}

const digitCount = (num) => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const mostDigits = (arr) => {
    let highest = -Infinity;
    arr.forEach(item => {
        let current = item.toString().length;
        if (current > highest) highest = current;
    } )
    return highest;
}

const radixReal = (arr) => {
    const most = mostDigits(arr);     // We need this many loops
    for (let i = 0; i < most; i++) {
        let mainArr = Array.from({length: 10}, () => []);
        arr.forEach(num => {
            mainArr[getDigit(num, i)].push(num);
        })
    }
    nums = [].concat(...mainArr);
}

const testNum = 1230;


/***/ }),

/***/ "./src/algorithms/recursion.js":
/*!*************************************!*\
  !*** ./src/algorithms/recursion.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/algorithms/selectionSort.js":
/*!*****************************************!*\
  !*** ./src/algorithms/selectionSort.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectionSort": () => (/* binding */ selectionSort)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/algorithms/helpers.js");


const testArr = [1, 2, 3, 1, 2, 54, 23, 6, 1, 67];

// Works like bubble sort in reverse. Loop through, find minimum, swap it with i, increment i, repeat
// Time: Best, worst and average O(n^2)
// Space: O(1);
// Only better than bubble sort if you need to minimize the number of swaps, since we only do n swaps 
// ie minimize how often we write to memory, super uncommon scenario
// Sucks pretty hard, almost no reason to use it

const selectionSort = (arr) => {
    let i = 0;
    while(i < arr.length) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        // Optimization conditional 
        if (i !== min) (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.swap)(arr, i, min);
        i++;

    }
    
    return arr;
}

console.log('Original arr: ');
console.log(testArr);

console.log('Selection Sort: ');
console.log(selectionSort(testArr));

/***/ }),

/***/ "./src/algorithms/slidingWindow.js":
/*!*****************************************!*\
  !*** ./src/algorithms/slidingWindow.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
 

const minSubArrayLength = (arr, n) => {
    let sum = 0;

    let max = 0;
    while (sum <= n) {
        sum += arr[max];
        max++;

        if (max > arr.length - 1) return 0;
    }

    let temp = sum;
    for (let i = max; i < (arr.length - max); i++) {
        let j = i - max;

        temp = temp - arr[j] + arr[i];

        while (temp >= n) {
            temp -= arr[j]
            j++;
            max--;
        }
    } 
}

/***/ }),

/***/ "./src/algorithms/stringSearch.js":
/*!****************************************!*\
  !*** ./src/algorithms/stringSearch.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stringSearchNaive": () => (/* binding */ stringSearchNaive)
/* harmony export */ });
const stringSearchNaive = (str, substr) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === substr[0]) {
            for (let j = 0; j < substr.length; j++) {
                if (str[i + j] !== substr[j]) break;
                if (j === substr.length - 1) count++;
            }

        }
    }

    return count;
}

const str1 = 'uwu uwu uwu'
const pattern = 'uwu';

console.log(stringSearchNaive(str1, pattern));

/***/ }),

/***/ "./src/data-structures/classRefresher.js":
/*!***********************************************!*\
  !*** ./src/data-structures/classRefresher.js ***!
  \***********************************************/
/***/ (() => {

// Example class

class Student {
    constructor (name, age, year) {
        this.firstName = name.split(' ')[0];
        this.lastName = name.split(' ')[1];
        this.age = age
        this.year = year
        
        const lastDigit = +this.year.toString()[this.year.toString().length - 1]

        switch (lastDigit) {
            case 1:
                this.yearSuffix = 'st';
                break;
            case 2:
                this.yearSuffix = 'nd';
                break;
            case 3:
                this.yearSuffix = 'rd';
                break;
            default:
                this.yearSuffix = 'th';
                break;
        }


    }

    // Instance methods are attached to instances of a class
    // they are called on instances

    introduceSelf() {
        return `Hi! My name is ${this.firstName}, I am ${this.age} years old and I'm in ${this.year}${this.yearSuffix} year. Nice to meet you!`
    }


    // Static methods are attached to the class, not instances of the class
    // Called on the class, not instances
    // Usually used for utility functions
    // Seems to mostly take instances of the class as arguments

    static enrollStudents(...students) {
        // Send email here or something
        console.log(students)   // Placeholder
    }


}

const larry = new Student('Larry Greene', 12, 3)
console.log(larry.introduceSelf());

/***/ }),

/***/ "./src/data-structures/singlyLinkedList.js":
/*!*************************************************!*\
  !*** ./src/data-structures/singlyLinkedList.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
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

    // to pop we have to traverse
    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next
        }
    }

    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = this.head;
        
        while (current.next) {
            newTail = current
            current = current.next
        }

        newTail.next = null

        this.tail = newTail;


        this.length--;

        return current;
    }
}

const list = new SinglyLinkedList()
list.push('Item 1');
list.push('Item 2');
list.push('Item 3');
console.log(list.pop())
console.log(list);


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
/* harmony import */ var _algorithms_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./algorithms/helpers */ "./src/algorithms/helpers.js");
/* harmony import */ var _algorithms_freqCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./algorithms/freqCounter */ "./src/algorithms/freqCounter.js");
/* harmony import */ var _algorithms_multiPointers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./algorithms/multiPointers */ "./src/algorithms/multiPointers.js");
/* harmony import */ var _algorithms_slidingWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./algorithms/slidingWindow */ "./src/algorithms/slidingWindow.js");
/* harmony import */ var _algorithms_recursion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./algorithms/recursion */ "./src/algorithms/recursion.js");
/* harmony import */ var _algorithms_binarySearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./algorithms/binarySearch */ "./src/algorithms/binarySearch.js");
/* harmony import */ var _algorithms_stringSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./algorithms/stringSearch */ "./src/algorithms/stringSearch.js");
/* harmony import */ var _algorithms_bubbleSort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./algorithms/bubbleSort */ "./src/algorithms/bubbleSort.js");
/* harmony import */ var _algorithms_selectionSort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./algorithms/selectionSort */ "./src/algorithms/selectionSort.js");
/* harmony import */ var _algorithms_insertionSort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./algorithms/insertionSort */ "./src/algorithms/insertionSort.js");
/* harmony import */ var _algorithms_mergeSort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./algorithms/mergeSort */ "./src/algorithms/mergeSort.js");
/* harmony import */ var _algorithms_radixSort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./algorithms/radixSort */ "./src/algorithms/radixSort.js");
/* harmony import */ var _algorithms_radixSort__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_algorithms_radixSort__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _data_structures_classRefresher__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./data-structures/classRefresher */ "./src/data-structures/classRefresher.js");
/* harmony import */ var _data_structures_classRefresher__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_data_structures_classRefresher__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _data_structures_singlyLinkedList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./data-structures/singlyLinkedList */ "./src/data-structures/singlyLinkedList.js");
















const arr1 = [1, 2, 3, 4, 4, 4, 5, 6, 7, 7, 8, 8, 8, 9, 12, 10000];

// const arr2 = arr1.map(item => item**2);

const str = "calculate"


const arr3 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log((0,_algorithms_binarySearch__WEBPACK_IMPORTED_MODULE_5__.binarySearch)(arr1, 7))

const unsortedArr = [1, 2, 3, 4, 1, 3, 4, 1, 122, 4, 23, 95, 32];
console.log((0,_algorithms_bubbleSort__WEBPACK_IMPORTED_MODULE_7__.bubbleSort)(unsortedArr));



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjs7QUFFbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0Isc0JBQXNCO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUEsa0NBQWtDLFFBQVE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxRQUFR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Ozs7Ozs7OztBQ044QztBQUM4QjtBQUNUO0FBQ0Q7QUFDbkI7QUFDVTtBQUNLO0FBQ1Q7QUFDTTtBQUNBO0FBQzNCO0FBQ0E7QUFDUzs7QUFFRTs7QUFFM0M7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0EsWUFBWSxzRUFBWTs7QUFFeEI7QUFDQSxZQUFZLGtFQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdWRlbXktZHNhLy4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdWRlbXktZHNhLy4vc3JjL2FsZ29yaXRobXMvYmluYXJ5U2VhcmNoLmpzIiwid2VicGFjazovL3VkZW15LWRzYS8uL3NyYy9hbGdvcml0aG1zL2J1YmJsZVNvcnQuanMiLCJ3ZWJwYWNrOi8vdWRlbXktZHNhLy4vc3JjL2FsZ29yaXRobXMvZnJlcUNvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vdWRlbXktZHNhLy4vc3JjL2FsZ29yaXRobXMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly91ZGVteS1kc2EvLi9zcmMvYWxnb3JpdGhtcy9pbnNlcnRpb25Tb3J0LmpzIiwid2VicGFjazovL3VkZW15LWRzYS8uL3NyYy9hbGdvcml0aG1zL21lcmdlU29ydC5qcyIsIndlYnBhY2s6Ly91ZGVteS1kc2EvLi9zcmMvYWxnb3JpdGhtcy9tdWx0aVBvaW50ZXJzLmpzIiwid2VicGFjazovL3VkZW15LWRzYS8uL3NyYy9hbGdvcml0aG1zL3JhZGl4U29ydC5qcyIsIndlYnBhY2s6Ly91ZGVteS1kc2EvLi9zcmMvYWxnb3JpdGhtcy9yZWN1cnNpb24uanMiLCJ3ZWJwYWNrOi8vdWRlbXktZHNhLy4vc3JjL2FsZ29yaXRobXMvc2VsZWN0aW9uU29ydC5qcyIsIndlYnBhY2s6Ly91ZGVteS1kc2EvLi9zcmMvYWxnb3JpdGhtcy9zbGlkaW5nV2luZG93LmpzIiwid2VicGFjazovL3VkZW15LWRzYS8uL3NyYy9hbGdvcml0aG1zL3N0cmluZ1NlYXJjaC5qcyIsIndlYnBhY2s6Ly91ZGVteS1kc2EvLi9zcmMvZGF0YS1zdHJ1Y3R1cmVzL2NsYXNzUmVmcmVzaGVyLmpzIiwid2VicGFjazovL3VkZW15LWRzYS8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvc2luZ2x5TGlua2VkTGlzdC5qcyIsIndlYnBhY2s6Ly91ZGVteS1kc2Evd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdWRlbXktZHNhL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3VkZW15LWRzYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdWRlbXktZHNhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdWRlbXktZHNhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdWRlbXktZHNhLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSID0gdHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnID8gUmVmbGVjdCA6IG51bGxcbnZhciBSZWZsZWN0QXBwbHkgPSBSICYmIHR5cGVvZiBSLmFwcGx5ID09PSAnZnVuY3Rpb24nXG4gID8gUi5hcHBseVxuICA6IGZ1bmN0aW9uIFJlZmxlY3RBcHBseSh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpO1xuICB9XG5cbnZhciBSZWZsZWN0T3duS2V5c1xuaWYgKFIgJiYgdHlwZW9mIFIub3duS2V5cyA9PT0gJ2Z1bmN0aW9uJykge1xuICBSZWZsZWN0T3duS2V5cyA9IFIub3duS2V5c1xufSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcbiAgICAgIC5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKTtcbiAgfTtcbn0gZWxzZSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb2Nlc3NFbWl0V2FybmluZyh3YXJuaW5nKSB7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUud2FybikgY29uc29sZS53YXJuKHdhcm5pbmcpO1xufVxuXG52YXIgTnVtYmVySXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gTnVtYmVySXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICBFdmVudEVtaXR0ZXIuaW5pdC5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5tb2R1bGUuZXhwb3J0cy5vbmNlID0gb25jZTtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbmZ1bmN0aW9uIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIF9nZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuIF9nZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSBfZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIGlmICghdGhpcy5maXJlZCkge1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSwgdGhpcy53cmFwRm4pO1xuICAgIHRoaXMuZmlyZWQgPSB0cnVlO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuY2FsbCh0aGlzLnRhcmdldCk7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuYXBwbHkodGhpcy50YXJnZXQsIGFyZ3VtZW50cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX29uY2VXcmFwKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIHN0YXRlID0geyBmaXJlZDogZmFsc2UsIHdyYXBGbjogdW5kZWZpbmVkLCB0YXJnZXQ6IHRhcmdldCwgdHlwZTogdHlwZSwgbGlzdGVuZXI6IGxpc3RlbmVyIH07XG4gIHZhciB3cmFwcGVkID0gb25jZVdyYXBwZXIuYmluZChzdGF0ZSk7XG4gIHdyYXBwZWQubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgc3RhdGUud3JhcEZuID0gd3JhcHBlZDtcbiAgcmV0dXJuIHdyYXBwZWQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UodHlwZSwgbGlzdGVuZXIpIHtcbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIHRoaXMub24odHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kT25jZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kT25jZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMucHJlcGVuZExpc3RlbmVyKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuLy8gRW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmIGFuZCBvbmx5IGlmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgbGlzdCwgZXZlbnRzLCBwb3NpdGlvbiwgaSwgb3JpZ2luYWxMaXN0ZW5lcjtcblxuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIG9uY2UoZW1pdHRlciwgbmFtZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGZ1bmN0aW9uIGVycm9yTGlzdGVuZXIoZXJyKSB7XG4gICAgICBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKG5hbWUsIHJlc29sdmVyKTtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc29sdmVyKCkge1xuICAgICAgaWYgKHR5cGVvZiBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICByZXNvbHZlKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfTtcblxuICAgIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCBuYW1lLCByZXNvbHZlciwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIGlmIChuYW1lICE9PSAnZXJyb3InKSB7XG4gICAgICBhZGRFcnJvckhhbmRsZXJJZkV2ZW50RW1pdHRlcihlbWl0dGVyLCBlcnJvckxpc3RlbmVyLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXJyb3JIYW5kbGVySWZFdmVudEVtaXR0ZXIoZW1pdHRlciwgaGFuZGxlciwgZmxhZ3MpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLm9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsICdlcnJvcicsIGhhbmRsZXIsIGZsYWdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgbmFtZSwgbGlzdGVuZXIsIGZsYWdzKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5vbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChmbGFncy5vbmNlKSB7XG4gICAgICBlbWl0dGVyLm9uY2UobmFtZSwgbGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbWl0dGVyLm9uKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGVtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIEV2ZW50VGFyZ2V0IGRvZXMgbm90IGhhdmUgYGVycm9yYCBldmVudCBzZW1hbnRpY3MgbGlrZSBOb2RlXG4gICAgLy8gRXZlbnRFbWl0dGVycywgd2UgZG8gbm90IGxpc3RlbiBmb3IgYGVycm9yYCBldmVudHMgaGVyZS5cbiAgICBlbWl0dGVyLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZnVuY3Rpb24gd3JhcExpc3RlbmVyKGFyZykge1xuICAgICAgLy8gSUUgZG9lcyBub3QgaGF2ZSBidWlsdGluIGB7IG9uY2U6IHRydWUgfWAgc3VwcG9ydCBzbyB3ZVxuICAgICAgLy8gaGF2ZSB0byBkbyBpdCBtYW51YWxseS5cbiAgICAgIGlmIChmbGFncy5vbmNlKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCB3cmFwTGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgbGlzdGVuZXIoYXJnKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJlbWl0dGVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEV2ZW50RW1pdHRlci4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGVtaXR0ZXIpO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgYmluYXJ5U2VhcmNoID0gKGFyciwgdmFsKSA9PiB7XG4gICAgbGV0IHN0YXJ0ID0gMDtcbiAgICBsZXQgZW5kID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgbGV0IG1pZCA9IE1hdGguZmxvb3IoKHN0YXJ0ICsgZW5kKSAvIDIpXG5cbiAgICB3aGlsZSAoYXJyW21pZF0gIT09IHZhbCkge1xuXG4gICAgICAgIGlmIChzdGFydCA+PSBlbmQpIHJldHVybiAtMTtcbiAgICAgICAgaWYgKGFyclttaWRdIDwgdmFsKSB7XG4gICAgICAgICAgICBzdGFydCA9IG1pZCArIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbmQgPSBtaWQgLSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgbWlkID0gTWF0aC5mbG9vcigoc3RhcnQgKyBlbmQpIC8gMik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1pZDtcblxufSIsImltcG9ydCB7IHN3YXAgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5cbi8vIFRpbWU6IEJlc3QgTyhuKSwgYXZlcmFnZSBPKG5eMiksIHdvcnN0IE8obl4yKVxuLy8gU3BhY2U6IE8oMSlcbi8vIFBlcmZvcm1zIGJldHRlciB0aGFuIG1lcmdlIHNvcnQgb24gbmVhcmx5IHNvcnRlZCBkYXRhIChraW5kIG9mKSwgc2ltaWxhciB0byBpbnNlcnRpb24gc29ydCAoYnV0IHNsb3dlcilcblxuZXhwb3J0IGNvbnN0IGJ1YmJsZVNvcnQgPSAoYXJyKSA9PiB7XG4gICAgbGV0IHN3YXBzID0gMTtcblxuICAgIGxldCBwYXNzZXMgPSBhcnIubGVuZ3RoO1xuICAgIHdoaWxlIChzd2FwcyA+IDApIHtcbiAgICAgICAgc3dhcHMgPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcGFzc2VzOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChhcnJbaV0gPCBhcnJbaSAtIDFdKSB7XG4gICAgICAgICAgICAgICAgc3dhcChhcnIsIGksIGkgLSAxKTtcbiAgICAgICAgICAgICAgICBzd2FwcysrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBhc3Nlcy0tO1xuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG59XG5cbmNvbnN0IHVuc29ydGVkQXJyID0gWzEwLCAyLCAzLCA0LCAxLCAzLCA0LCAxLCAxMjIsIDQsIDIzLCA5NSwgMzJdO1xuYnViYmxlU29ydCh1bnNvcnRlZEFycik7XG5jb25zb2xlLmxvZyh1bnNvcnRlZEFycilcbiIsIlxuXG4vLyBBbmFncmFtcyBPKG5eMilcbmV4cG9ydCBjb25zdCBpc0FuYWdyYW1CYWQgPSAoc3RyMSwgc3RyMikgPT4ge1xuICAgIGlmIChzdHIxLmxlbmd0aCAhPT0gc3RyMi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAobGV0IGxldHRlcjEgb2Ygc3RyMSkge1xuICAgICAgICBpZiAoIXN0cjIuaW5jbHVkZXMobGV0dGVyMSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBcbiAgICB9ICBcblxuICAgIHJldHVybiB0cnVlO1xufVxuXG5cbi8vIEFuYWdyYW1zIE8obilcbmV4cG9ydCBjb25zdCBpc0FuYWdyYW0gPSAoc3RyMSwgc3RyMikgPT4ge1xuICAgIGlmIChzdHIxLmxlbmd0aCAhPT0gc3RyMi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICBcbiAgICBjb25zdCBjb3VudDEgPSB7fTtcbiAgICBjb25zdCBjb3VudDIgPSB7fTtcblxuICAgIGZvciAobGV0IHZhbDEgb2Ygc3RyMSkge1xuICAgICAgICBjb3VudDFbdmFsMV0gPSAoY291bnQxW3ZhbDFdIHx8IDApICsgMTsgLy8gaWYga2V5IGV4aXN0cywgaW5jcmVtZW50IGl0IGJ5IDEuIElmIG5vdCwgaW5pdGlhbGl6ZSB0byB6ZXJvIGFuZCBpbmNyZW1lbnQgYnkgMVxuICAgIH1cblxuICAgIGZvciAobGV0IHZhbDIgb2Ygc3RyMikge1xuICAgICAgICBjb3VudDJbdmFsMl0gPSAoY291bnQyW3ZhbDJdIHx8IDApICsgMTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gY291bnQxKSB7XG4gICAgICAgIGlmICghY291bnQyLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb3VudDJba2V5XSAhPT0gY291bnQxW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbi8vIFVzZXMgdGhlIGZyZXF1ZW5jeSBjb3VudGVyIHBhdHRlcm4gdG8gZGV0ZXJtaW5lIGlmIG9uZSBhcnJheSBjb250YWlucyBvbmx5IHNxdWFyZXMgb2YgYW5vdGhlciBhcnJheVxuZXhwb3J0IGNvbnN0IGlzU3F1YXJlcyA9IChhcnIxLCBhcnIyKSA9PiB7XG4gICAgaWYgKGFycjEubGVuZ3RoICE9PSBhcnIyLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG5cbiAgICBjb25zdCBjb3VudDEgPSB7fVxuICAgIGNvbnN0IGNvdW50MiA9IHt9XG5cbiAgICBmb3IgKGxldCBudW0gb2YgYXJyMSkge1xuICAgICAgICBjb3VudDFbbnVtXSA9IChjb3VudDFbbnVtXSB8fCAwKSArIDE7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgbnVtIG9mIGFycjIpIHtcbiAgICAgICAgY291bnQyW251bV0gPSAoY291bnQyW251bV0gfHwgMCkgKyAxO1xuICAgIH1cblxuICAgIGZvciAobGV0IGtleSBpbiBjb3VudDEpIHtcbiAgICAgICAgaWYgKCFjb3VudDIuaGFzT3duUHJvcGVydHkoa2V5KioyKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdHJ1ZTtcblxufVxuXG5cbi8vIEdpdmVuIHR3byBwb3NpdGl2ZSBpbnRlZ2VycyBmaW5kIGlmIHRoZSBmcmVxdWVuY2VzIG9mIGVhY2ggZGlnaXQgYXJlIHRoZSBzYW1lXG5cbmNvbnN0IHNhbWVGcmVxdWVuY3kgPSAobjEsIG4yKSA9PiB7XG4gICAgY29uc3QgYXJyMSA9IG4xLnRvU3RyaW5nKCkuc3BsaXQoJycpO1xuICAgIGNvbnN0IGFycjIgPSBuMi50b1N0cmluZygpLnNwbGl0KCcnKTtcblxuICAgIGlmIChhcnIxLmxlbmd0aCAhPT0gYXJyMi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IGNvdW50MSA9IHt9O1xuICAgIGNvbnN0IGNvdW50MiA9IHt9O1xuXG4gICAgZm9yIChsZXQgbnVtIG9mIGFycjEpIHtcbiAgICAgICAgY291bnQxW251bV0gPSAoY291bnQxW251bV0gfHwgMCkgKyAxO1xuICAgIH1cblxuICAgIGZvciAobGV0IG51bSBvZiBhcnIyKSB7XG4gICAgICAgIGNvdW50MltudW1dID0gKGNvdW50MltudW1dIHx8IDApICsgMTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gY291bnQxKSB7XG4gICAgICAgIGlmIChjb3VudDFba2V5XSAhPT0gY291bnQyW2tleV0pIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuXG5cbi8vIEZpbmRzIGlmIGFueSBhcmd1bWVudHMgYXJlIGR1bHBsaWNhdGVzIChmcmVxQ291bnRlcilcblxuY29uc3QgYXJlVGhlcmVEdXBzID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBjb3VudCA9IHt9XG4gICAgZm9yIChsZXQgYXJnIG9mIGFyZ3MpIHtcbiAgICAgICAgY291bnRbYXJnXSA9IChjb3VudFthcmddIHx8IDApICsgMTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gY291bnQpIHtcbiAgICAgICAgaWYgKGNvdW50W2tleV0gPiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImV4cG9ydCBjb25zdCBhbGdUaW1lciA9IChhbGcpID0+IHtcbiAgICBjb25zdCB0MSA9IHBlcmZvcm1hbmNlLm5vdygpXG4gICAgYWxnO1xuICAgIGNvbnN0IHQyID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgICBjb25zb2xlLmxvZygodDIgLSB0MSkudG9GaXhlZCgxMikpO1xufVxuXG5leHBvcnQgY29uc3Qgc3dhcCA9IChhcnIsIGluZDEsIGluZDIpID0+IHtcbiAgICBbYXJyW2luZDFdLCBhcnJbaW5kMl1dID0gW2FycltpbmQyXSwgYXJyW2luZDFdXTsgXG59XG5cblxuIiwiLy8gQWN0dWFsbHkgdXNlZnVsIGluIHNvbWUgc2NlbmFyaW9zLCB3b3J0aCBrbm93aW5nIGZvciBwcmFjdGljYWxpdHlcbi8vIERlY2VudGx5IGZhc3QgYXQgc29ydGluZyBuZWFybHkgc29ydGVkIGRhdGEgKGJldHRlciB0aGFuIG1lcmdlIHNvcnQpXG5cbi8vIEFsc28gZ29vZCBmb3Igc29ydGluZyBhIGxpdmUgc3RyZWFtIG9mIGRhdGEgaW50byBhIHNvcnRlZCBhcnJheSAob25lIHBhc3MgdG8gYWRkIGEgbmV3IHZhbHVlLCBvdGhlcnMgaGF2ZSB0byByZXNvcnQgdGhlIHdob2xlIGFycmF5KVxuXG4vLyBUaW1lOiBCZXN0IE8obiksIGF2ZXJhZ2UgTyhuXjIpLCB3b3JzdCBPKG5eMilcbi8vIFNwYWNlOiBPKDEpXG5cbi8vIFdvcnN0IGNhc2Ugc29ydGluZyBhIHJldmVyc2Ugb3JkZXIgYXJyYXlcblxuLy8gZ3JhZHVhbGx5IGJ1aWxkcyBhIHNvcnRlZCBwb3J0aW9uIG9mIHRoZSBhcnJheVxuZXhwb3J0IGNvbnN0IGluc2VydGlvblNvcnQgPSAoYXJyKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBhcnJbaV07XG4gICAgICAgIGZvciAodmFyIGogPSBpIC0gMTsgaiA+PSAwICYmIGFycltqXSA+IGN1cnJlbnQ7IGotLSkge1xuICAgICAgICAgICAgYXJyW2ogKyAxXSA9IGFycltqXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFycltqICsgMV0gPSBjdXJyZW50O1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xufVxuXG5jb25zdCB0ZXN0QXJyID0gWzEsIDIsIDQsIDEsIDIsIDQsIDEyLCA1XTtcbmNvbnNvbGUubG9nKGluc2VydGlvblNvcnQodGVzdEFycikpIiwiLy8gUGFydCAxOiBNZXJnaW5nIFNvcnRlZCBBcnJheXNcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHJ1bnMgaW4gTyhuICsgbSkgdGltZSBhbmQgc3BhY2UgY29tcGxleGl0eVxuLy8gUmVjdXJzaXZlIGZ1bmN0aW9uIGlzIE8obG9nKG4pKVxuLy8gT3ZlcmFsbCB0aW1lIGNvbXBsZXhpdHk6IE8obmxvZyhuKSlcbi8vIFNwYWNlIGNvbXBsZXhpdHk6IE8obilcbi8vIENsYXNzaWMgbXVsdGktcG9pbnRlcnMgcGF0dGVyblxuXG5cblxuLy8gdXNpbmcgd2hpbGUgKHRydWUpXG5jb25zdCBtZXJnZUJhZCA9IChhcnIxLCBhcnIyKSA9PiB7XG4gICAgY29uc3QgbWVyZ2VkID0gW107XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBqID0gMDtcblxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGlmIChhcnIxW2ldIDwgYXJyMltqXSkge1xuICAgICAgICAgICAgbWVyZ2VkLnB1c2goYXJyMVtpXSlcbiAgICAgICAgICAgIGkrK1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVyZ2VkLnB1c2goYXJyMltqXSlcbiAgICAgICAgICAgIGorK1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGkgPT09IGFycjEubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgbWVyZ2VkLnB1c2goYXJyMi5zbGljZShqKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqID09PSBhcnIyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIG1lcmdlZC5wdXNoKGFycjEuc2xpY2UoaSkpXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2VkO1xufVxuXG4vLyBub3QgdXNpbmcgd2hpbGUgKHRydWUpXG5cbmV4cG9ydCBjb25zdCBtZXJnZSA9IChhcnIxLCBhcnIyKSA9PiB7XG4gICAgY29uc3QgbWVyZ2VkID0gW107XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBqID0gMDtcblxuICAgIHdoaWxlIChpIDwgYXJyMS5sZW5ndGggJiYgaiA8IGFycjIubGVuZ3RoKSB7XG4gICAgICAgIGlmIChhcnIxW2ldIDwgYXJyMltqXSkge1xuICAgICAgICAgICAgbWVyZ2VkLnB1c2goYXJyMVtpXSk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZXJnZWQucHVzaChhcnIyW2pdKTtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBkaWZmID0gYXJyMS5sZW5ndGggLSBhcnIyLmxlbmd0aDtcblxuICAgIGlmIChkaWZmID4gMCkge1xuICAgICAgICBtZXJnZWQucHVzaCguLi5hcnIxLnNsaWNlKGkpKTtcbiAgICB9IGVsc2UgaWYgKGRpZmYgPCAwKSB7XG4gICAgICAgIG1lcmdlZC5wdXNoKC4uLmFycjIuc2xpY2UoaikpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXJnZWQ7XG59XG5cblxuXG5jb25zb2xlLmxvZygnbWVyZ2U6JylcbmNvbnNvbGUubG9nKG1lcmdlKFsxLCAyLCAzLCA0LCAxMCwgMjAsIDIxLCAzMSwgNDFdLCBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMTIsIDEyLCAxNSwgMTcsIDE5XSkpO1xuXG5jb25zdCBtZXJnZVNvcnQgPSAoYXJyKSA9PiB7XG4gICAgaWYgKGFyci5sZW5ndGggPD0gMSkgcmV0dXJuIGFycjsgICAgLy8gQmFzZSBjYXNlXG5cbiAgICBjb25zdCBtaWQgPSBNYXRoLmZsb29yKGFyci5sZW5ndGggLyAyKVxuICAgIGNvbnN0IHJpZ2h0ID0gbWVyZ2VTb3J0KGFyci5zbGljZShtaWQpKTtcbiAgICBjb25zdCBsZWZ0ID0gbWVyZ2VTb3J0KGFyci5zbGljZSgwLCBtaWQpKTtcblxuICAgIHJldHVybiBtZXJnZShsZWZ0LCByaWdodCk7XG5cblxufSIsImV4cG9ydCBjb25zdCBjb3VudFVuaXF1ZVZhbHVlcyA9IChhcnIpID0+IHtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGogPSAxO1xuXG4gICAgd2hpbGUgKGogPCBhcnIubGVuZ3RoKSB7XG4gICAgICAgIGlmIChhcnJbaV0gPT09IGFycltqXSkge1xuICAgICAgICAgICAgaisrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgYXJyW2ldID0gYXJyW2pdO1xuICAgICAgICAgICAgaisrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXJyLnNwbGljZShpICsgMSk7XG4gICAgcmV0dXJuIGFyci5sZW5ndGg7XG59XG5cbmV4cG9ydCBjb25zdCB0ZXN0ID0gKGFycikgPT4ge1xuICAgIGNvbnN0IGNvdW50ID0ge307XG4gICAgZm9yIChsZXQgdmFsdWUgb2YgYXJyKSB7XG4gICAgICAgIGNvdW50W3ZhbHVlXSA9IChjb3VudFt2YWx1ZV0gfHwgMCkgKyAxXG4gICAgfVxuXG4gICAgbGV0IHVuaXF1ZVZhbHVlcyA9IDA7XG4gICAgZm9yIChsZXQga2V5IGluIGNvdW50KSB7XG4gICAgICAgIGlmIChjb3VudFtrZXldID09PSAxKSB7XG4gICAgICAgICAgICB1bmlxdWVWYWx1ZXMrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmlxdWVWYWx1ZXNcbn1cblxuLy8gRmluZHMgaWYgYW55IGFyZ3VtZW50cyBhcmUgZHVscGxpY2F0ZXMgKG11bHRpUG9pbnRlcnMpXG5cbmNvbnN0IGFyZVRoZXJlRHVwcyA9ICguLi5hcmdzKSA9PiB7XG4gICAgLy8gSSBnZXQgdGhpcyBub3cuIFJlbGllcyBvbiB0aGUgcHJpbmNpcGxlIGlmIEEgPSBCIGFuZCBCID0gQyB0aGVuIEEgPSBDLCBleGNlcHQgdGhlIGludmVyc2VcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGogPSAxO1xuXG5cbiAgICB3aGlsZSggaiA8IGFyZ3MubGVuZ3RoICkge1xuICAgICAgICBpZiAoYXJnc1tpXSA9PT0gYXJnc1tqXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBqKytcbiAgICAgICAgICAgIGkrK1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBEZXRlcm1pbmUgd2hldGhlciBhIHBhaXIgaW4gdGhlIGFyZ3VtZW50IGFycmF5IGF2ZXJhZ2VzIHRvIHRoZSBhcmd1bWVudCBhdmVyYWdlXG5cblxuY29uc3QgY29udGFpbnNBdmVyYWdlID0gKGFyciwgYXYpID0+IHtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGogPSBhcnIubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGogIT09IGkpIHtcblxuICAgICAgICBpZiAoKGFycltqXSArIGFycltpXSkvMiA9PT0gYXYpIHJldHVybiB0cnVlO1xuXG4gICAgICAgIGlmICgoYXJyW2ldICsgYXJyW2pdKS8yICA8IGF2KSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBqLS07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmNvbnN0IGlzU3Vic2VxdWVuY2UgPSAoc3RyMSwgc3RyMikgPT4ge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgaiA9IDA7XG5cbiAgICB3aGlsZSAoIGkgPCBzdHIxLmxlbmd0aCkge1xuICAgICAgICBpZiAoc3RyMVtpXSA9PT0gc3RyMltqXSkge1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgaisrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaisrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGogPiBzdHIyLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuXG59IiwiLy8gRGlmZmVycyBmcm9tIGNvbXBhcmlzb24gc29ydFxuLy8gQ2FuIG9ubHkgc29ydCBsaXN0cyBvZiBudW1iZXJzXG4vLyBTb3J0cyBudW1iZXJzIGludG8gMTAgKGluIGJhc2UgMTApIFwiYnVja2V0c1wiIGJhc2VkIG9uIHRoZSByaWdodG1vc3QgZGlnaXRcblxuXG4vLyBUaW1lIGNvbXBsZXhpdHlcbi8vIGJlc3QsIGF2ZXJhZ2UsIHdvcnN0ID0gTyhuaylcbi8vIG4gaXMgbnVtYmVyIG9mIG51bWJlcnMsXG4vLyBrIGlzIHRoZSBsZW5ndGggb2YgdGhlIG51bWJlcnMgKGFrYSB3b3JkIGxlbmd0aClcbi8vIEZvciBzdWZmaWNpZW50bHkgcmFuZG9tIGRhdGEsIGsgPSBsb2cobiksIG1ha2luZyBpdCBqdXN0IGFzIGdvb2QgYXMgbWVyZ2Ugc29ydCwgc29tZXRpbWVzIGJldHRlciAoZm9yIGEgbGFyZ2UgYW1vdW50IG9mIHNtYWxsIG51bWJlcnMgZm9yIGV4YW1wbGUpXG5cblxuLy8gU3BhY2UgY29tcGxleGl0eVxuLy8gTyhuICsgaylcbiBcbmNvbnN0IHRlc3RBcnIgPSBbMTIsIDQsIDEyLCA0NCwgNSwgNjY2LCA3NywgMjNdO1xuXG4vLyBnZXREaWdpdCBoZWxwZXIgZnVuY3Rpb25cbmNvbnN0IGdldERpZ2l0ID0gKG51bSwgcG9zKSA9PiB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5hYnMobnVtKSAvIE1hdGgucG93KDEwLCBwb3MpKSAlIDEwO1xufVxuXG5jb25zdCBkaWdpdENvdW50ID0gKG51bSkgPT4ge1xuICAgIGlmIChudW0gPT09IDApIHJldHVybiAxO1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgubG9nMTAoTWF0aC5hYnMobnVtKSkpICsgMTtcbn1cblxuY29uc3QgbW9zdERpZ2l0cyA9IChhcnIpID0+IHtcbiAgICBsZXQgaGlnaGVzdCA9IC1JbmZpbml0eTtcbiAgICBhcnIuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBpdGVtLnRvU3RyaW5nKCkubGVuZ3RoO1xuICAgICAgICBpZiAoY3VycmVudCA+IGhpZ2hlc3QpIGhpZ2hlc3QgPSBjdXJyZW50O1xuICAgIH0gKVxuICAgIHJldHVybiBoaWdoZXN0O1xufVxuXG5jb25zdCByYWRpeFJlYWwgPSAoYXJyKSA9PiB7XG4gICAgY29uc3QgbW9zdCA9IG1vc3REaWdpdHMoYXJyKTsgICAgIC8vIFdlIG5lZWQgdGhpcyBtYW55IGxvb3BzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3N0OyBpKyspIHtcbiAgICAgICAgbGV0IG1haW5BcnIgPSBBcnJheS5mcm9tKHtsZW5ndGg6IDEwfSwgKCkgPT4gW10pO1xuICAgICAgICBhcnIuZm9yRWFjaChudW0gPT4ge1xuICAgICAgICAgICAgbWFpbkFycltnZXREaWdpdChudW0sIGkpXS5wdXNoKG51bSk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIG51bXMgPSBbXS5jb25jYXQoLi4ubWFpbkFycik7XG59XG5cbmNvbnN0IHRlc3ROdW0gPSAxMjMwO1xuIiwiZXhwb3J0IGNvbnN0IHBvd2VyID0gKGJhc2UsIGV4cCkgPT4ge1xuICAgIGlmIChleHAgPT09IDApIHJldHVybiAxO1xuICAgIHJldHVybiBiYXNlICogcG93ZXIoYmFzZSwgZXhwIC0gMSk7XG59XG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0T2ZBcnJheSA9IChhcnIpID0+IHtcbiAgICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDE7XG4gICAgbGV0IG15VmFyID0gYXJyLnNoaWZ0KCk7XG4gICAgcmV0dXJuIG15VmFyICogcHJvZHVjdE9mQXJyYXkoYXJyKTtcbn1cbiIsImltcG9ydCB7IHN3YXAgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5cbmNvbnN0IHRlc3RBcnIgPSBbMSwgMiwgMywgMSwgMiwgNTQsIDIzLCA2LCAxLCA2N107XG5cbi8vIFdvcmtzIGxpa2UgYnViYmxlIHNvcnQgaW4gcmV2ZXJzZS4gTG9vcCB0aHJvdWdoLCBmaW5kIG1pbmltdW0sIHN3YXAgaXQgd2l0aCBpLCBpbmNyZW1lbnQgaSwgcmVwZWF0XG4vLyBUaW1lOiBCZXN0LCB3b3JzdCBhbmQgYXZlcmFnZSBPKG5eMilcbi8vIFNwYWNlOiBPKDEpO1xuLy8gT25seSBiZXR0ZXIgdGhhbiBidWJibGUgc29ydCBpZiB5b3UgbmVlZCB0byBtaW5pbWl6ZSB0aGUgbnVtYmVyIG9mIHN3YXBzLCBzaW5jZSB3ZSBvbmx5IGRvIG4gc3dhcHMgXG4vLyBpZSBtaW5pbWl6ZSBob3cgb2Z0ZW4gd2Ugd3JpdGUgdG8gbWVtb3J5LCBzdXBlciB1bmNvbW1vbiBzY2VuYXJpb1xuLy8gU3Vja3MgcHJldHR5IGhhcmQsIGFsbW9zdCBubyByZWFzb24gdG8gdXNlIGl0XG5cbmV4cG9ydCBjb25zdCBzZWxlY3Rpb25Tb3J0ID0gKGFycikgPT4ge1xuICAgIGxldCBpID0gMDtcbiAgICB3aGlsZShpIDwgYXJyLmxlbmd0aCkge1xuICAgICAgICBsZXQgbWluID0gaTtcbiAgICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgYXJyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoYXJyW2pdIDwgYXJyW21pbl0pIHtcbiAgICAgICAgICAgICAgICBtaW4gPSBqO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gT3B0aW1pemF0aW9uIGNvbmRpdGlvbmFsIFxuICAgICAgICBpZiAoaSAhPT0gbWluKSBzd2FwKGFyciwgaSwgbWluKTtcbiAgICAgICAgaSsrO1xuXG4gICAgfVxuICAgIFxuICAgIHJldHVybiBhcnI7XG59XG5cbmNvbnNvbGUubG9nKCdPcmlnaW5hbCBhcnI6ICcpO1xuY29uc29sZS5sb2codGVzdEFycik7XG5cbmNvbnNvbGUubG9nKCdTZWxlY3Rpb24gU29ydDogJyk7XG5jb25zb2xlLmxvZyhzZWxlY3Rpb25Tb3J0KHRlc3RBcnIpKTsiLCIvLyBGaW5kIHRoZSBsb25nZXN0IHNlcXVlbmNlIG9mIHVuaXF1ZSBjaGFyYWN0ZXJzIGluIGEgc3RyaW5nXG5cbi8vIFwiTmFpdmUgc29sdXRpb25cIiAocHJldHR5IHN1cmUgaXQncyBhY3R1YWxseSBPKDEpIHNpbmNlIHRoZXJlJ3MgYSBmaW5pdGUgbnVtYmVyIG9mIHVuaXF1ZSBhbHBoYW51bWVyaWMgY2hhcmFjdGVycylcbmV4cG9ydCBjb25zdCBsb25nZXN0U2VxdWVuY2VOYWl2ZSA9IChzdHIpID0+IHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgbGV0IGhpZ2hlc3QgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IGk7IGogPCBzdHIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmICghYXJyLmluY2x1ZGVzKHN0cltqXSkpIHtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChzdHJbal0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyLmxlbmd0aCA+IGhpZ2hlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlnaGVzdCA9IGFyci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFyciA9IFtdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGhpZ2hlc3Q7XG59XG5cbi8vIEZpbmQgdGhlIG1heGltdW0gc3VtIG9mIG4gY29uc2VjdXRpdmUgZGlnaXRzIGluIGFuIGFycmF5XG5jb25zdCBtYXhTdW0gPSAoYXJyLCBuKSA9PiB7XG4gICAgaWYgKGFyci5sZW5ndGggPCBuKSByZXR1cm4gbnVsbDtcblxuICAgIGxldCB0ZW1wID0gMDtcbiAgICBsZXQgbWF4ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICBtYXggKz0gYXJyW2ldO1xuICAgIH1cblxuICAgIHRlbXAgPSBtYXg7XG5cbiAgICBmb3IgKGxldCBpID0gbnVtOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRlbXAgLT0gKGFycltpIC0gbnVtXSArIGFycltpXSk7XG4gICAgICAgIGlmIChtYXggPCB0ZW1wKSBtYXggPSB0ZW1wO1xuICAgIH1cblxuICAgIHJldHVybiBtYXg7XG59XG5cbmNvbnN0IG1heFN1YmFycmF5U3VtID0gKGFyciwgbikgPT4ge1xuICAgIGlmIChuID4gYXJyLmxlbmd0aCkgcmV0dXJuIG51bGw7XG5cbiAgICBsZXQgbWF4U3VtID0gMDtcbiAgICBsZXQgdGVtcCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgbWF4U3VtICs9IGFycltpXTtcbiAgICB9XG5cbiAgICB0ZW1wID0gbWF4U3VtXG4gICAgZm9yIChsZXQgaSA9IG47IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGVtcCA9IHRlbXAgLSBhcnJbaSAtIG5dICsgYXJyW2ldXG4gICAgICAgIGlmICh0ZW1wID4gbWF4U3VtKSB7XG4gICAgICAgICAgICBtYXhTdW0gPSB0ZW1wXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF4U3VtXG59XG4gXG5cbmNvbnN0IG1pblN1YkFycmF5TGVuZ3RoID0gKGFyciwgbikgPT4ge1xuICAgIGxldCBzdW0gPSAwO1xuXG4gICAgbGV0IG1heCA9IDA7XG4gICAgd2hpbGUgKHN1bSA8PSBuKSB7XG4gICAgICAgIHN1bSArPSBhcnJbbWF4XTtcbiAgICAgICAgbWF4Kys7XG5cbiAgICAgICAgaWYgKG1heCA+IGFyci5sZW5ndGggLSAxKSByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBsZXQgdGVtcCA9IHN1bTtcbiAgICBmb3IgKGxldCBpID0gbWF4OyBpIDwgKGFyci5sZW5ndGggLSBtYXgpOyBpKyspIHtcbiAgICAgICAgbGV0IGogPSBpIC0gbWF4O1xuXG4gICAgICAgIHRlbXAgPSB0ZW1wIC0gYXJyW2pdICsgYXJyW2ldO1xuXG4gICAgICAgIHdoaWxlICh0ZW1wID49IG4pIHtcbiAgICAgICAgICAgIHRlbXAgLT0gYXJyW2pdXG4gICAgICAgICAgICBqKys7XG4gICAgICAgICAgICBtYXgtLTtcbiAgICAgICAgfVxuICAgIH0gXG59IiwiZXhwb3J0IGNvbnN0IHN0cmluZ1NlYXJjaE5haXZlID0gKHN0ciwgc3Vic3RyKSA9PiB7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc3RyW2ldID09PSBzdWJzdHJbMF0pIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3Vic3RyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltpICsgal0gIT09IHN1YnN0cltqXSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgaWYgKGogPT09IHN1YnN0ci5sZW5ndGggLSAxKSBjb3VudCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY291bnQ7XG59XG5cbmNvbnN0IHN0cjEgPSAndXd1IHV3dSB1d3UnXG5jb25zdCBwYXR0ZXJuID0gJ3V3dSc7XG5cbmNvbnNvbGUubG9nKHN0cmluZ1NlYXJjaE5haXZlKHN0cjEsIHBhdHRlcm4pKTsiLCIvLyBFeGFtcGxlIGNsYXNzXG5cbmNsYXNzIFN0dWRlbnQge1xuICAgIGNvbnN0cnVjdG9yIChuYW1lLCBhZ2UsIHllYXIpIHtcbiAgICAgICAgdGhpcy5maXJzdE5hbWUgPSBuYW1lLnNwbGl0KCcgJylbMF07XG4gICAgICAgIHRoaXMubGFzdE5hbWUgPSBuYW1lLnNwbGl0KCcgJylbMV07XG4gICAgICAgIHRoaXMuYWdlID0gYWdlXG4gICAgICAgIHRoaXMueWVhciA9IHllYXJcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGxhc3REaWdpdCA9ICt0aGlzLnllYXIudG9TdHJpbmcoKVt0aGlzLnllYXIudG9TdHJpbmcoKS5sZW5ndGggLSAxXVxuXG4gICAgICAgIHN3aXRjaCAobGFzdERpZ2l0KSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhpcy55ZWFyU3VmZml4ID0gJ3N0JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLnllYXJTdWZmaXggPSAnbmQnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXMueWVhclN1ZmZpeCA9ICdyZCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMueWVhclN1ZmZpeCA9ICd0aCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgLy8gSW5zdGFuY2UgbWV0aG9kcyBhcmUgYXR0YWNoZWQgdG8gaW5zdGFuY2VzIG9mIGEgY2xhc3NcbiAgICAvLyB0aGV5IGFyZSBjYWxsZWQgb24gaW5zdGFuY2VzXG5cbiAgICBpbnRyb2R1Y2VTZWxmKCkge1xuICAgICAgICByZXR1cm4gYEhpISBNeSBuYW1lIGlzICR7dGhpcy5maXJzdE5hbWV9LCBJIGFtICR7dGhpcy5hZ2V9IHllYXJzIG9sZCBhbmQgSSdtIGluICR7dGhpcy55ZWFyfSR7dGhpcy55ZWFyU3VmZml4fSB5ZWFyLiBOaWNlIHRvIG1lZXQgeW91IWBcbiAgICB9XG5cblxuICAgIC8vIFN0YXRpYyBtZXRob2RzIGFyZSBhdHRhY2hlZCB0byB0aGUgY2xhc3MsIG5vdCBpbnN0YW5jZXMgb2YgdGhlIGNsYXNzXG4gICAgLy8gQ2FsbGVkIG9uIHRoZSBjbGFzcywgbm90IGluc3RhbmNlc1xuICAgIC8vIFVzdWFsbHkgdXNlZCBmb3IgdXRpbGl0eSBmdW5jdGlvbnNcbiAgICAvLyBTZWVtcyB0byBtb3N0bHkgdGFrZSBpbnN0YW5jZXMgb2YgdGhlIGNsYXNzIGFzIGFyZ3VtZW50c1xuXG4gICAgc3RhdGljIGVucm9sbFN0dWRlbnRzKC4uLnN0dWRlbnRzKSB7XG4gICAgICAgIC8vIFNlbmQgZW1haWwgaGVyZSBvciBzb21ldGhpbmdcbiAgICAgICAgY29uc29sZS5sb2coc3R1ZGVudHMpICAgLy8gUGxhY2Vob2xkZXJcbiAgICB9XG5cblxufVxuXG5jb25zdCBsYXJyeSA9IG5ldyBTdHVkZW50KCdMYXJyeSBHcmVlbmUnLCAxMiwgMylcbmNvbnNvbGUubG9nKGxhcnJ5LmludHJvZHVjZVNlbGYoKSk7IiwiLy8gTGlua2VkIGxpc3QgaXMgYW4gb3JkZXJlZCBkYXRhIHN0cnVjdHVyZSBpbiB3aGljaCBldmVyeSBpdGVtIChub2RlKSBoYXMgYSB2YWx1ZSBhbmQgYSBsaW5rIHRvIHRoZSBuZXh0IGVsZW1lbnQsIG9yIG51bGwgaWYgaXQncyB0aGUgbGFzdCBlbGVtZW50XG5cbmltcG9ydCB7IGNhcHR1cmVSZWplY3Rpb25TeW1ib2wgfSBmcm9tIFwiZXZlbnRzXCI7XG5cbi8vIFN0cnVjdHVyZSB0cmFja3MgdGhlIGhlYWQgKGZpcnN0IG5vZGUpLCB0YWlsIChsYXN0IG5vZGUpIGFuZCBsZW5ndGhcblxuLy8gUmFuZG9tIGFjY2VzcyBpcyBub3QgYWxsb3dlZCBpZSBjYW4ndCBqdW1wIHRvIGEgcGFydGljdWxhciB2YWx1ZSwgbXVzdCB0cmF2ZXJzZSB0aGUgbGlzdCB0byBmaW5kIGEgdmFsdWUgKHN0YWlycyByYXRoZXIgdGhhbiBlbGV2YXRvcilcbi8vIFRyYWRlIG9mZiBpcyB0aGF0IGxpbmtlZCBsaXN0cyBhcmUgZ29vZCBhdCBpbnNlcnRpb24gYW5kIGRlbGV0aW9uIChtYWluIHJlYXNvbiB0byB1c2UgYSBsaW5rZWQgbGlzdClcblxuY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm5leHQgPSBudWxsO1xuICAgIH1cbn1cblxuLy8gVGVjaG5pY2FsbHkgYSBsaW5rZWQgbGlzdCwgYnV0IGl0IHN1Y2tzXG5jb25zdCBmaXJzdCA9IG5ldyBOb2RlKFwiSGlcIik7XG5maXJzdC5uZXh0ID0gbmV3IE5vZGUoJ1N1cCcpO1xuZmlyc3QubmV4dC5uZXh0ID0gbmV3IE5vZGUoJ0FoaCcpO1xuZmlyc3QubmV4dC5uZXh0Lm5leHQgPSBuZXcgTm9kZSgnV2V3Jyk7XG5cbi8vIFByb3Blcmx5IHRoaXMgdGltZVxuY2xhc3MgU2luZ2x5TGlua2VkTGlzdCB7XG4gICAgLy8gTm8gY29uc3RydWN0b3IgYXJndW1uZW50cywgdXNpbmcgcHVzaCBpbnN0ZWFkXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5oZWFkID0gbnVsbDtcbiAgICAgICAgdGhpcy50YWlsID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdXNoKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSh2YWx1ZSlcbiAgICAgICAgaWYgKCF0aGlzLmhlYWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZCA9IG5ld05vZGU7XG4gICAgICAgICAgICB0aGlzLnRhaWwgPSBuZXdOb2RlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50YWlsLm5leHQgPSBuZXdOb2RlO1xuICAgICAgICAgICAgdGhpcy50YWlsID0gbmV3Tm9kZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sZW5ndGgrKztcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyB0byBwb3Agd2UgaGF2ZSB0byB0cmF2ZXJzZVxuICAgIHRyYXZlcnNlKCkge1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnQudmFsdWUpO1xuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcG9wKCkge1xuICAgICAgICBpZiAoIXRoaXMuaGVhZCkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgICAgbGV0IG5ld1RhaWwgPSB0aGlzLmhlYWQ7XG4gICAgICAgIFxuICAgICAgICB3aGlsZSAoY3VycmVudC5uZXh0KSB7XG4gICAgICAgICAgICBuZXdUYWlsID0gY3VycmVudFxuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dFxuICAgICAgICB9XG5cbiAgICAgICAgbmV3VGFpbC5uZXh0ID0gbnVsbFxuXG4gICAgICAgIHRoaXMudGFpbCA9IG5ld1RhaWw7XG5cblxuICAgICAgICB0aGlzLmxlbmd0aC0tO1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50O1xuICAgIH1cbn1cblxuY29uc3QgbGlzdCA9IG5ldyBTaW5nbHlMaW5rZWRMaXN0KClcbmxpc3QucHVzaCgnSXRlbSAxJyk7XG5saXN0LnB1c2goJ0l0ZW0gMicpO1xubGlzdC5wdXNoKCdJdGVtIDMnKTtcbmNvbnNvbGUubG9nKGxpc3QucG9wKCkpXG5jb25zb2xlLmxvZyhsaXN0KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2FsZ1RpbWVyfSBmcm9tIFwiLi9hbGdvcml0aG1zL2hlbHBlcnNcIjtcbmltcG9ydCB7aXNBbmFncmFtQmFkLCBpc0FuYWdyYW0sIGlzU3F1YXJlc30gZnJvbSBcIi4vYWxnb3JpdGhtcy9mcmVxQ291bnRlclwiO1xuaW1wb3J0IHtjb3VudFVuaXF1ZVZhbHVlcywgdGVzdH0gZnJvbSBcIi4vYWxnb3JpdGhtcy9tdWx0aVBvaW50ZXJzXCI7XG5pbXBvcnQgeyBsb25nZXN0U2VxdWVuY2VOYWl2ZSB9IGZyb20gXCIuL2FsZ29yaXRobXMvc2xpZGluZ1dpbmRvd1wiO1xuaW1wb3J0IHsgcG93ZXIgfSBmcm9tIFwiLi9hbGdvcml0aG1zL3JlY3Vyc2lvblwiO1xuaW1wb3J0IHsgYmluYXJ5U2VhcmNoIH0gZnJvbSBcIi4vYWxnb3JpdGhtcy9iaW5hcnlTZWFyY2hcIjtcbmltcG9ydCB7IHN0cmluZ1NlYXJjaE5haXZlIH0gZnJvbSBcIi4vYWxnb3JpdGhtcy9zdHJpbmdTZWFyY2hcIjtcbmltcG9ydCB7IGJ1YmJsZVNvcnQgfSBmcm9tIFwiLi9hbGdvcml0aG1zL2J1YmJsZVNvcnRcIjtcbmltcG9ydCB7IHNlbGVjdGlvblNvcnQgfSBmcm9tIFwiLi9hbGdvcml0aG1zL3NlbGVjdGlvblNvcnRcIjtcbmltcG9ydCB7IGluc2VydGlvblNvcnQgfSBmcm9tIFwiLi9hbGdvcml0aG1zL2luc2VydGlvblNvcnRcIjtcbmltcG9ydCBcIi4vYWxnb3JpdGhtcy9tZXJnZVNvcnRcIjtcbmltcG9ydCBcIi4vYWxnb3JpdGhtcy9yYWRpeFNvcnRcIjtcbmltcG9ydCBcIi4vZGF0YS1zdHJ1Y3R1cmVzL2NsYXNzUmVmcmVzaGVyXCJcblxuaW1wb3J0IFwiLi9kYXRhLXN0cnVjdHVyZXMvc2luZ2x5TGlua2VkTGlzdFwiXG5cbmNvbnN0IGFycjEgPSBbMSwgMiwgMywgNCwgNCwgNCwgNSwgNiwgNywgNywgOCwgOCwgOCwgOSwgMTIsIDEwMDAwXTtcblxuLy8gY29uc3QgYXJyMiA9IGFycjEubWFwKGl0ZW0gPT4gaXRlbSoqMik7XG5cbmNvbnN0IHN0ciA9IFwiY2FsY3VsYXRlXCJcblxuXG5jb25zdCBhcnIzID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdO1xuY29uc29sZS5sb2coYmluYXJ5U2VhcmNoKGFycjEsIDcpKVxuXG5jb25zdCB1bnNvcnRlZEFyciA9IFsxLCAyLCAzLCA0LCAxLCAzLCA0LCAxLCAxMjIsIDQsIDIzLCA5NSwgMzJdO1xuY29uc29sZS5sb2coYnViYmxlU29ydCh1bnNvcnRlZEFycikpO1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==