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

        isOperation(string) {
            return this[_symbol] === string ? true : false;
        }
    }

    return myNumber;
})();

let e = new myNumber();
/**
 * 为计算器的按键绑定监听事件，匿名函数立即执行
 */
(function setKeyEvent() {
    const keyLists = document.querySelectorAll('.key');
    console.log(keyLists);

    keyLists.forEach((key) => {
        key.addEventListener('click', function () {
            console.log(key.textContent);
            checkNumber(key);
        })
    });
})();

/**
 * 根据按键触发功能
 * @param {Element} key-按键
*/
function checkNumber(key) { 
    if (key.className.split(' ')[1] === 'number') {
        enterNumber(key);
    } else if (key.className.split(' ')[1] === 'equal') {
        equalNumber(e, key);
    } else if (key.className.split(' ')[1] === 'add') {
        useValueCalculate(key, 'add');
    } else if (key.className.split(' ')[1] === 'division') {
        useValueCalculate(key, 'division');
    } else if (key.className.split(' ')[1] === 'subtract') {
        useValueCalculate(key, 'subtract');
    } else if (key.className.split(' ')[1] === 'multiply') {
        useValueCalculate(key, 'multiply');
    } else if (key.className.split(' ')[1] === 'clean' || key.className.split(' ')[1] === 'clean-error') {
        cleanNumber(e);
    } else {
        console.log('not number');
    }
}

/**
 * 在结果框中显示按键的结果
 * @param {String} character
 */
function displayKeyCharacter(character) {
    const resultPreview = document.querySelector('.result-preview');
    if (!resultPreview && !character) {
        return '结果为空';
    }
    if (character === 'ERROR') {
        globalNumber = '';
        resultPreview.textContent = 'ERROR';;
        return;
    }

    resultPreview.textContent = character;
}
/**
 * 计算函数
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
        case 'multiply':
            tmp = prev * next;
            break;
        case "division":
            tmp = prev / next;
            break;
        case 'add':
            tmp = prev + next;
            break;
        case 'subtract':
            tmp = prev - next;
            break;
        default:
            return 'Error';
    }
    console.log(tmp);
    return tmp;
}

/**
 * 输入数字
 * @param {Element} key 
 */
function enterNumber(key) {
    e.setGlobal(e.getGlobal() + key.textContent);
    // console.log(`e.global = ${e.getGlobal()}`);
    displayKeyCharacter(e.getGlobal());
}

/**
 * 四则运算
 * @param {Element} key 
 * @param {String} string 
 */
function useValueCalculate(key, string) {
    if (!e.getSymbol()) {
        e.setPrev(e.getGlobal());
        e.setGlobal(e.getGlobal() + key.textContent);
        e.setSymbol(`${string}`);
        displayKeyCharacter(e.getGlobal());
    } else {
        let tmp = '';
        switch (string) {
            case 'add': tmp = '+';
                break;
            case 'subtract': tmp = '-';
                break;
            case 'division': tmp = '÷';
                break;
            case 'multiply': tmp = 'x';
                break;
        }
        let next = e.getGlobal().split(`${tmp}`)[1];
        e.setNext(next);
        let result = count(e.getPrev(), e.getNext(), e.getSymbol());
        e.setResult(result);

        e.setSymbol('');
        e.setGlobal(e.getResult());

        console.log(e.getPrev(), e.getNext());
        displayKeyCharacter(e.getResult());
    }
}

/**
 * 清除计算
 * @param {myNumber} e-Number类
 */
function cleanNumber(e) {
    e.setGlobal('0');
    e.setNext(0);
    e.setPrev(0);
    e.setSymbol('');
    e.setResult(0);
    displayKeyCharacter(e.getGlobal());
}

/**
 * 等号根据计算符号计算
 * @param {myNumber} e-Number类
 * @param {Element} key
 */
function equalNumber(e, key) {
    if (e.isOperation('add')) {
        useValueCalculate(key, 'add');
    } else if (e.isOperation('division')) {
        useValueCalculate(key, 'division');
    } else if (e.isOperation('subtract')) {
        useValueCalculate(key, 'subtract');
    } else if (e.isOperation('multiply')) {
        useValueCalculate(key, 'multiply');
    }
}