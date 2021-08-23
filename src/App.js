// import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import NavbarMain from './components/Navbar/Navbar';
import HomePage from './routes/Home/Home';
import Product from './routes/Product/Product';
import ContactPage from './routes/Contact/Contact';




function App() {
  return (
    <div className="App">
      <Router>
        <NavbarMain></NavbarMain>
        <Switch>
          <Route path="/about">
            about works!
          </Route>
          <Route path="/products">
            <Product></Product>
          </Route>
          <Route path="/contact">
            <ContactPage></ContactPage>
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
