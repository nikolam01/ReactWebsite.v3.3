import { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

//components
import Portfolio from './components/Common/Portfolio'

//pages
import Home from './components/Pages/Home'
import Login from './components/Pages/Login'
import Me from './components/Pages/Me'
import Contact from './components/Pages/Contact'

const App = () => {
  const authenticate = () => {
    return new Promise((resolve) => setTimeout(resolve, 1000))
  }
  useEffect(() => {
    authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if (ele) {
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
  }, [])

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/me" component={Me} />
        <Route exact path="/admin" component={Login} />
        <Route path="*" component={Error} />
      </Switch>
    </>
  )
}
export default App
