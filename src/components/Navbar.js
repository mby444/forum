import { Link } from "react-router-dom";
import "../styles/Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <Link to="/">
        <h1>Forum Random</h1>
      </Link>
    </div>
  );
}