import logo from "./logo.svg";
import "./App.css";
import MuiFormik from "./components/MuiFormik";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MuiBreakPoints from "./components/MuiBreakPoints";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { NavBar } from "./components/NavBar";
import { Register } from "./pages/Register";
import Profile from "./pages/Profile";
import { UserContext } from "./components/UserContext";
import FireBaseSignup from "./components/FireBaseSignup";
import FireBaseLogin from "./components/FireBaseLogin";
import ErrorPage from "./pages/ErrorPage";




function App() {
  return (
    
      <div className="App">
        <NavBar />

        <Routes>
          <Route exact path="/" element={<App />} />
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="form" element={<MuiBreakPoints />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="signup" element={<FireBaseSignup />} />
          <Route path="login" element={<FireBaseLogin />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>

        {/* <MuiTextField/> */}
      </div>
     
  );
}

export default App;
