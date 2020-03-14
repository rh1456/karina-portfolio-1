import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Page from './pages/Page'
import Page2 from './pages/Page2'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Cartoon from './pages/cartoon_One.JPG'
import CartoonTwo from './pages/cartoon_Two.jpg'
const App = () => {
  return (
    <Router>
      <header className="main-header">
        <h1 className="name-hOne">Karina Silveira</h1>
      </header>
      <div className="home-about">
        <p>
          <Link className="home-link" to="/">
            Home
          </Link>
        </p>
        <p>About</p>
      </div>
      <div className="first-cartoon">
        <img src={Cartoon} />
      </div>

      <div className="first-cartoon">
        <img src={CartoonTwo} />
      </div>
      <div className="comment-section">
        <input className="art commnet" type="text"></input>
      </div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/1" component={Page}></Route>
        <Route exact path="/2" component={Page2}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
