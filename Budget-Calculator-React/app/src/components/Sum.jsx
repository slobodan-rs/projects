import React from 'react'
import '../index.css'


const Sum = ({input}) => {

    const income = () => {
        let tmp = 0
        input.filter(el => el.budget.includes('income')).map(el => tmp += +el.amount)
        return tmp
    }
    const expenses = () => {
        let tmp = 0
        input.filter(el => el.budget.includes('expenses')).map(el => tmp += +el.amount)
        return tmp
    }
    const sum = () => {
        let tmp = 0
        let tmp2 = 0
        input.filter(el => el.budget.includes('income')).map(el => tmp += +el.amount)
        input.filter(el => el.budget.includes('expenses')).map(el => tmp2 += +el.amount)
        tmp = tmp - tmp2
        return tmp
    }

    return(
        <div className="header-div">
            <p>Available budget in September:</p>
            <p>{sum()}</p>
            <p id="icome">Income: {income()}</p>
            <p id="expenses">Expenses: {expenses()}</p>
        </div>
    )
}

export default Sum