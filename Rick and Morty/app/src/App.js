import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import logo from './resources/images/logo.png'
import TitleSection from './components/TitleSection'
import Title from './components/Title';




const App = () => {
  return (
    <>
      <GlobalStyle />
        <Router>
          <header>
            <Nav>
              <Link to="/"><img src={logo} alt="logo" width="50px"/></Link>
            </Nav>
          </header>
          <article>
          <TitleSection>
            <Title />
          </TitleSection>
          </article>
        </Router>
    </>
  )
}

export default App;
