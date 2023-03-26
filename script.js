document.addEventListener('DOMContentLoaded', () => {
    let operatorB = document.querySelector('#operator-back')
    let operatorA = document.querySelector('#operator-ahead')
    let [operatorBsymbol, operatorAsymbol] = [operatorB.querySelector('span'), operatorA.querySelector('span')]
    operatorA.canClick = true
    operatorB.canClick = false
    let colors = ['#0678ff', '#ff1f1d', '#ff2a00', '#00f6ff', '#27b920', '#f61f9f']
    const helloMatrix = 'H58714E52988L20081L39177O'
    const introduceMatrix = 'I00017am76AhmedRakinKamal'
    const enterMatrix = 'ThisEis91N80myTWeb8ESiteR'
    // const enterMatrix = 'T9m1Sh8yWiii0etss8beENTER'
    let matrix = document.querySelector('#matrix')
    let elements = []
    for (let i = 0; i < 25; i++) {
        elements.push(document.createElement('p'))
        matrix.appendChild(elements[i])
    }
    const animationDuration = 1000; // in milliseconds
    function writeMatrix(message) {
        for (let i = 0; i < 25; i++) {
            let delay = Math.random() * animationDuration
            setTimeout(() => {
                elements[i].innerHTML = message[i]
                if (message[i].match(/\d/)) {
                    elements[i].style.setProperty('--color', colors[parseInt(Math.random() * colors.length)])
                    elements[i].classList.add('matrix-number')
                } else {
                    elements[i].classList.remove('matrix-number')
                }
                if (i % 5 == 4 && message[i].match(/[ENTER]/)) {
                    elements[i].style.setProperty('--delay', `${1000 - delay}ms`)
                    elements[i].classList.add('enter')
                    elements[i].addEventListener('click', enter)
                } else {
                    elements[i].classList.remove('enter')
                    elements[i].removeEventListener('click', enter)
                }
                // if (i >= 10 && message[i].match(/[AhmedRakinKamal]/)) {
                //     elements[i].classList.add('name')
                // } else {
                //     elements[i].classList.remove('name')
                // }
            }, delay)
        }
    }
    let message = helloMatrix
    writeMatrix(message)
    function appearOperator(operator) {
        operator.classList.remove('hidden-operate')
        operator.classList.add('operate')
    }
    function disappearOperator(operator) {
        operator.classList.remove('operate')
        operator.classList.add('hidden-operate')
    }
    operatorA.addEventListener('click', () => {
        if (message == helloMatrix) {
            message = introduceMatrix
            writeMatrix(message)
            operatorBsymbol.innerHTML = 'MA<sup>-1</sup>M<sup>-1</sup>'
            appearOperator(operatorB)
            disappearOperator(operatorA)
            setTimeout(() => {
                operatorAsymbol.innerHTML = 'B'
                appearOperator(operatorA)
            }, animationDuration)
        } else if (message == introduceMatrix) {
            message = enterMatrix
            writeMatrix(message)
            disappearOperator(operatorA)
            disappearOperator(operatorB)
            setTimeout(() => {
                operatorBsymbol.innerHTML = 'MAB<sup>-1</sup>A<sup>-1</sup>M<sup>-1</sup>'
                appearOperator(operatorB)
            }, animationDuration)
        }
    })
    operatorB.addEventListener('click', () => {
        if (message == enterMatrix) {
            console.log('dbug')
            message = introduceMatrix
            writeMatrix(message)
            operatorAsymbol.innerHTML = 'B'
            appearOperator(operatorA)
            disappearOperator(operatorB)
            setTimeout(() => {
                operatorBsymbol.innerHTML = 'MA<sup>-1</sup>M<sup>-1</sup>'
                appearOperator(operatorB)
            }, animationDuration)
        } else if (message == introduceMatrix) {
            message = helloMatrix
            writeMatrix(message)
            disappearOperator(operatorB)
            disappearOperator(operatorA)
            setTimeout(() => {
                operatorAsymbol.innerHTML = 'A'
                appearOperator(operatorA)
            }, animationDuration)
        }
    })

    let blindsContainer = document.querySelector('.blinds')
    for (let i = 0; i < 25; i++) {
        blindsContainer.appendChild(document.createElement('div'))
    }
    let blinds = blindsContainer.querySelectorAll('*')
    function enter() {
        blindsContainer.style.display = 'grid'
        for (let i = 0; i < 25; i++) {
            let delay = Math.random() * 1000
            setTimeout(() => {
                blinds[i].classList.add('closed-blind')
            }, delay)
        }
    }
    document.querySelector('#skip').addEventListener('click', enter)
})