const aliceTumbling = [
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" }
]

const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: "forwards"
}

const alice1 = document.querySelector('#alice1')
const alice2 = document.querySelector('#alice2')
const alice3 = document.querySelector('#alice3')

// alice1.animate(aliceTumbling, aliceTiming).finished
//     .then(() => {
//         return alice2.animate(aliceTumbling, aliceTiming).finished
//     }).then(() => {
//         return alice3.animate(aliceTumbling, aliceTiming).finished
//     }).catch((error) => {
//         console.log(error)
//     })

// function doStep(alice) {
//     return alice.animate(aliceTumbling, aliceTiming).finished
// }

// async function doOperation() {
//     try {
//         await doStep(alice1)
//         await doStep(alice2)
//         await doStep(alice3)
//     } catch (error) {
//         console.log(error)
//     }
// }

// doOperation()

function doStep1(alice, callback) {
    alice.animate(aliceTumbling, aliceTiming).finished.then(() => {
        if (callback) {
            callback()
        }
    })
}

doStep1(alice1, () => {
    doStep1(alice2, () => {
        doStep1(alice3)
    })
})

