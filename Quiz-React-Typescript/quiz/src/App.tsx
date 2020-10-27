import React, { useEffect, useState } from 'react';

import { GlobalStyle } from './components/GlobalStyle';
import { getQuestions } from './services.js';

const App = () => {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    getQuestions().then((res: { data: React.SetStateAction<never[]>; }) => {
      setQuestions(res.data)
    })
  })

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  return (
    <>
    <GlobalStyle/>
      <h1>Quiz</h1>
      <button>Start</button>
    </>
  );
}

export default App;
