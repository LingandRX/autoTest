/* 解析json文件内容，执行设置工具 */
async function setData() {
    let url = "./index.json"
    const request = new Request(url)

    const response = await fetch(request)
    const all = await response.json()
    setTools(all)
}

/* 根据获取的对象，设置ul-li */
function setTools(obj) {
    if (!obj) {
        return 'obj is null'
    }
    const keys = Object.keys(obj)
    keys.forEach(key => {
        const todoList = document.querySelector(`#${key}`).querySelector('ul')
        obj[key].forEach(element => {
            let liChild = document.createElement('li')
            if (element.images) {
                let imgChild = document.createElement('img')
                imgChild.classList.add('imgs')
                imgChild.alt = "--"
                imgChild.src = element.images
                liChild.appendChild(imgChild)
            }

            let aChild = document.createElement('a')
            aChild.classList.add('tools')
            aChild.textContent = element.name
            aChild.href = element.src

            liChild.appendChild(aChild)
            todoList.appendChild(liChild)
        });
    });
}

setData()