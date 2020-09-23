import React from "react";
import { Link } from "react-router-dom";

// For Basic setup only please change
const NavBar = () => {
  return (
    <div style={styles.navbar}>
      <Link to="/">Home</Link>
      <span style={{ marginRight: "10px" }}></span>
      <Link to="/samplesDemo">Samples</Link>
      <span style={{ marginRight: "10px" }}></span>
      <Link to="/departments">Departments</Link>
      <span style={{ marginRight: "10px" }}></span>
    </div>
  );
};

const styles = {
  navbar: {
    background: "black",
    padding: "10px",
  },
};

export default NavBar;
