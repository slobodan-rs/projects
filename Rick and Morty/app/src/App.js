import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { getAllSeasons } from './services'
import logo from './resources/images/logo.png'

import GlobalStyle from './components/GlobalStyle';
import { Nav, StyledLink, FontAwesome } from './components/Nav';
import LandingSection from './components/LandingSection'
import Seasons from './components/Seasons'
import Season from './components/Season'
import Caracters from './components/Caracters';
import Footer from './components/Footer';
import Form from './components/Form';
import Title from './components/Title';


const App = () => {
  const [season, setSeason] = useState([])
  const [seasonFilter, setSeasonFilter] = useState('')
  const [title, setTitle] = useState('')
  const [burger, setBurger] = useState(false)
  const [user, setUser] = useState(false)
  const [login, setLogin] = useState(true)

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
            <StyledLink to="/characters/1" burger={burger ? 1 : 0}>CHARACTERS</StyledLink>
            <StyledLink to="/seasons" primary="true" burger={burger ? 1 : 0}>SEASONS</StyledLink>
          </Nav>
        </header>

        <main>
          <article>
            {user ? <Redirect to="/" /> : <Redirect to="/signin" />}
            <Switch>
              <Route exact path="/">
                <LandingSection />
              </Route>
              <Route exact path="/seasons">
                <Seasons setSeasonFilter={setSeasonFilter} setTitle={setTitle}/>
              </Route>
              <Route exact path="/seasons/:num">
                <Title title={title} />
                <Season season={season} seasonFilter={seasonFilter} />
              </Route>
              <Route path="/signin">
                <Form setLogin={setLogin} setUser={setUser} />
              </Route>
              <Route path="/characters/:id">
                <Title title="Caracters" />
                <Caracters setTitle={setTitle} />
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
