import React from "react";
import "./landingPage.css";
import { Breadcrumb, Button, Select, Image } from "antd";
import { homeIcon } from "../../assets";

const LandingPage = () => {
  return (
    <div className="admin-products-main-container">
      <Breadcrumb separator=">" className="bread-crumb">
        <div className="configure-server-home-icon">
          <img src={homeIcon} alt="home-icon" />
        </div>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Landing page</Breadcrumb.Item>
      </Breadcrumb>
      <div className="dynamic-card-main-container">
        <div className="dynamic-card"></div>
      </div>
    </div>
  );
};

export default LandingPage;
