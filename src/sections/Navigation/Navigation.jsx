import "./Navigation.css";

function Navigation() {
  return (
    <nav>
      <div className="navigation-container">
        <div className="logo-wrapper">
          <img
            src="./assets/ShopNest-Logo.png"
            alt="ShopNest Logo"
            className="logo"
          />
        </div>

        <ul className="nav-links-wrapper">
          <li className="nav-link-item active">
            <a>Products</a>
          </li>
          <li className="nav-link-item">
            <a>Login</a>
          </li>
          <li className="nav-link-item">
            <a>Signup</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
