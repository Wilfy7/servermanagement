import React, { useState } from "react";
import { loginUser } from "../../service/userService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  // navigate to home page if user is logged in
  const navigate = useNavigate();

  //handle change
  const handleChange = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // handle Submit
  const handleSubmit = (e: any) => {
    e.preventDefault();

    loginUser(input);
    navigate("/");
  };

  return (
    <>
      <div className="resgistration__container">
        <div className="resgistration__content">
          <h2>Login User</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="emailInput">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value={input.email}
                onChange={handleChange}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                value={input.password}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 form-check"></div>
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
