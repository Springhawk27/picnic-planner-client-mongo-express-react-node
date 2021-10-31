import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import ArticleDetail from './components/ArticleDetail/ArticleDetail';
import Contact from './components/Contact/Contact';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Login from './components/Login/Login';
import AddSpot from './components/AddSpot/AddSpot';
import Spots from './components/Spots/Spots';
import Booking from './components/Booking/Booking';
import ManageSpots from './components/ManageSpots/ManageSpots';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            {/* <PrivateRoute path="/services">
              <Spots></Spots>
            </PrivateRoute> */}
            <Route path="/spots">
              <Spots></Spots>
            </Route>
            {/* <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute> */}
            <Route path="/booking/:spotId">
              <Booking></Booking>
            </Route>
            <Route path="/addSpots">
              <AddSpot></AddSpot>
            </Route>
            <Route path="/manageSpots">
              <ManageSpots></ManageSpots>
            </Route>
            {/* <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute> */}
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            {/* <PrivateRoute path="/profile">
              <Profile></Profile>
            </PrivateRoute> */}
            <Route path="/login">
              <Login></Login>
            </Route>
            {/* <Route path="/register">
              <Register></Register>
            </Route> */}
            <Route path="/articledetail">
              <ArticleDetail></ArticleDetail>
            </Route>
            <Route path="/addSpot">
              <AddSpot></AddSpot>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
