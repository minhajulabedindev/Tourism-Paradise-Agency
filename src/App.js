import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbers from "./Component/Shared/Navber/Navbers";
import Home from "./Component/Home/Home";
import PageNotFound from "./Component/PageNotFound/PageNotFound";
import Login from "./Component/Login/Login";
import Service from "./Component/Service/Service";
import MyBooking from "./Component/MyBooking/MyBooking";
import AuthProvider from "./Component/Context/AuthProvider/AuthProvider";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import Success from "./Component/Success/Success";
import Details from "./Component/Details/Details";
import Footer from "./Component/Shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbers></Navbers>
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
            <Route path="/service">
              <Service></Service>
            </Route>
            <PrivateRoute path="/booking">
              <MyBooking></MyBooking>
            </PrivateRoute>
            <PrivateRoute path="/success">
              <Success></Success>
            </PrivateRoute>
            <PrivateRoute path="/details/:id">
              <Details></Details>
            </PrivateRoute>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
