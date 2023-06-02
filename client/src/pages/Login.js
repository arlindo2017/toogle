import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN_USER } from "../utils/mutations";
import validateEmail from "../utils/helpers";

export default function Login() {
  // setting variables for form fields and errors, setting initial values to an empty string
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // setting queries
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // On blur fields validation
  const handleBlur = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      if (!inputValue) {
        setEmailError("* Required field");
      } else if (!validateEmail(email)) {
        setEmailError("* Invalid e-mail address");
      } else {
        setEmailError("");
      }
    }

    if (inputType === "password") {
      if (!inputValue) {
        setPasswordError("* Required field");
      } else {
        setPasswordError("");
      }
    }
  };

  // On change form handling
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setPassword(inputValue);
    }
  };

  // Form submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Check to see if user entered valid e-mail address
    if (!validateEmail(email)) {
      setErrorMessage("Please enter valid e-mail address");
      document.getElementById("email").focus();
      return;
    }

    // Check to see if user entered password
    if (!password) {
      setErrorMessage("Password field cannot be empty");
      document.getElementById("password").focus();
      return;
    }

    // Reset input fields
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <section className="py-16">
        <h3 className="text-5xl font-bold text-center mb-5">Log in</h3>
        <form className="w-full max-w-lg mx-auto py-4">
          {/* e-mail input and validation */}
          <div className="flex flex-col">
            <label className="block font-bold mb-1 pr-4" htmlFor="email">
              Email Address
            </label>
            <input
              className="input input-bordered w-full max-w-lg"
              name="email"
              id="email"
              onChange={handleInputChange}
              onBlur={handleBlur}
              value={email}
              type="text"
              placeholder="Email Address"
            />
          </div>
          {/* check for missing email */}
          <div className="md:flex md:items-center py-1">
            <div>
              <p className="text-red-600 text-sm">{emailError}</p>
            </div>
          </div>
          {/* password input */}
          <div className="flex flex-col">
            <label className="block font-bold mb-1 pr-4" htmlFor="password">
              Password
            </label>
            <input
              className="input input-bordered  w-full max-w-lg"
              name="password"
              id="password"
              onChange={handleInputChange}
              onBlur={handleBlur}
              value={password}
              type="text"
              placeholder="Password"
            />
          </div>
          {/* check for missing password */}
          <div className="md:flex md:items-center py-1">
            <div>
              <p className="text-red-600 text-sm">{passwordError}</p>
            </div>
          </div>
          {/* form submit */}
          <button
            // className="shadow btn hover:opacity-90 transition-all duration-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            className="btn btn-accent w-full my-4"
            type="button"
            onClick={handleFormSubmit}
          >
            Log in
          </button>
          {errorMessage && (
            <div className="md:flex md:items-center">
              <div>
                <p className="text-red-600 mt-3">{errorMessage}</p>
              </div>
            </div>
          )}
          <hr className="my-4"></hr>
          <p className="text-center block font-bold mb-1 pr-4">
            Not a member yet?
          </p>
          <Link to="/signup" className="btn btn-outline btn-accent w-full my-4">
            Create an account
          </Link>
        </form>
      </section>
    </>
  );
}
