import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./components/Detail";
import Login from "./components/Login";
import Footer from "./components/Footer";
import LoginHeader from "./components/LoginHeader";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/detail/:id">
            <Header />
            <Detail />
          </Route>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
          <Route path="/">
            <LoginHeader />
            <Login />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
