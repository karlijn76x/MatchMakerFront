import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <div className="icon">🏠</div>
        <div className="icon">✉️</div>
        <div className="icon">👤</div>
      </div>
    </div>
  );
};

export default Header;
