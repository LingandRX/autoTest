'use strict'
/* let globalNumber = '';
let prevNumber = 0;
let nextNumber = 0;
let result = 0; */

const myNumber = (function() {
    // 使用Symbol生成唯一指定标识
    let _globalNumber = Symbol('globalNumber');
    let _prevNumber = Symbol('prevNumber');
    let _nextNumber = Symbol('nextNumber');
    let _result = Symbol('result');
    let _symbol = Symbol('symbol');

    class myNumber {
        constructor() {
            this[_globalNumber] = '1';
            this[_prevNumber] = 0;
            this[_nextNumber] = 0;
            this[_result] = 0;
            this[_symbol] = '';
        }

        getGlobal() {
            return this[_globalNumber];
        }

        setGlobal(newGlobal = 'none') {
            this[_globalNumber] = newGlobal;
        }
        
        getPrev() {
            return this[_prevNumber];
        }

        setPrev(newPrev = 'none') {
            this[_prevNumber] = newPrev;
        }

        getNext() {
            return this[_nextNumber];
        }

        setNext(newNext = 'none') {
            this[_nextNumber] = newNext;
        }

        getResult() {
            return this[_result];
        }

        setResult(newResult = 'none') {
            this[_result] = newResult;
        }

        getSymbol() {
            return this[_symbol];
        }

        setSymbol(newSymbol = 'none') {
            this[_symbol] = newSymbol;
        }
    }

    return myNumber;
})();


let e = new myNumber();
console.log(e.setNext(2));
console.log(e.getNext());