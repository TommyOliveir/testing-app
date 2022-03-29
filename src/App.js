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

function App() {
  return (
    <div className="App">
        <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
     
      <Route path="form" element={<MuiBreakPoints />}>
      </Route>
      <Route path="register" element={<Register />}/>
    </Routes>
   
    {/* <MuiTextField/> */}

    </div>
  );
}

export default App;
