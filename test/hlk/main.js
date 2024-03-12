async function setData() {
    let url = "./index.json"
    const request = new Request(url)

    const response = await fetch(request)
    const all = await response.json()
    setTools(Object.keys(all), all)
}

function setTools(keys, obj) {
    keys.forEach(key => {
        const todoList = document.querySelector(`#${key}`).querySelector('ul')
        console.log(key, obj[key])
        if (key) {
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
        } else {
            console.log('---')
        }
    });
}

setData()