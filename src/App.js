import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Pages/Shared/Header/Header';
import Services from './Pages/Home/Services/Services';

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
        <Route path="/services">
        <Services></Services>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
