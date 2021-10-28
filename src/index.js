import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import SlideToTop from './components/SlideToTop/SlideToTop'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SlideToTop>
        <App />
      </SlideToTop>
    </Router>
  </React.StrictMode>,

  document.getElementById('root')
)
