document.addEventListener('DOMContentLoaded', () => {
    let operatorB = document.querySelector('#operator-back')
    let operatorA = document.querySelector('#operator-ahead')
    let [operatorBsymbol, operatorAsymbol] = [operatorB.querySelector('span'), operatorA.querySelector('span')]
    operatorA.canClick = true
    operatorB.canClick = false
    let colors = ['#0678ff', '#ff1f1d', '#ff2a00', '#00f6ff', '#27b920', '#f61f9f']
    const helloMatrix = 'H58714E52988L20081L39177O'
    const introduceMatrix = 'I00017am76AhmedRakinKamal'
    const enterMatrix = 'T9mWSh8yeiii0btss81eENTER'
    let matrix = document.querySelector('#matrix')
    let elements = []
    for (let i = 0; i < 25; i++) {
        elements.push(document.createElement('p'))
        matrix.appendChild(elements[i])
    }
    const animationDuration = 1000; // in milliseconds
    function writeMatrix(message) {
        for (let i = 0; i < 25; i++) {
            setTimeout(() => {
                elements[i].innerHTML = message[i]
            }, Math.random() * animationDuration)
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
})