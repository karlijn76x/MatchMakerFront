import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlinePaperAirplane } from "react-icons/hi";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/SwipeMenu");
  };

  const handleAccountClick = () => {
    navigate("/account");
  };

  const handleChatClick = () => {
    navigate("/Chat");
  };

  return (
    <div className="container">
      <div className="header">
        <HiOutlineUser onClick={handleAccountClick} className="icon" />{" "}
        <HiOutlineHome onClick={handleHomeClick} className="icon" />
        <HiOutlinePaperAirplane onClick={handleChatClick} className="icon" />
      </div>
    </div>
  );
};

export default Header;
