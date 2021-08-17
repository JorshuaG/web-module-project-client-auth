import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import { Switch, Route, Link } from "react-router-dom";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
import Logout from "./components/Logout";

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
            <li>
              <Link to="/friendlist">Friends List</Link>
            </li>
          </ul>
        </div>
      </header>

      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/logout" component={Logout} />
        <PrivateRoute path="/friendlist" component={FriendsList} />
      </Switch>
    </div>
  );
}

export default App;
