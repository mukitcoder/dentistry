import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import Services from "./Pages/Home/Services/Services";
import NotFound from "./Pages/NotFound/NotFound";
import Booking from "./Pages/Booking/Booking";
import Login from "./Pages/Login/Login/Login";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/booking/:serviceId">
            <Booking></Booking>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
