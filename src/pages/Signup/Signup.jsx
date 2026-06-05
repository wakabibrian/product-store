import Navigation from "../../sections/Navigation/Navigation";
import "./Signup.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { addNewUser, checkIfUserExists } from "../../utils/LocalStorage";

function Signup() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Function to handle Change of the input fields based on a particular id
  // id should be a computable value to the field
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

    // Do not submit the form if any of the fields are empty. Show a message to fill all the fields
    if (
      data.firstName === "" ||
      data.lastName === "" ||
      data.phoneNumber === "" ||
      data.email === "" ||
      data.password === "" ||
      data.confirmPassword === ""
    ) {
      setMessage("Please fill all the fields");
      setIsSuccess(false);
      return;
    }

    // Check if confirm password and password match
    if (data.password !== data.confirmPassword) {
      setMessage("Passwords Do Not Match");
      setIsSuccess(false);
      return;
    }

    if (checkIfUserExists(data.email) === true) {
      setMessage("User already exists");
      setIsSuccess(false);
      return;
    }

    // save new user
    addNewUser(data);
    setMessage("User created. Click Login");
    setIsSuccess(true);

    // Reset the input fields
    setData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <>
      <Navigation />
      <section className="section-signup">
        <div className="signup-container">
          <div className="signup-header-section">
            <h2 className="signup-header-text">Create Account</h2>
            <p className="signup-description-text">
              Signup and start shopping the best <br /> products.
            </p>
            <img
              src="./assets/signup-img.png"
              alt="bag and flower"
              className="signup-img"
            />
          </div>
          <div className="signup-input-section">
            <form className="signup-form" onSubmit={handleFormSubmit}>
              <h3>Create your account</h3>

              <p
                className={`message ${
                  isSuccess ? "success-class" : "unsuccess-class"
                } ${message ? "show" : ""}`}
              >
                {message || "Placeholder"}
              </p>

              {/* 1. Get innitial values for the input fields using the useState hook */}
              {/* 2. Update the input values as we type/change the input fields */}

              <div className="signup-items">
                <div className="sign-up-item">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    id="firstName"
                    className="signup-input"
                    onChange={handleInputchange}
                    value={data.firstName}
                  />
                </div>

                <div className="sign-up-item">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    id="lastName"
                    className="signup-input"
                    onChange={handleInputchange}
                    value={data.lastName}
                  />
                </div>

                <div className="sign-up-item">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    id="phoneNumber"
                    className="signup-input"
                    onChange={handleInputchange}
                    value={data.phoneNumber}
                  />
                </div>

                <div className="sign-up-item">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    id="email"
                    className="signup-input"
                    onChange={handleInputchange}
                    value={data.email}
                  />
                </div>

                <div className="sign-up-item">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    className="signup-input"
                    value={data.password}
                    onChange={handleInputchange}
                  />
                </div>

                <div className="sign-up-item">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    id="confirmPassword"
                    className="signup-input"
                    value={data.confirmPassword}
                    onChange={handleInputchange}
                  />
                </div>
              </div>

              <button type="submit">Sign Up</button>
              <p>
                Already have an account?{" "}
                <Link to="/login" className="login-link">
                  <span>Log in</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
