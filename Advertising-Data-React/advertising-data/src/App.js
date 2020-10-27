import React, { useEffect, useState } from 'react';

//All component imports 
import GlobalStyled from './styled/GlobalStyled'
import { getAllData } from './services'
import Section from './styled/Section'
import Header from './components/Header'
import Form from './components/Form';
import Chart from './components/Chart'


// Main Components
const App = () => {
  // UseState hook for geting all data from local server, globalFilter and title for chart
  const [allData, setAllData] = useState([])
  const [globalFilter, setGloabalFilter] = useState([])
  const [title, setTitle] = useState()

  // hook for geting all data from localhost server and seting state of allData
  useEffect( () => {
    getAllData().then(res => {
      setAllData(res.data)
    })
  },[])


  return (
    <>
      <GlobalStyled />
      <Header />
      <Section>
        <Form allData={allData} globalFilter={globalFilter} setGloabalFilter={setGloabalFilter} setTitle={setTitle}/>
        <Chart globalFilter={globalFilter} title={title} />
      </Section>
    </>
  );
}

export default App;
