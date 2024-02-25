import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";

function NavBar() { 
 

  return (
<div> <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Log In</Link>
        <Link to="/user">Account</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
      <Outlet />
    </div>
); }

export default NavBar;
