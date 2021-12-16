import "./App.css";

import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  Switch,
} from "react-router-dom";

import { Login } from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
