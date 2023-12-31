import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
} from "react-router-dom";
import {Routes} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Register />}/>   {/*new syntax for [components] inside route*/}
        
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/>   {/*new syntax for [components] inside route*/}
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />}/>   {/*new syntax for [components] inside route*/}
        
        
        <Route path="/profile/:username" element={<Profile />}/>
          
        
      </Routes>
    </Router>
  );
}

export default App;
