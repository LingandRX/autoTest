let globalNumber = '';
let prevNumber = 0;
let nextNumber = 0;
let result = 0;

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
 * @param {Element} key 
*/
function checkNumber(key) {
    const resultPreview = document.querySelector('.result-preview');
    if (key.className.split(' ')[1] === 'number') {
        globalNumber += key.textContent;
        displayKeyCharacter(resultPreview, globalNumber);
        console.log('is number');
    } else if (key.className.split(' ')[1] === 'decimal') {
        console.log('is decimal');
    } else if (key.className.split(' ')[1] === 'equal') {
        console.log('is equal');
        // 执行加法
        prevNumber = globalNumber.split('+')[0];
        nextNumber = globalNumber.split('+')[1];
        console.log(prevNumber, nextNumber);
        prevNumber = count(prevNumber, nextNumber, '+');
        globalNumber = prevNumber;
        displayKeyCharacter(resultPreview, globalNumber);
    } else if (key.className.split(' ')[1] === 'add') {
        globalNumber += key.textContent;
        displayKeyCharacter(resultPreview, globalNumber);
        console.log('is add');
    } else if (key.className.split(' ')[1] === 'clean' || key.className.split(' ')[1] === 'clean-error') {
        console.log('clean');
        globalNumber = 0;
        prevNumber = 0;
        nextNumber = 0;
        displayKeyCharacter(resultPreview, globalNumber);
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
        case '+':
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

const test = document.querySelector('.test');
test.addEventListener('click', async () => {
    try {
        let tmp = await count(1, 2, '+');
        console.log(tmp);
    } catch (error) {
        console.log(error);
    }
});

setKeyEvent();
console.log(count('', 3, '+'));