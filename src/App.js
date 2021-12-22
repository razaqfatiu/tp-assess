import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './pages/Home';
import Menu from './components/Menu';
import People from './pages/People';
import Person from './pages/Person';

function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/people">
            <People />
          </Route>
          <Route exact path="/people/:id">
            <Person />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
