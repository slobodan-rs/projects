import React from 'react'
import { useState } from 'react'
import { v1 as uuidv1 } from 'uuid'


const Form = ({input, setInput}) => {
    const [discription, setDiscription] = useState('')
    const [amount, setAmount] = useState('')
    const [budget, setBudget] = useState('')

    const handlSubmitt = (e) => {
        e.preventDefault()
        if(amount.length > 0 && !isNaN(amount)){
        setInput(input.concat({discription, amount, budget, id: uuidv1()}))
        setDiscription('')
        setAmount('')
        setBudget('')
        }
        else{
            console.log('nešto')
        }
    }
    
    return (
        <>
            
            <form className="form" onSubmit={handlSubmitt}>
                <select defaultValue={'default'} onChange={(e) => {setBudget(e.target.value)}}>
                    <option value="default" selected disabled hidden>-</option>
                    <option value="income">Income</option>
                    <option value="expenses">Expenses</option>
                </select>
                <input type="text" placeholder="Discription" required value={discription} onChange={(e) => setDiscription(e.target.value)}></input>
                <input type="text" placeholder="Amount" required value={amount} onChange={(e) => setAmount(e.target.value)}></input>
                <input type="submit" value="Enter" className="btn"></input>
            </form>
            
            
        </>
    )
}

export default Form