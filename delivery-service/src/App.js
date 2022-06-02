// import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";
import Profile from "./components/Profile/Profile";
import Container from "react-bootstrap/Container";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import {ToastContainer} from "react-toastify";

function App() {

    let logged_in = localStorage.hasOwnProperty("token");

    if (!logged_in) {
        return (
            <Container className="justify-content-center d-flex">
                <Router>
                    <Routes>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/signup" element={<SignUp/>}/>
                        <Route path="*" element={<SignUp/>}/>
                    </Routes>
                </Router>
                <ToastContainer/>
            </Container>
        );
    }

    return (
        <Container className="justify-content-center d-flex">
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/orders" element={<Orders/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Routes>
            </Router>
            <ToastContainer/>
        </Container>
    );
}

export default App;
