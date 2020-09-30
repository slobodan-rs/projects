import {input} from './index.js'
import {sumOfIncome, sumOfExprenses, sub, percentage } from './budget-calculator.js'

const incomePar = document.querySelector('#sum-income')
const expensesPar = document.querySelector('#sum-expenses')
const subtractionPar = document.querySelector('#subtraction')


const sumPrint = () =>{
    if(input.filter(el => el.status === 'Prihodi')){ 
        incomePar.innerHTML = ` 
            <p>Prihodi</p>
            <p id="percent-none">${Math.round(percentage)}%</p>
            <p id="right">+ ${(Math.round(sumOfIncome * 100) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </p>` 
    }
    if(input.filter(el => el.status === 'Rashodi')){
        expensesPar.innerHTML = `
            <p>Rashodi</p>
            <p id="percent">${Math.round(percentage)}%</p>
            <p id="right">- ${(Math.round(sumOfExprenses * 100) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </p>`
    }
    if(sub > 0){
        subtractionPar.innerHTML = `+${(Math.round(sub * 100) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
       
    }
    else{
        subtractionPar.innerHTML = `${(Math.round(+sub * 100) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
       
    }
}

export { incomePar, expensesPar, subtractionPar, sumPrint }