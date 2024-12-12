import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import { getChampions } from "../API/ApiServiceChampions";
import { getRoles } from "../API/ApiServiceRole";
import { getLanes } from "../API/ApiServiceLane";
import { Champion } from "../Interfaces/ChampionInterface";
import { Role } from "../Interfaces/RoleInterface";
import { Lane } from "../Interfaces/LaneInterface";
import { CompleteUserAccount } from "../API/ApiServiceAccount";

const AccountInformation: React.FC = () => {
  const navigate = useNavigate();
  const { userId } = useParams<{ userId: string }>();

  const [champions, setChampions] = useState<Champion[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [lanes, setLanes] = useState<Lane[]>([]);

  const [bio, setBio] = useState("");
  const [summonerName, setSummonerName] = useState("");
  const [selectedChampion, setSelectedChampion] = useState<number | null>(null);
  const [selectedRole, setSelectedRole] = useState<number | null>(null);
  const [selectedLane, setSelectedLane] = useState<number | null>(null);

  useEffect(() => {
    if (selectedChampion !== null) {
      console.log("Selected champion:", selectedChampion);
    }
  }, [selectedChampion]);

  useEffect(() => {
    if (selectedRole !== null) {
      console.log("Selected role:", selectedRole);
    }
  }, [selectedRole]);

  useEffect(() => {
    if (selectedLane !== null) {
      console.log("Selected lane:", selectedLane);
    }
  }, [selectedLane]);

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

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const data = await getRoles();
        setRoles(data);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };

    fetchRoles();
  }, []);

  useEffect(() => {
    const fetchLanes = async () => {
      try {
        const data = await getLanes();
        setLanes(data);
      } catch (error) {
        console.error("Error fetching lanes:", error);
      }
    };

    fetchLanes();
  }, []);

  const handleAccountCreated = async () => {
    console.log("User ID:", userId);

    if (!userId) {
      console.error("User ID is not defined.");
      return;
    }

    if (!selectedChampion || !selectedRole || !selectedLane) {
      console.error("All fields must be selected.");
      return;
    }

    const userData = {
      id: userId,
      bio: bio,
      summonerName: summonerName,
      preferences: [
        {
          roleId: selectedRole,
          laneId: selectedLane,
          championId: selectedChampion,
        },
      ],
    };

    try {
      const response = await CompleteUserAccount(userData);
      console.log("Account created successfully:", response);
      navigate(`/swipemenu/${userId}`);
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
              src="/src/img/LogoMM.jpg"
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
                rows={3}
                value={bio}
                onChange={(e) => setBio(e.target.value)}></textarea>
              <h6 className="mt-3">Add your favorite lane</h6>
              <select
                className="form-control"
                value={selectedLane || ""}
                onChange={(e) => setSelectedLane(Number(e.target.value))}>
                <option value="" disabled>
                  Select a lane
                </option>
                {lanes.map((lane) => (
                  <option key={lane.id} value={lane.id}>
                    {lane.name}
                  </option>
                ))}
              </select>

              <h6 className="mt-3">Add your favorite role</h6>
              <select
                className="form-control"
                value={selectedRole || ""}
                onChange={(e) => setSelectedRole(Number(e.target.value))}>
                <option value="" disabled>
                  Select a role
                </option>
                {roles.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.name}
                  </option>
                ))}
              </select>
              <h6 className="mt-3">Add your favorite champion</h6>
              <select
                className="form-control"
                value={selectedChampion || ""}
                onChange={(e) => setSelectedChampion(Number(e.target.value))}>
                <option value="" disabled>
                  Select a champion
                </option>
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
                value={summonerName}
                onChange={(e) => setSummonerName(e.target.value)}
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
