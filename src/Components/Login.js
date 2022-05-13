import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "../userActions";
import "./login.css";

function Login() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userLogin;

  const [detail, setDetail] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setDetail({ ...detail, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(detail.email, detail.password));
  };
  return (
    <div className="container1">
      <header>Login</header>
      <form onSubmit={handleSubmit}>
        <div className="form first">
          <div className="details personal">
            <div className="fields">
              <div class="input-fields">
                <label for="">Email Id</label>
                <input
                  type="email"
                  id="email"
                  value={detail.email}
                  onChange={handleChange}
                  placeholder="Enter Email Id"
                  required
                />
              </div>

              <div class="input-fields">
                <label for="">Password </label>
                <input
                  type="password"
                  id="password"
                  value={detail.password}
                  onChange={handleChange}
                  placeholder="Enter Your Password"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="btn">
          <button className="nextbtn" type="submit">
            <span className="btnText">Submit</span>
            <i className="uil uil-navigator"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
