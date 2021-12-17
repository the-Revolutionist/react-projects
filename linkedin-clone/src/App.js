import "./App.css";

import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  Switch,
} from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Login } from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
