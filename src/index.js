import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import SlideToTop from './components/Common/SlideToTop'

ReactDOM.render(
  <Router>
    <SlideToTop>
      <App />
    </SlideToTop>
  </Router>,
  document.getElementById('root')
)
