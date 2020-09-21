import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { getAllEpisodes, getAllCaracters } from './services'
import logo from './resources/images/logo.png'

import GlobalStyle from './components/GlobalStyle';
import { Nav, StyledLink } from './components/Nav';
import { LandingSection, StyledLandingSection } from './components/LandingSection'
import { Seasons, StyledSeasons } from './components/Seasons'
import StyledSeason from './components/StyledSeason';
import SeasonOne from './components/SeasonOne'
import SeasonTwo from './components/SeasonTwo'
import SeasonThree from './components/SeasonThree'
import SeasonFour from './components/SeasonFour'
import { Footer, StyledFooter } from './components/Footer';



const App = () => {
  const [season, setSeason] = useState([])
  const [caracters, setCaracters] = useState([])
  const [episode, setEpisode] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    getAllEpisodes(count).then(res => {
      setSeason(prev => prev.concat(res.data.results))
    })
    getAllCaracters(1).then(res => {
      setCaracters(res.data.results)
    })
  }, [count])
  // useEffect( () => {
  //   getEpisode(episode).then(res => {
      
  //   })
  // })


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
              <Route exact path="/seasons">
                <StyledSeasons>
                  <Seasons />
                </StyledSeasons>
              </Route>
              <Route exact path="/seasons/season1">
                <StyledSeason>
                  <SeasonOne season={season} setEpisode={setEpisode}/>
                </StyledSeason>
              </Route>
              <Route exact path="/seasons/season2">
                <StyledSeason>
                  <SeasonTwo season={season} setEpisode={setEpisode} count={count} setCount={setCount}/>
                </StyledSeason>
              </Route>
              <Route exact path="/seasons/season3">
                <StyledSeason>
                  <SeasonThree season={season} setEpisode={setEpisode} count={count} setCount={setCount}/>
                </StyledSeason>
              </Route>
              <Route exact path="/seasons/season4">
                <StyledSeason>
                  <SeasonFour season={season} setEpisode={setEpisode} count={count} setCount={setCount}/>
                </StyledSeason>
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
