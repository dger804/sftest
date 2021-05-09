import './App.css';
import { BrowserRouter as Router,
  Route, 
} from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Home } from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navigation/>
          <Route path="/" component={Home}/>
        </Router>
      </header>      
    </div>
  );
}

export default App;
