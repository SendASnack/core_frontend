import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { createBrowserHistory } from 'history';

import HomeRider from "./components/Rider/HomeRider/HomeRider";
import OrdersBusiness from "./components/Businness/OrdersBusinness/OrdersBusiness";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import {ToastContainer} from "react-toastify";
import {Row} from "react-bootstrap";
import OrdersRider from "./components/Rider/OrdersRider/OrdersRider";
import HomeBusiness from "./components/Businness/HomeBusiness/HomeBusiness";

function App() {

    const history = createBrowserHistory();
    let logged_in = localStorage.hasOwnProperty("token");
    let rider = false;

    if (!logged_in) {
        return (
            <div className="justify-content-center d-flex" data-testid="App">
                <Router history={history}>
                    <Routes>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/signup" element={<SignUp/>}/>
                        <Route path="*" element={<SignUp/>}/>
                    </Routes>
                </Router>
                <ToastContainer/>
            </div>
        );
    }

    if (rider) {
        return(
            <Row className="justify-content-center d-flex m-0" style={{backgroundColor: "#F5F5F5", minHeight: "100vh",}}>
            <Router>
                <Routes>
                    <Route path="/" element={<HomeRider/>}/>
                    <Route path="/orders" element={<OrdersRider/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="*" element={<HomeRider/>}/>
                </Routes>
            </Router>
            <ToastContainer/>
        </Row>
        );
    }

    return (
        <Row className="justify-content-center d-flex m-0" style={{backgroundColor: "#F5F5F5", minHeight: "100vh",}}>
            <Router>
                <Routes>
                    <Route path="/" element={<HomeBusiness/>}/>
                    <Route path="/orders" element={<OrdersBusiness/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="*" element={<HomeBusiness/>}/>
                </Routes>
            </Router>
            <ToastContainer/>
        </Row>
    );
}

export default App;
