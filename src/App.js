import { Route, Routes, Link } from "react-router-dom"
import './App.css';
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import NotFound from "./pages/NotFound";

function App() {
  return( 
  <>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/logout">Logout</Link>
      </li>
    </ul>
  </nav>
  <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/logout" element={<Logout/>} />
    <Route path="*" element={<NotFound/>} />
  </Routes>
  </>
  )
}

export default App;
