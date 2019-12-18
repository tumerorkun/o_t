/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../index.js":
/*!*******************!*\
  !*** ../index.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const o = {\n    elems: [],\n    crt: function(tt) {\n        let el = new this.Commands();\n        el.t = document.createElement(tt);\n        this.elems.push(el);\n        return el;\n    },\n    jcrt: function(tt) {\n        let el = new this.Commands();\n        el.t = document.createElement(tt);\n        this.elems.push(el);\n        return el.t;\n    },\n    sel: function(tt) {\n        let el = new this.Commands();\n        el.t = document.querySelector(tt);\n        return el;\n    },\n    Commands: function() {\n        this.attr = function(a, b) {\n            if (typeof a !== \"object\") {\n                this.t.setAttribute(a, b);\n            } else {\n                for (let i = 0, l = Object.keys(a).length; i < l; i += 1) {\n                    let value = a[Object.keys(a)[i]];\n                    if (typeof a[Object.keys(a)[i]] === \"object\") {\n                        value = \"\";\n                        let g = a[Object.keys(a)[i]];\n                        for (\n                            let x = 0, xl = Object.keys(g).length;\n                            x < xl;\n                            x += 1\n                        ) {\n                            value +=\n                                Object.keys(g)[x] +\n                                \":\" +\n                                g[Object.keys(g)[x]] +\n                                \";\";\n                        }\n                    }\n                    this.t.setAttribute(Object.keys(a)[i], value);\n                }\n            }\n            return this;\n        };\n        this.apn = function(tt, i) {\n            if (typeof tt == \"object\" && tt.length > 1) {\n                let dis = this;\n                tt.forEach(function(a) {\n                    if (typeof a == \"string\") {\n                        a = document.createElement(a);\n                    }\n                    dis.t.appendChild(a);\n                });\n            } else if (i === undefined || (typeof tt != \"string\" && i === 1)) {\n                if (typeof tt == \"string\") {\n                    tt = document.createElement(tt);\n                }\n                this.t.appendChild(tt);\n            } else if (typeof tt == \"string\" && i === 1) {\n                this.t.innerHTML = tt;\n            }\n            return this;\n        };\n        this.on = function(a, b) {\n            this.t.addEventListener(a, b);\n            return this;\n        };\n        this.off = function(a, b) {\n            this.t.removeEventListener(a, b);\n            return this;\n        };\n        this.end = function() {\n            return this.t;\n        };\n        this.put = function(pt) {\n            pt.appendChild(this.t);\n            return this;\n        };\n    }\n};\n\nexports.o = o;\n\n\n//# sourceURL=webpack:///../index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../index.js */ \"../index.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_js__WEBPACK_IMPORTED_MODULE_0__);\n\nwindow[\"o\"] = _index_js__WEBPACK_IMPORTED_MODULE_0__[\"o\"];\n\nfunction store(initial, startFn, type) {\n    let store = initial;\n    const subscribers = {};\n    let sList = Object.values(subscribers);\n    let subscriber_count = 0;\n    let stopFn;\n\n    const triggerAllSubscribers = () => sList.forEach(f => f(store));\n\n    const unsubscribe = i => {\n        delete subscribers[i];\n        sList = Object.values(subscribers);\n        if (stopFn && Object.keys(subscribers).length === 0) stopFn();\n    };\n    const update = function(updater) {\n        store = updater(store);\n        triggerAllSubscribers();\n    };\n    const set = function(newStoreValue) {\n        update(() => newStoreValue);\n        //  store = newStoreValue;\n    };\n    const subscribe = function(fn) {\n        if (subscriber_count === 0 && startFn) {\n            stopFn = startFn(set);\n        }\n        const i = subscriber_count++;\n        (subscribers[i] = fn)(store);\n        sList = Object.values(subscribers);\n        return () => unsubscribe(i);\n    };\n\n    return {\n        subscribe,\n        update,\n        set,\n         ...(type !== \"readable\" ? { update } : {}),\n         ...(type !== \"readable\" ? { set } : {})\n    };\n}\nconst writable = (initial, startFn) => store(initial, startFn, \"writable\");\n// const readable = (initial, startFn) => store(initial, startFn, \"readable\");\n\nconst purse = writable({});\nwindow[\"purse\"] = purse;\nconst box = props => {\n    const height =\n        purse.box && purse.box.height ? purse.box.height : props.height;\n    const backgroundColor =\n        purse.box && purse.box.backgroundColor\n            ? purse.box.backgroundColor\n            : props.backgroundColor;\n    const component = _index_js__WEBPACK_IMPORTED_MODULE_0__[\"o\"].crt(\"div\").attr({\n        style: `height:${height};background:${backgroundColor}`\n    });\n\n    purse.subscribe(store => {\n        const height =\n            store.box && store.box.height ? store.box.height : props.height;\n        const backgroundColor =\n            store.box && store.box.backgroundColor\n                ? store.box.backgroundColor\n                : props.backgroundColor;\n        component.attr({\n            style: `height:${height};background:${backgroundColor}`\n        });\n    });\n\n    return component.t;\n};\n\n_index_js__WEBPACK_IMPORTED_MODULE_0__[\"o\"].sel(\"body\")\n    .attr({ style: { padding: \"0px\", margin: 0 }, id: \"govde\" })\n    .apn([\n        _index_js__WEBPACK_IMPORTED_MODULE_0__[\"o\"]\n            .crt(\"div\")\n            .attr({ style: { height: \"700px\", background: \"#000\" } })\n            .apn([\n                box({ height: \"50px\", backgroundColor: \"blue\" }),\n                box({ height: \"50px\", backgroundColor: \"yellow\" }),\n                box({ height: \"50px\", backgroundColor: \"green\" })\n            ]).t,\n        _index_js__WEBPACK_IMPORTED_MODULE_0__[\"o\"].crt(\"div\").attr({ style: \"height:50px;background:red\" }).t\n    ]);\n\n_index_js__WEBPACK_IMPORTED_MODULE_0__[\"o\"].elems //.filter((e)=>{return e.t.style.background === 'red'})\n    .forEach(e => e.on(\"click\", dFunc(e.t.style.background)));\n\nfunction dFunc(a) {\n    return e => {\n        e.stopPropagation();\n        console.log(\"a\", a);\n    };\n}\n\nfunction updatePurse() {\n    let value = 0;\n    let step = 5;\n    let way = true;\n    return setInterval(() => {\n        if (way && value <= 700 / 3) {\n            value += step;\n        } else if (!way && value >= 0) {\n            value -= step;\n        } else {\n            way = !way;\n        }\n        purse.update(store => ({ box: { height: `${value}px` } }));\n    }, 10);\n}\n\nconst IntervalNumber = updatePurse();\n\nsetTimeout(() => {\n       clearInterval(IntervalNumber);\n}, 30000)\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });