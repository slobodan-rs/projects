import { budgetPrint } from './budget-print.js'
import { calculate, reset } from './budget-calculator.js'
import { sumPrint } from './budget-print-sum.js'

const inputSelect = document.querySelector('#select-feild')
const inputDiscription = document.querySelector('#input-discription')
const inputAmount = document.querySelector('#input-amount')
const submitButton = document.querySelector('.btn')
const icon = document.querySelector('.icon')

let input = []
let count = 0

submitButton.addEventListener ('click', (e) =>{
    e.preventDefault()
    if(inputSelect.value != '' 
                                && inputDiscription.value.trim() != '' 
                                && inputAmount.value.trim() != '' 
                                && inputAmount.value.trim() > 0 
                                && !isNaN(inputAmount.value.trim())){
        input.push({
            id : count +=1,
            status : inputSelect.value,
            discription : inputDiscription.value,
            amount : inputAmount.value
        })
        calculate(input)
        budgetPrint(input)
        sumPrint()
        reset()
        icon.id = 'icon-green'
    }
    else{
        icon.id = 'icon-red'
    }
    setTimeout(() =>{
        icon.id = ''
    },700)
    
    inputSelect.value = ''
    inputDiscription.value = ''
    inputAmount.value = ''
})

export {inputSelect, inputDiscription, inputAmount, submitButton, input, count}

