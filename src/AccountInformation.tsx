import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const AccountInformation: React.FC = () => {
  const navigate = useNavigate();

  const handleAccountCreated = () => {
    navigate("/");
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
            <button
              onClick={handleAccountCreated}
              className="btn btn-primary w-100 mb-3">
              Let's go
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;
