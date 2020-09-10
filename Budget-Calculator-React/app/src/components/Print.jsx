import React from 'react'

const Print = ({ input }) => {

    const handleButton = () => {
        input.splice(input.findIndex(el => el.id === el), 1)
        // input.splice(input.findIndex(el => el.id == expensesInput.id),1)
    }
    return (
        <div className="budget">
            <div className="income">
                <p>Income:</p>
                {input.map(el =>
                    el.budget.includes('income') ? <div className="income-div" key={el.id}>
                        <p>{el.discription}</p>
                        <p><span id="span-right-income">{el.amount}</span></p>
                        <button>x</button>
                    </div>
                : null)}

            </div>
            <div className="expenses">
                <p>Expenses:</p>
                {input.map(el => el.budget.includes('expenses') ? <div className="income-div" key={el.id}>
                        <p>{el.discription}</p>
                        <p><span id="span-right-expenses">{el.amount}</span></p>
                        <button onClick={handleButton}>x</button>
                    </div>
                : null)}

            </div>
        </div>
    )
}
export default Print