import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { getAllSeasons } from './services'
import logo from './resources/images/logo.png'
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
import Footer from './components/Footer';
import Form from './components/Form';
import Title from './components/Title';


const App = () => {
  const [season, setSeason] = useState([])
  const [burger, setBurger] = useState(false)
  const [user, setUser] = useState(false)
  const [login, setLogin] = useState(true)

  const title = useState('')

  useEffect(() => {
    getAllSeasons().then(res => {
      setSeason(prev => prev.concat(res.data))
    })
  }, [])

  return (
    <>
      <GlobalStyle />
      <Router>

        <header>
          <Nav onClick={() => burger === false ? setBurger(true) : setBurger(false)} burger={burger} login={login}>
            <Link to="/"><img src={logo} alt="logo" width="50px" /></Link>
            <FontAwesome icon={faBars} size="2x" color="#E7E8E9" />
            <StyledLink to="/characters" burger={burger ? 1 : 0}>CHARACTERS</StyledLink>
            <StyledLink to="/seasons" primary="true" burger={burger ? 1 : 0}>SEASONS</StyledLink>
          </Nav>
        </header>

        <main>
          <article>
          {user ? <Redirect to="/" /> : <Redirect to ="/signin" />}
            <Switch>
              <Route exact path="/">
                <LandingSection />
              </Route>
              <Route exact path="/seasons">
                <Seasons />
              </Route>
              <Route exact path="/seasons/season1">
                <Title title={'Season One'}/>
                <StyledSeason>
                  <SeasonOne season={season} />
                </StyledSeason>
              </Route>
              <Route exact path="/seasons/season2">
                <Title title={'Season Two'}/>
                <StyledSeason>
                  <SeasonTwo season={season} />
                </StyledSeason>
              </Route>
              <Route exact path="/seasons/season3">
                <Title title={'Season Three'}/>
                <StyledSeason>
                  <SeasonThree season={season} />
                </StyledSeason>
              </Route>
              <Route exact path="/seasons/season4">
                <Title title={'Season Four'}/>
                <StyledSeason>
                  <SeasonFour season={season} />
                </StyledSeason>
              </Route>
              <Route exact path="/characters">
                <Title title={'Caracters'}/>
                <Caracters />
              </Route>
              <Route path="/characters/:id">
                <Title title={'Caracters'}/>
                <Caracters />
              </Route>
              <Route path="/signin">
                <Form setLogin={setLogin}  setUser={setUser}/>
              </Route>
            </Switch>
          </article>
        </main>
          <Footer />
      </Router>
    </>
  )
}

export default App;
