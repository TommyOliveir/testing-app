import logo from './logo.svg';
import './App.css';
import MuiFormik from './components/MuiFormik';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MuiBreakPoints from './components/MuiBreakPoints';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { NavBar } from './components/NavBar';
import { Register } from './pages/Register';
import Profile from './pages/Profile';
import {UserContext} from "./components/UserContext"
import FireBaseSignup from './components/FireBaseSignup';
import FireBaseLogin from './components/FireBaseLogin';


const futurename = "Oliveir"

function App() {
  return (
    <UserContext.Provider value={futurename}>
    <div className="App">
        <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
     
      <Route path="form" element={<MuiBreakPoints />}>
      </Route>
      <Route path="register" element={<Register />}/>
      <Route path="profile" element={<Profile />}/>
      <Route path="signup" element={<FireBaseSignup />}/>
      <Route path="login" element={<FireBaseLogin/>}/>
    </Routes>
   
    {/* <MuiTextField/> */}

    </div>
    </UserContext.Provider>
  );
}

export default App;
