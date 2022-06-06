// import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { createBrowserHistory } from 'history';

import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import {ToastContainer} from "react-toastify";
import {Row} from "react-bootstrap";

function App() {

    const history = createBrowserHistory();
    let logged_in = localStorage.hasOwnProperty("token");

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

    return (
        <Row className="justify-content-center d-flex m-0" style={{backgroundColor: "#F5F5F5", minHeight: "100vh",}}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/orders" element={<Orders/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="*" element={<Home/>}/>
                </Routes>
            </Router>
            <ToastContainer/>
        </Row>
    );
}

export default App;
