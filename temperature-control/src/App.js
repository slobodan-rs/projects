import React, { useState } from 'react';
import GlobalStyle from './components/GlobalStyle';
import Temperature from './components/Temperature';

function App() {
  const [temperature, setTemperature]= useState(10)

  return (
    <>
      <GlobalStyle />
      <Temperature temperature={temperature} setTemperature={setTemperature} />
    </>
  );
}

export default App;
