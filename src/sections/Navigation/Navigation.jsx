import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  useResolvedPath();
  return (
    <div className="header">
      <img
        src="./assets/ShopNest-Logo.png"
        alt="ShopNest Logo"
        className="logo"
      />

      <nav className="main-nav">
        <ul className="main-nav-list">
          <CustomLink to="/products">Products</CustomLink>
          <CustomLink to="/login">Login</CustomLink>
          <CustomLink to="/signup">Signup</CustomLink>
        </ul>
      </nav>
    </div>
  );
}

function CustomLink({ to, children }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li>
      <Link to={to} className={`main-nav-link ${isActive ? "active" : ""}`}>
        {children}
      </Link>
    </li>
  );
}

export default Navigation;
