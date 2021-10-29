import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import { ThemeProvider } from './context/ThemeContext'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ScrollToTop>
    </Router>
  </React.StrictMode>,

  document.getElementById('root')
)
