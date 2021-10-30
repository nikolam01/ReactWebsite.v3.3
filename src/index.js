import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'

//context
import { ThemeProvider } from './context/ThemeContext'
import { PortfolioProvider } from './context/PortfolioContext'
import { ServicesProvider } from './context/ServicesContext'
import { TimelineProvider } from './context/TimelineContext'
import { TeamProvider } from './context/TeamContext'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <TeamProvider>
          <TimelineProvider>
            <PortfolioProvider>
              <ServicesProvider>
                <App />
              </ServicesProvider>
            </PortfolioProvider>
          </TimelineProvider>
        </TeamProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,

  document.getElementById('root')
)
