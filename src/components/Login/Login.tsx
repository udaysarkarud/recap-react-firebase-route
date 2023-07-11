import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { handleGoogleBtn, setUser } = useContext(AuthContext);
  const newLocation = useNavigate();
  const location = useLocation();

  const handleLoginWithBtn = () => {
    handleGoogleBtn()
      .then((result) => {
        setUser(result.user);
        newLocation(location.state, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-col">
        <h1 className="text-5xl font-bold text-center">Login</h1>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
                <a href="#" className="label-text-alt link link-hover">
                  Login With Google?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button onClick={handleLoginWithBtn} className="btn btn-primary">
                Login with google
              </button>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
