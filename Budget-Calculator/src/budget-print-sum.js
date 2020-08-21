import {input} from './index.js'
import {sumOfIncome, sumOfExprenses, sub, percentage } from './budget-calculator.js'

const sumIncomePrint = document.querySelector('.sum-income')
const sumExpensesPrint = document.querySelector('.sum-expenses')
const subtraction = document.querySelector('.subtraction')

const incomePar = document.createElement('p')
incomePar.id = 'sum-income'
incomePar.textContent ='Prihodi'
sumIncomePrint.append(incomePar)

const expensesPar = document.createElement('p')
expensesPar.id = 'sum-expenses'
expensesPar.innerText = 'Rashodi'
sumExpensesPrint.append(expensesPar)

const percentPar = document.createElement('p')
percentPar.id = 'percent-block'

const subtractionPar = document.createElement('p')
subtraction.appendChild(subtractionPar)

const sumPrint = () =>{
    if(input.filter(el => el.status === 'Prihodi')){ 
        incomePar.innerHTML = `Prihodi <span style="float: right">+ ${(Math.round(sumOfIncome * 100) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </span>` 
    }
    if(input.filter(el => el.status === 'Rashodi')){
        expensesPar.innerHTML = `Rashodi <span style="float: right">- ${(Math.round(sumOfExprenses * 100) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </span>`
        percentPar.innerHTML = `${Math.round(percentage)}%`
        sumExpensesPrint.append(percentPar)
    }
    if(sub > 0){
        subtractionPar.innerHTML = `+${(Math.round(sub * 100) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
        subtraction.appendChild(subtractionPar)
    }
    else{
        subtractionPar.innerHTML = `${(Math.round(+sub * 100) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
        subtraction.appendChild(subtractionPar)
    }
}

export { incomePar, expensesPar, subtractionPar, sumPrint }