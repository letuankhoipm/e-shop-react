// import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Footer from './components/Footer/Footer';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import NavbarMain from './components/Navbar/Navbar';
import HomePage from './routes/Home/Home';




function App() {
  return (
    <div className="App">
      <Router>
        <NavbarMain></NavbarMain>
        <Switch>
          <Route path="/about">
            about works!
          </Route>
          <Route path="/users">
            user works!
          </Route>
          <Route path="/">
            <HomePage></HomePage>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
