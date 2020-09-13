import React, { useState } from 'react';
import Sum from './components/Sum';
import Form from './components/Form';
import Print from './components/Print';


function App() {
  const [input, setInput] = useState([])
  const [income, setIncome] = useState(0)
  const [expenses, setExpenses] = useState(0)

  return (
    <div className="App">
      <Sum input={input} income={income} setIncome={setIncome} expenses={expenses} setExpenses={setExpenses} />
      <Form input={input} setInput={setInput}/>
      <Print input={input} setIncome={setIncome} income={income} expenses={expenses} setExpenses={setExpenses} />
    </div>
  )
}

export default App;
