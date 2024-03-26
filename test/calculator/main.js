let globalNumber = '';
let prevNumber = 0;
let nextNumber = 0;
let result = 0;

const myNumber = (function () {
    // 使用Symbol生成唯一指定标识
    let _globalNumber = Symbol('globalNumber');
    let _prevNumber = Symbol('prevNumber');
    let _nextNumber = Symbol('nextNumber');
    let _result = Symbol('result');
    let _symbol = Symbol('symbol');

    class myNumber {
        constructor() {
            this[_globalNumber] = '';
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
/**
 * 为计算器的按键绑定监听事件
 */
function setKeyEvent() {
    const keyLists = document.querySelectorAll('.key');
    console.log(keyLists);

    keyLists.forEach((key) => {
        key.addEventListener('click', function () {
            console.log(key.textContent);
            checkNumber(key);
        })
    });
}

/**
 * 根据按键触发功能
 * @param {Element} key 
*/
function checkNumber(key) {
    const resultPreview = document.querySelector('.result-preview');
    if (key.className.split(' ')[1] === 'number') {
        enterNumber(key, resultPreview);
    } else if (key.className.split(' ')[1] === 'decimal') {
        console.log('is decimal');
    } else if (key.className.split(' ')[1] === 'equal') {
        equalNumber(key, resultPreview);
    } else if (key.className.split(' ')[1] === 'add') {
        addNumber(key, resultPreview);
    } else if (key.className.split(' ')[1] === 'division') {
        divisionNumber(key, resultPreview);
    } else if (key.className.split(' ')[1] === 'subtract') {
        subtractNumber(key, resultPreview);
    } else if (key.className.split(' ')[1] === 'clean' || key.className.split(' ')[1] === 'clean-error') {
        cleanNumber(key, resultPreview);
    } else {
        console.log('not number');
    }
}

/**
 * 在结果框中显示按键的结果
 * @param {Element} element
 * @param {String} character
 * @returns 
 */
function displayKeyCharacter(element, character) {
    if (!element && !character) {
        return '结果为空';
    }
    if (character === 'ERROR') {
        globalNumber = '';
        element.textContent = 'ERROR';;
        return;
    }

    element.textContent = character;
}
/**
 * 异步计算函数
 * @param {number} prev - 第一个数
 * @param {number} next - 第二个数
 * @param {string} symbo - 计算符号
 * @return {Promise} 返回计算结果
 */
function count(prev, next, symbol) {
    let tmp;
    if (!prev || !next) {
        return prev || next;
    }
    prev = Number(prev);
    next = Number(next);
    switch (symbol) {
        case 'x':
            tmp = prev * next;
            break;
        case "/":
            tmp = prev * next;
            break;
        case 'add':
            tmp = prev + next;
            break;
        case '-':
            tmp = prev - next;
            break;
        default:
            return 'Error';
    }
    console.log(tmp);
    return tmp;
}

/* const test = document.querySelector('.test');
test.addEventListener('click', async () => {
    try {
        let tmp = await count(1, 2, '+');
        console.log(tmp);
    } catch (error) {
        console.log(error);
    }
}); */

setKeyEvent();

function enterNumber(key, resultPreview) {
    e.setGlobal(e.getGlobal() + key.textContent);
    console.log(`e.global = ${e.getGlobal()}`);
    displayKeyCharacter(resultPreview, e.getGlobal());
}

function addNumber(key, resultPreview) {
    if (!e.getSymbol()) {
        e.setPrev(e.getGlobal());
        e.setGlobal(e.getGlobal() + key.textContent);
        e.setSymbol('add');
        displayKeyCharacter(resultPreview, e.getGlobal());
    } else {
        let next = e.getGlobal().split('+')[1];
        e.setNext(next);
        let result = count(e.getPrev(), e.getNext(), e.getSymbol());
        e.setResult(result);
        
        e.setSymbol('');
        e.setGlobal(e.getResult());
        displayKeyCharacter(resultPreview, e.getResult());
    }
}

function divisionNumber(key, resultPreview) {
    console.log('----');
}

function subtractNumber(key, resultPreview) {
    console.log('-1--');
}

function cleanNumber(key, resultPreview) {
    e.setGlobal('0');
    e.setNext(0);
    e.setPrev(0);
    e.setSymbol('');
    e.setResult(0);
    displayKeyCharacter(resultPreview, e.getGlobal());
}

function equalNumber(key, resultPreview) {
    if (e.getSymbol() === 'add') {
        addNumber(key, resultPreview);
    }
}