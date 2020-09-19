import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { getAllEpisodes } from './services'
import logo from './resources/images/logo.png'
import GlobalStyle from './styled/GlobalStyle';
import { Nav, StyledLink } from './styled/Nav';
import LandingSection from './styled/LandingSection'
import Title from './components/Title';
import { Footer, FooterDiv } from './styled/Footer';



const App = () => {

  useEffect( () => {
    getAllEpisodes().then( res => {
      console.log(res.data.results)
    })
  }, [])


  return (
    <>
      <GlobalStyle />
        <Router>

          <header>
            <Nav>
              <Link to="/"><img src={logo} alt="logo" width="50px"/></Link>
              <StyledLink to="/characters">CHARACTERS</StyledLink>
              <StyledLink to="/seasons" primary="true">SEASONS</StyledLink>
            </Nav>
          </header>

          <main>
            <Switch>
              <Route exact path="/">
                <article>
                <LandingSection>
                  <Title />
                </LandingSection>
                </article>
              </Route>
            </Switch>
                <Footer>
                  <FooterDiv />
                </Footer>
          </main>
          
        </Router>
    </>
  )
}

export default App;
