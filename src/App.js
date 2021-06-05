import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Views/Login/Login'
import Register from './Views/Register/Register'
import Projects from './Views/Projects/Projects'
import Statistics from './Views/Statisctics/Statistics'
import Changes from './Views/Changes/Changes'
import Visits from './Views/Visits/Visits'
import UsedSpace from './Views/UsedSpace/UsedSpace'
import Iterations from './Views/Iterations/Iterations'
import StageTime from './Views/StageTime/StageTime'
import TaskTime from './Views/TaskTime/TaskTime'
import Links from './Views/AvailableLinks/AvailableLinks'
import Report from './Views/Report/Report'
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
          <Route path='/projects/:id/report'>
            <Report />
          </Route>
          <Route path='/projects/:id/links'>
            <Links />
          </Route>
          <Route path='/projects/:id/tasks_time'>
            <TaskTime />
          </Route>
          <Route path='/projects/:id/stages_time'>
            <StageTime />
          </Route>
          <Route path='/projects/:id/iterations'>
            <Iterations />
          </Route>
          <Route path='/projects/:id/used_space'>
            <UsedSpace />
          </Route>
          <Route path='/projects/:id/visits'>
            <Visits />
          </Route>
          <Route path='/projects/:id/changes'>
            <Changes />
          </Route>
          <Route path="/projects/:id">
            <Statistics />
          </Route>
          <Route path="/">
            <Projects />
          </Route>
        </Switch>}
    </Router>
  );
}

export default App;
