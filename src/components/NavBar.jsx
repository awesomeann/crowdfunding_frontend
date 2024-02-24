import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";

function NavBar() { return (
<div> <nav>
        <Link to="/">Home</Link>
        <Link to="/project">Projects</Link>
      </nav>
      <Outlet />
    </div>
); }

export default NavBar;
