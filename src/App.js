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
import MyBookings from './components/MyBookings/MyBookings';
import ManageAllBookings from './components/ManageAllBookings/ManageAllBookings';
import Guides from './components/Guides/Guides';



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
            <PrivateRoute path="/spots">
              <Spots></Spots>
            </PrivateRoute>
            <PrivateRoute path="/guides">
              <Guides></Guides>
            </PrivateRoute>
            <Route path="/articledetail">
              <ArticleDetail></ArticleDetail>
            </Route>
            {/* <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute> */}
            <Route path="/booking/:spotId">
              <Booking></Booking>
            </Route>
            <PrivateRoute path="/addSpots">
              <AddSpot></AddSpot>
            </PrivateRoute>
            <PrivateRoute path="/manageSpots">
              <ManageSpots></ManageSpots>
            </PrivateRoute>
            <PrivateRoute path="/myBookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute path="/manageAllBooking">
              <ManageAllBookings></ManageAllBookings>
            </PrivateRoute>

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
            {/* <PrivateRoute path="/addSpot">
              <AddSpot></AddSpot>
            </PrivateRoute> */}
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
