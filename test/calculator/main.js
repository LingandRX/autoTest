let globalNumber = '';

/**
 * 为计算器的按键绑定监听事件
 */
function setKeyEvent() {
    const keyLists = document.querySelectorAll('.key');
    const resultPreview = document.querySelector('.result-preview');
    console.log(keyLists);

    keyLists.forEach((key) => {
        key.addEventListener('click', function () {
            displayKeyCharacter(resultPreview, checkNumber(key.textContent));
            console.log(key.textContent);
        })
    });
}

/**
 * 
 * @param {string} character 
 * @returns 返回检查字符结果
 */
function checkNumber(character) {
    let tmp = '11';
    if (!character) {
        throw Error('不是数字');
    }
    if (typeof str === 'number') {
        character = String(character);
    }
    // 检查按键，返回功能str
    switch (character) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            tmp = character;
            break;
        case '÷':
        case 'x':
        case '-':
        case '+':
            tmp = 'calculator';
            break;
        default:
            return '暂不支持';
    }
    return tmp;
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
    globalNumber += character;
    element.textContent = globalNumber;
}
/**
 * 异步计算函数
 * @param {number} prev - 第一个数
 * @param {number} next - 第二个数
 * @param {string} symbo - 计算符号
 * @return {Promise} 返回计算结果
 */
async function count(prev, next, symbol) {
    let tmp;
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
            return Promise.reject('Error');
    }

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(tmp);
        }, 2000);
    });
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
