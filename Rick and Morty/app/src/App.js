import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { getAllEpisodes } from './services'
import logo from './resources/images/logo.png'

import GlobalStyle from './components/GlobalStyle';
import { Nav, StyledLink } from './components/Nav';
import { LandingSection, StyledLandingSection } from './components/LandingSection'
import { Seasons, StyledSeasons } from './components/Seasons'
import { Footer, StyledFooter } from './components/Footer';



const App = () => {

  useEffect(() => {
    getAllEpisodes(3).then(res => {
      console.log(res.data)
    })
  }, [])


  return (
    <>
      <GlobalStyle />
      <Router>

        <header>
          <Nav>
            <Link to="/"><img src={logo} alt="logo" width="50px" /></Link>
            <StyledLink to="/characters">CHARACTERS</StyledLink>
            <StyledLink to="/seasons" primary="true">SEASONS</StyledLink>
          </Nav>
        </header>

        <main>
          <article>
            <Switch>
              <Route exact path="/">
                <StyledLandingSection>
                  <LandingSection />
                </StyledLandingSection>
              </Route>
              <Route path="/seasons">
                <StyledSeasons>
                  <Seasons />
                </StyledSeasons>
              </Route>
            </Switch>
          </article>
          <StyledFooter>
            <Footer />
          </StyledFooter>
        </main>

      </Router>
    </>
  )
}

export default App;
