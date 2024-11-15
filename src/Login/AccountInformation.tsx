import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getChampions } from "../API/ApiServiceChampions";

interface Champion {
  id: number;
  name: string;
}

const AccountInformation: React.FC = () => {
  const navigate = useNavigate();
  const [champions, setChampions] = React.useState<Champion[]>([]);
  const { userId } = useParams<{ userId: string }>();

  useEffect(() => {
    const fetchChampions = async () => {
      try {
        const data = await getChampions();
        setChampions(data);
      } catch (error) {
        console.error("Error fetching champions:", error);
      }
    };

    fetchChampions();
  }, []);

  const handleAccountCreated = () => {
    console.log("User ID: ", userId);
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
            <h5>
              Before we can start, we need a little bit more information about
              you!
            </h5>
            <form>
              <h6>Add a bio</h6>
              <textarea
                className="form-control"
                id="bio"
                placeholder="Tell us something about yourself"
                rows={3}></textarea>
              <h6 className="mt-3">Add a profile picture</h6>
              <input
                type="file"
                className="form-control"
                id="profilePicture"
                accept="image/*"
              />
              <h6 className="mt-3">Add your favorite role</h6>
              <select className="form-select" id="role">
                <option value="1">Top</option>
                <option value="2">Jungle</option>
                <option value="3">Mid</option>
                <option value="4">ADC</option>
                <option value="5">Support</option>
              </select>
              <h6 className="mt-3">Add your favorite champion</h6>
              <select>
                {champions.map((champion) => (
                  <option key={champion.id} value={champion.id}>
                    {champion.name}
                  </option>
                ))}
              </select>
              <h6 className="mt-3">What is your summonername?</h6>
              <input
                type="text"
                className="form-control"
                id="summonername"
                placeholder="Summonername"
              />
            </form>
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
