import React, { useState } from 'react';
import Sum from './components/Sum';
import Form from './components/Form';




function App() {
  const [input, setInput] = useState([])
  console.log(input)

  return (
    <div className="App">
      <Sum input={input}/>
      <Form input={input} setInput={setInput}/>
    </div>
  )
}

export default App;
