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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_js__);

window['o'] = __WEBPACK_IMPORTED_MODULE_0__index_js__["o"];
__WEBPACK_IMPORTED_MODULE_0__index_js__["o"].sel('body').attr({
                    style:{
                            padding:'0px',
                            margin:0
                            },
                    id: 'govde'
                   }).apn([
    __WEBPACK_IMPORTED_MODULE_0__index_js__["o"].crt('div').attr({'style':{'height':'200px','background':'#000'}}).apn(
        [
            __WEBPACK_IMPORTED_MODULE_0__index_js__["o"].crt('div').attr({'style':'height:50px;background:blue'}).t,
            __WEBPACK_IMPORTED_MODULE_0__index_js__["o"].crt('div').attr({'style':'height:50px;background:yellow'}).t,
            __WEBPACK_IMPORTED_MODULE_0__index_js__["o"].crt('div').attr({'style':'height:50px;background:green'}).t
        ]
    ).t,
    __WEBPACK_IMPORTED_MODULE_0__index_js__["o"].crt('div').attr({'style':'height:50px;background:red'}).t
]);

__WEBPACK_IMPORTED_MODULE_0__index_js__["o"].elems.filter((e)=>{return e.t.style.background === 'red'})
       .forEach((e)=>e.on('click',dFunc(e.t.style.background)));



function dFunc(a) {
    return ()=>console.log(a);
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var o = {
    elems : [],
    crt :function(tt){
        var el = new this.Commands;
        el.t = document.createElement(tt);
        this.elems.push(el);
        return el;
    },
    jcrt :function(tt){
        var el = new this.Commands;
        el.t = document.createElement(tt);
        this.elems.push(el);
        return el.t;
    },
    sel:function(tt){
        var el = new this.Commands;
        el.t = document.querySelector(tt);
        return el;
    },
    Commands:function(){
        this.attr = function(a,b){
            if (typeof a !== 'object') {
                this.t.setAttribute(a,b);
            }
            else {
                for (var i = 0,l=Object.keys(a).length;i<l;i+=1) {
                    var value = a[Object.keys(a)[i]];
                    if (typeof a[Object.keys(a)[i]] === 'object') {
                        value = '';g = a[Object.keys(a)[i]];
                        for (var x = 0,xl=Object.keys(g).length;x<xl;x+=1) {
                            value += Object.keys(g)[x] + ':' + g[Object.keys(g)[x]] + ';';
                        }
                    }
                    this.t.setAttribute(Object.keys(a)[i],value);
                }
            }
            return this;
        };
        this.apn = function(tt,i){
            if(typeof tt == 'object' && tt.length > 1){
                var dis = this;
                tt.forEach(function(a){
                    if(typeof a == 'string'){
                        a = document.createElement(a);
                    }
                    dis.t.appendChild(a);
                })
            }
            else if(i === undefined || (typeof tt != 'string' && i === 1)){
                if(typeof tt == 'string'){
                    tt = document.createElement(tt);
                }
                this.t.appendChild(tt);
            }
            else if(typeof tt == 'string' && i === 1){
                this.t.innerHTML = tt;
            }
            return this;
        };
        this.on = function(a,b){
            this.t.addEventListener(a,b);
            return this;
        };
        this.off = function(a,b){
            this.t.removeEventListener(a,b);
            return this;
        };
        this.end = function(){
            return this.t;
        };
        this.put = function(pt){
            pt.appendChild(this.t);
            return this;
        };
    }
};

exports.o = o;

/***/ })
/******/ ]);