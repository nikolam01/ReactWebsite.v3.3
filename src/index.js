import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { ServicesProvider, PortfolioProvider, TimelineProvider, ThemeProvider, TeamProvider } from './context'

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
