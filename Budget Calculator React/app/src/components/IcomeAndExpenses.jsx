import React from 'react'

const IcomeAndExpenses = ({el, handleMouseEnter, handleButton, handleMouseLeave, isShown, percent }) => {
    return (
        <div id={el.id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleButton} className={ isShown ? "income-div-hower" : "income-div" }>
            <p id={el.id}>{el.discription}
                <span id={ el.budget.includes('income') ? "span-right-income" : "span-right-expenses" }>{el.amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 
                <span id={ el.budget.includes('expenses') ? "percent" : null }>{percent}</span></span>
            </p>
        </div>
    )
}

export default IcomeAndExpenses