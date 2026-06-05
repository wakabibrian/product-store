import { Link, useNavigate } from "react-router-dom";
import Navigation from "../../sections/Navigation/Navigation";
import { getUser, updateActiveUser } from "../../utils/LocalStorage";
import "./Login.css";
import { useState } from "react";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleInputchange = (event) => {
    const id = event.target.id;
    const value = event.target.value;

    setData({
      ...data,
      [id]: value,
    });

    // Reset message
    setMessage("");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!data.email || !data.password) {
      setMessage("Please fill all fields");
      setIsSuccess(false);
      return;
    }

    const user = getUser(data.email, data.password);

    if (!user) {
      setMessage("User email or password is not correct");
      setIsSuccess(false);
      return;
    }

    setMessage("Login successful");
    setIsSuccess(true);

    updateActiveUser(user);
    navigate("/products");
  };

  return (
    <>
      <Navigation />
      <section className="section-login">
        <div className="login-container">
          <div className="login-header-section">
            <h2 className="login-header-text">Welcome Back!</h2>
            <p className="login-description-text">
              Login to continue shopping amazing <br /> products.
            </p>
            <img
              src="./assets/login-img.png"
              alt="bag and flower"
              className="login-img"
            />
          </div>
          <div className="login-input-section">
            <form className="login-form" onSubmit={handleFormSubmit}>
              <h3>Login to your account</h3>
              <p
                className={`message ${
                  isSuccess ? "success-class" : "unsuccess-class"
                } ${message ? "show" : ""}`}
              >
                {message || "Placeholder"}
              </p>
              <label for="email">User Email</label>
              <input
                type="email"
                placeholder="Email address"
                id="email"
                className="login-input"
                onChange={handleInputchange}
                value={data.email}
              />

              <label for="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                className="login-input"
                onChange={handleInputchange}
                value={data.password}
              />

              <button type="submit">Log In</button>
              <p>
                Don't have an account?{" "}
                <Link to="/signup" className="signup-link">
                  <span>Sign up</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
