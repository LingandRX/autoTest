let globalNumber = '';

function setKeyEvent() {
    const keyLists = document.querySelectorAll('.key');
    const nowCount = document.querySelector('.now-count');
    console.log(keyLists);

    keyLists.forEach((key) => {
        key.addEventListener('click', function() {
            showNumber(nowCount, key.textContent);
            console.log(key.textContent);
        })
    });
}

async function showNumber(element, str) {
    if (!element || !str) {
        return ;
    }
    globalNumber += str;
    element.textContent = globalNumber;
}

async function count(prev, next, symbol) {
}

setKeyEvent();
