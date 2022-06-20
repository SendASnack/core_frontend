import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { createBrowserHistory } from 'history';

import HomeRider from "./components/Rider/HomeRider/HomeRider";
import OrdersBusiness from "./components/Businness/OrdersBusinness/OrdersBusiness";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import {Flip, ToastContainer} from "react-toastify";
import {Row} from "react-bootstrap";
import OrdersRider from "./components/Rider/OrdersRider/OrdersRider";
import HomeBusiness from "./components/Businness/HomeBusiness/HomeBusiness";
import ProfileRider from "./components/Rider/ProfileRider/ProfileRider";
import ProfileBusiness from "./components/Businness/ProfileBusiness/ProfileBusiness";

function App() {

    let toastContainer = <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        theme={"light"}
        rtl={false}
        transition={Flip}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        style={{color: "#000000"}}/>;

    const history = createBrowserHistory();
    let logged_in = localStorage.hasOwnProperty("token");
    let rider = true;

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
                {toastContainer}
            </div>
        );
    }

    if (rider) {
        return(
            <Row className="justify-content-center d-flex m-0">
            <Router>
                <Routes>
                    <Route path="/" element={<HomeRider/>}/>
                    <Route path="/orders" element={<OrdersRider/>}/>
                    <Route path="/profile" element={<ProfileRider/>}/>
                    <Route path="*" element={<HomeRider/>}/>
                </Routes>
            </Router>
            {toastContainer}
        </Row>
        );
    }

    return (
        <Row className="justify-content-center d-flex m-0">
            <Router>
                <Routes>
                    <Route path="/" element={<HomeBusiness/>}/>
                    <Route path="/orders" element={<OrdersBusiness/>}/>
                    <Route path="/profile" element={<ProfileBusiness/>}/>
                    <Route path="*" element={<HomeBusiness/>}/>
                </Routes>
            </Router>
            {toastContainer}
        </Row>
    );
}

export default App;
