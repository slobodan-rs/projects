import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { getAllEpisodes } from './services'
import logo from './resources/images/logo.png'

import { faBars } from '@fortawesome/free-solid-svg-icons'

import GlobalStyle from './components/GlobalStyle';
import { Nav, StyledLink, FontAwesome } from './components/Nav';
import LandingSection from './components/LandingSection'
import Seasons from './components/Seasons'
import StyledSeason from './components/StyledSeason';
import SeasonOne from './components/SeasonOne'
import SeasonTwo from './components/SeasonTwo'
import SeasonThree from './components/SeasonThree'
import SeasonFour from './components/SeasonFour'
import Caracters from './components/Caracters';
import { Footer, StyledFooter } from './components/Footer';



const App = () => {
  const [season, setSeason] = useState([])
  const [count, setCount] = useState(0)
  const [burger, setBurger] = useState(false)

  useEffect(() => {
    getAllEpisodes(count).then(res => {
      setSeason(prev => prev.concat(res.data.results))
    })
  }, [count])

  


  return (
    <>
      <GlobalStyle />
      <Router>

        <header>
          <Nav onClick={() => burger === false ? setBurger(true) : setBurger(false) } burger={burger}>
            <Link to="/"><img src={logo} alt="logo" width="50px" /></Link>
            <FontAwesome icon={faBars} size="2x" color="#E7E8E9" /> 
            <StyledLink to="/characters"  burger={burger ? 1 : 0}>CHARACTERS</StyledLink>
            <StyledLink to="/seasons" primary="true" burger={burger ? 1 : 0}>SEASONS</StyledLink>
          </Nav>
        </header>

        <main>
          <article>
            <Switch>
              <Route exact path="/">
                  <LandingSection />
              </Route>
              <Route exact path="/seasons">
                  <Seasons />
              </Route>
              <Route exact path="/seasons/season1">
                <StyledSeason>
                  <SeasonOne season={season}/>
                </StyledSeason>
              </Route>
              <Route exact path="/seasons/season2">
                <StyledSeason>
                  <SeasonTwo season={season} count={count} setCount={setCount}/>
                </StyledSeason>
              </Route>
              <Route exact path="/seasons/season3">
                <StyledSeason>
                  <SeasonThree season={season} count={count} setCount={setCount}/>
                </StyledSeason>
              </Route>
              <Route exact path="/seasons/season4">
                <StyledSeason>
                  <SeasonFour season={season} count={count} setCount={setCount}/>
                </StyledSeason>
              </Route>
              <Route exact path="/characters">
                  <Caracters />
              </Route>
              <Route path="/characters/:id">
                  <Caracters />
              </Route>
  
            </Switch>
          </article>
        </main>

          <StyledFooter>
            <Footer />
          </StyledFooter>

      </Router>
    </>
  )
}

export default App;
