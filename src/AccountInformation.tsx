import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const AccountInformation: React.FC = () => {
  const navigate = useNavigate();

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;
