import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { createUserAccount } from "../API/ApiServiceAccount";

const CreateAccount: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [passwordHash, setPassword] = useState<string>("");
  const [username, setUserName] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [rank, setRank] = useState<string>(""); // Added state for rank

  const regions = [
    { value: "NA", label: "North America" },
    { value: "EUW", label: "Europe West" },
    { value: "EUNE", label: "Europe Nordic & East" },
    { value: "OCE", label: "Oceania" },
    { value: "RU", label: "Russia" },
    { value: "TR", label: "Turkey" },
    { value: "BR", label: "Brazil" },
    { value: "LAN", label: "Latin America North" },
    { value: "LAS", label: "Latin America South" },
    { value: "JP", label: "Japan" },
    { value: "TW", label: "Taiwan" },
    { value: "SGMYID", label: "Singapore, Malaysia, Indonesia" },
    { value: "TH", label: "Thailand" },
    { value: "PH", label: "Philippines" },
    { value: "ME", label: "Middle East" },
  ];

  const ranks = [
    // Corrected rank list variable name
    { value: "IRON", label: "Iron" },
    { value: "BRONZE", label: "Bronze" },
    { value: "SILVER", label: "Silver" },
    { value: "GOLD", label: "Gold" },
    { value: "PLATINUM", label: "Platinum" },
    { value: "DIAMOND", label: "Diamond" },
    { value: "MASTER", label: "Master" },
    { value: "GRANDMASTER", label: "Grandmaster" },
    { value: "CHALLENGER", label: "Challenger" },
  ];

  const handleCreateAccount = async (event: React.FormEvent) => {
    event.preventDefault();
    const userData = {
      email,
      passwordHash,
      username,
      region,
      rank, // Make sure rank is included
      summonerName: "",
      imageName: "",
    };
    try {
      const result = await createUserAccount(userData);
      console.log("Account created with:", result);
      navigate(`/account-information/${result.id}`);
    } catch (error) {
      console.error("Error creating account:", error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="card shadow" style={{ width: "400px" }}>
        <div className="card-body">
          <div className="text-center">
            <img
              src="/img/LogoMM.jpg" // Adjusted the path for static files
              alt="MatchMaker Logo"
              style={{ width: "100px", marginBottom: "20px" }}
            />
            <h4 className="card-title mb-4">Welcome to MatchMaker!</h4>
            <h6 className="card-title mb-7">
              Create an account to get started.
            </h6>

            <form onSubmit={handleCreateAccount}>
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
                  id="passwordHash"
                  value={passwordHash}
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
                <label htmlFor="regionSelect" className="form-label">
                  Choose your region:
                </label>
                <select
                  id="regionSelect"
                  name="region"
                  className="form-select mb-3"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  required>
                  {regions.map((region) => (
                    <option key={region.value} value={region.value}>
                      {region.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="rankSelect" className="form-label">
                  Choose your rank:
                </label>
                <select
                  id="rankSelect"
                  name="rank"
                  className="form-select mb-3"
                  value={rank} // Corrected value binding
                  onChange={(e) => setRank(e.target.value)} // Corrected handler
                  required>
                  {ranks.map((rank) => (
                    <option key={rank.value} value={rank.value}>
                      {rank.label}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-3">
                Let's go
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
