let sumOfIncome = 0
let sumOfExprenses = 0
let sub = 0
let percentage

const calculate = (input) => {
    input.forEach(el => {
       
        if(el.status === 'Prihodi'){
            sumOfIncome += +el.amount
           return sumOfIncome
        }
        if(el.status === 'Rashodi'){
            sumOfExprenses += +el.amount
            return sumOfExprenses
        }
    })
    sub = sumOfIncome - sumOfExprenses
    percentage = (sumOfExprenses / sumOfIncome) * 100
}

const reset = () => {
    sumOfIncome = 0
    sumOfExprenses = 0
}

export { sumOfIncome, sumOfExprenses, sub, percentage, calculate, reset }