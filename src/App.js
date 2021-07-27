import './App.css';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import Single from './components/single/Single';
import {useContext} from "react";
import {Context} from "./context/Context";

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <div className="App">
        <Topbar/>
        <Switch>
          
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/login">
            {user?<Home/>:<Login/>}
          </Route>

          <Route path="/register">
            {user?<Home/>:<Register/>}
          </Route>

          <Route path="/post/:postId">
            <Single/>
          </Route>

          <Route path="/write">
            {user?<Write/>:<Login/>}
          </Route>

          <Route path="/settings">
            {user?<Settings/>:<Register/>}
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
