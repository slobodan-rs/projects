import React from 'react'
import { useEffect } from 'react'


const Sum = ({ input, income, setIncome, expenses, setExpenses }) => {
    
    useEffect( () => {
        let income = 0
        let expenses = 0
        input.filter(el => el.budget.includes('income')).map(el => setIncome((income += +el.amount).toFixed(2)))
        input.filter(el => el.budget.includes('expenses')).map(el => setExpenses((expenses += +el.amount).toFixed(2)))
    }, [input, setIncome, setExpenses])

    const sumAll = () => {
        let income = 0
        let expenses = 0
        let sum = 0
        input.filter(el => el.budget.includes('income')).map(el => income += +el.amount)
        input.filter(el => el.budget.includes('expenses')).map(el => expenses += +el.amount)
        
        sum = income - expenses
        return sum.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    return(
        <div className="header-div">
            <p>Available budget in September:</p>
            <p>{sumAll()}</p>
            <p id="icome">Income: <span id="span-income">{income}</span></p>
            <p id="expenses">Expenses:  <span id="span-expenses">{expenses}
            <span id="percent">{Math.round((expenses / income) * 100) + '%'}</span></span></p>
        </div>
    )
}

export default Sum