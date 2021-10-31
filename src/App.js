import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import { useLoader } from './hooks/useLoader'
import { ScrollToTop } from './components'
import { Home, Contact, AboutMe, Error } from './pages'

const App = () => {
  useLoader()
  return (
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about-me" component={AboutMe} />
        <Route path="*" component={Error} />
      </Switch>
    </ScrollToTop>
  )
}
export default App
