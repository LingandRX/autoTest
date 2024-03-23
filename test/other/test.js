function checkNumber(character) {
    let tmp = '11';
    if (!character) {
        throw Error('不是数字');
    }
    if (typeof str === 'number') {
        character = String(character);
    }
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

console.log(checkNumber('-'));