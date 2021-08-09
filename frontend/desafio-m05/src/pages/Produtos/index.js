import React from "react";
import "./style.css";
import bannerImage from "../../assets/bg-pizzaria.png";
import profileImage from "../../assets/pizzaria.png";
function Produtos() {
  return (
    <div className="Produtos">
      <div
        className="banner"
        style={{
          background:
            `linear-gradient(205.02deg, rgba(18, 18, 18, 0.2) 36.52%, rgba(18, 18, 18, 0.8) 77.14%), url(${bannerImage})`,
        }}
      >
        <img src={profileImage} alt="" className="profileImage"/>
        <button className="logout">Logout</button>
      </div>
      <div className="produtos">
        
      </div>
    </div>
  );
}
export default Produtos;
