import "./Navigation.css";

function Navigation() {
  return (
    <div className="header">
      <img
        src="./assets/ShopNest-Logo.png"
        alt="ShopNest Logo"
        className="logo"
      />

      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link active" href="#">
              Products
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              Login
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              Signup
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
