import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Views/Login/Login'
import Register from './Views/Register/Register'
import Projects from './Views/Projects/Projects'
import './App.css';

function App() {
  return (
    <Router>
      {localStorage.getItem('user_id') === null ?
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
           <Login />
          </Route>
        </Switch> : 
          <Switch>
          <Route path="/register">
            {/* <Register /> */}
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>}
    </Router>
  );
}

export default App;
