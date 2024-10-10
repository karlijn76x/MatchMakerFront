import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginScreen.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Inloggen met:", email, password);
  };

  return (
    <div className="container-fluid">
      <div className="card shadow" style={{ width: "400px" }}>
        <div className="card-body">
          <div className="text-center">
            <img
              src="./src/img/LogoMM.jpg"
              alt="MatchMaker Logo"
              style={{ width: "100px", marginBottom: "20px" }}
            />
            <h4 className="card-title mb-4">Welcome to MatchMaker!</h4>
            <h6 className="card-title mb-7">Login to get started.</h6>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="example@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 text-end">
              <a href="#" className="text-muted">
                Forgot password?
              </a>
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-3">
              Log in
            </button>
            <div className="text-center">
              <span className="text-muted">
                No account yet? Let's create one!
              </span>
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-3">
              Create account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
