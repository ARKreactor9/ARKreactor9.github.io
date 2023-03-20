document.addEventListener('DOMContentLoaded', () => {
    function enter() {
        alert('enter?')
    }
    let [operatorB, operatorA] = document.querySelectorAll('.operate')
    operatorA.canClick = true
    operatorB.canClick = false
    let elements = document.querySelectorAll('.element')
    let colors = ['#0678ff', '#ff1f1d', '#ff2a00', '#00f6ff', '#27b920', '#f61f9f']
    function paintZero(i) {
        elements[i].style.fontWeight = '500'
        let color = colors[parseInt(Math.random() * colors.length)]
        elements[i].style.color = color
        elements[i].style.textShadow = `1px 1px ${color}`
        elements[i].style.fontFamily = 'Tangerine'
        elements[i].style.cursor = 'auto'
        elements[i].style.animation = 'none'
        elements[i].removeEventListener('click', enter)
    }
    function paintLetter(i) {
        elements[i].style.color = 'white'
        elements[i].style.fontWeight = '900'
        elements[i].style.textShadow = 'none'
        elements[i].style.fontFamily = 'Josefin'
        elements[i].style.cursor = 'auto'
        elements[i].style.animation = 'none'
        elements[i].removeEventListener('click', enter)
    }
    for (let i = 0; i < elements.length; i++) {
        if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].some(s => s==elements[i].innerHTML)) {
            paintZero(i)
        } else {
            paintLetter(i)
        }
    }
    const hello = 'H58714E52988L20081L39177O'
    const ARK = 'I00017am76AhmedRakinKamal'
    const site = 'T9mWSh8yeiii0btss81eENTER'
    let matrix = document.querySelector('#matrix')
    operatorA.addEventListener('click', () => {
        if (!operatorA.canClick) {
            return
        }
        if (operatorA.innerHTML == '× <span class="operator">A</span>') {
            operatorA.style.animation = 'disappear 2s'
            operatorA.canClick = false
            operatorB.canClick = false
            setTimeout(() => {
                operatorA.canClick = true
                operatorB.canClick = true
                operatorB.canClick = true
                operatorB.style.opacity = '1'
                operatorB.style.animation = 'appear 1s'
                operatorB.style.cursor = 'pointer'
                operatorA.innerHTML = '× <span class="operator">A<sup>-1</sup></span>'
                operatorA.style.animation = 'appear 3s'
                    setTimeout(() => {
                        operatorB.style.animation = 'clickme 4s infinite'
                    }, 1000)
            }, 2000)
            let newMatrix = ARK
            for (let i = 0; i < 25; i++) {
                setTimeout(() => {
                    elements[i].innerHTML = newMatrix[i]
                    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].some(s => s==newMatrix[i])) {
                        paintZero(i)
                    } else {
                        paintLetter(i)
                        if (i < 10) {
                            elements[i].style.fontFamily = 'Tangerine'
                        }
                    }
                }, Math.random() * 2000)
            }
        } else {
            operatorA.canClick = false
            operatorB.canClick = false
            operatorA.style.animation = 'disappear 2s'
            operatorB.style.opacity = '0'
            operatorB.style.animation = 'disappear 2s'
            operatorB.canClick = false
            operatorB.style.cursor = 'auto'
            setTimeout(() => {
                operatorA.canClick = true
                operatorA.innerHTML = '× <span class="operator">A</span>'
                operatorA.style.animation = 'appear 1s'
                setTimeout(() => {
                        operatorA.style.animation = 'clickme 4s infinite'
                }, 1000)
            }, 2000)
            let newMatrix = hello
            for (let i = 0; i < 25; i++) {
                setTimeout(() => {
                    elements[i].innerHTML = newMatrix[i]
                    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].some(s => s==newMatrix[i])) {
                        paintZero(i)
                    } else {
                        paintLetter(i)
                    }
                }, Math.random() * 2000)
            }
        }
    })
    operatorB.addEventListener('click', () => {
        if (!operatorB.canClick) {
            return
        }
        if (operatorB.innerHTML == '<span class="operator">B</span> ×') {
            operatorA.canClick = false
            operatorB.canClick = false
            operatorB.style.animation = 'disappear 2s'
            operatorA.style.opacity = '0'
            operatorA.style.cursor = 'auto'
            operatorA.style.animation = 'disappear 2s'
            setTimeout(() => {
                operatorB.innerHTML = '<span class="operator">B<sup>-1</sup></span> ×'
                operatorB.canClick = true
                operatorB.style.animation = 'appear 3s'
            }, 2000)
            let newMatrix = site
            for (let i = 0; i < 25; i++) {
                setTimeout(() => {
                    elements[i].innerHTML = newMatrix[i]
                    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].some(s => s==newMatrix[i])) {
                        paintZero(i)
                    } else {
                        paintLetter(i)
                        if (i >= 20) {
                            elements[i].style.animation = 'clickme 4s infinite'
                            elements[i].style.cursor = 'pointer'
                            elements[i].addEventListener('click', enter)
                        }
                    }
                }, Math.random() * 2000)
            }
        } else {
            operatorA.canClick = false
            operatorB.canClick = false
            operatorB.style.animation = 'disappear 2s'
            setTimeout(() => {
                operatorB.canClick = true
                operatorA.canClick = true
                operatorB.innerHTML = '<span class="operator">B</span> ×'
                operatorA.style.animation = 'appear 3s'
                operatorA.style.cursor = 'pointer'
                operatorA.style.opacity = '1'
                operatorB.style.animation = 'appear 1s'
                setTimeout(() => {
                    operatorB.style.animation = 'clickme 4s infinite'
                }, 1000)
            }, 2000)
            let newMatrix = ARK
            for (let i = 0; i < 25; i++) {
                setTimeout(() => {
                    operatorA.canClick = true
                    operatorB.canClick = true
                    elements[i].innerHTML = newMatrix[i]
                    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].some(s => s==newMatrix[i])) {
                        paintZero(i)
                    } else {
                        paintLetter(i)
                    }
                }, Math.random() * 2000)
            }
        }
    })
})