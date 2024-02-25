import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";
import { useAuth } from "../hooks/use-auth.js";

function NavBar() { 
   const {auth, setAuth} = useAuth();
   const handleLogout = () => {
   window.localStorage.removeItem("token");
   setAuth({ token: null });
   };
  console.log(auth)

  return (
<div> <nav>
        <Link to="/">Home</Link>
            {auth.token ? (
              <div>
                <Link to="/user">Account</Link>
                <Link to="/" onClick={handleLogout}> Log Out</Link>
            </div>
            ) : (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
            )}
            
       
      </nav>
      <Outlet />
    </div>
); }

export default NavBar;
