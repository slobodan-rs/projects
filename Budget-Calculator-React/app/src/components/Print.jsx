import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import IcomeAndExpenses from './IcomeAndExpenses'

const Print = ({ input, setIncome, income, expenses, setExpenses }) => {
    const [isShown, setIsShown] = useState(false)
    const [findId, setFindId] = useState('')
    const [percent, setPercent] = useState(0)

    useEffect( () => {
        setPercent(Math.round((expenses / income) * 100) + '%')
    },[income, expenses])

    const handleButton = () => {
        let index = input.findIndex(el => el.id.includes(findId))
        if(input[index].budget.includes('income')){
            setIncome(income - input[index].amount)
        }
        else {
            setExpenses(expenses - input[index].amount)
        }
        input.splice(index, 1)
    }
    
    const handleMouseEnter = (e) =>{
        setIsShown(true)
        setFindId(e.target.id)
    }
    const handleMouseLeave = (e) =>{
        setIsShown(false)
    }
    return (
        <div className="budget">
            <div className="income">
                <p>Income:</p>
                {input.map(el =>
                    el.budget.includes('income') ?  <IcomeAndExpenses key={el.id} el={el} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} handleButton={handleButton} isShown={isShown} income={income} expenses={expenses} /> : null)}
            </div>
            <div className="expenses">
                <p>Expenses:</p>
                {input.map(el => el.budget.includes('expenses') ? <IcomeAndExpenses key={el.id} el={el} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} handleButton={handleButton} isShown={isShown} percent={percent}/> : null)}
            </div>
        </div>
    )
}
export default Print