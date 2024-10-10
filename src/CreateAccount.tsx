import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const CreateAccount: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUserName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [region, setRegion] = useState<string>("");

  const handleCreateAccount = () => {
    console.log(
      "Account created with:",
      email,
      password,
      username,
      age,
      region
    );
    navigate("/account-information");
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
            <h6 className="card-title mb-7">
              Create an account to get started.
            </h6>

            <form>
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
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="age" className="form-label">
                  Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="regionSelect" className="form-label">
                  Choose your region:
                </label>
                <select
                  id="regionSelect"
                  name="region"
                  className="form-select mb-3">
                  <option value="NA">North America</option>
                  <option value="EUW">Europe West</option>
                  <option value="EUNE">Europe Nordic & East</option>
                  <option value="OCE">Oceania</option>
                  <option value="RU">Russia</option>
                  <option value="TR">Turkey</option>
                  <option value="BR">Brazil</option>
                  <option value="LAN">Latin America North</option>
                  <option value="LAS">Latin America South</option>
                  <option value="JP">Japan</option>
                  <option value="TW">Taiwan</option>
                  <option value="SGMYID">Singapore, Malaysia, Indonesia</option>
                  <option value="TH">Thailand</option>
                  <option value="PH">Philippines</option>
                  <option value="ME">Middle East</option>
                </select>
                <button
                  onClick={handleCreateAccount}
                  className="btn btn-primary w-100 mb-3">
                  Let's go
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
