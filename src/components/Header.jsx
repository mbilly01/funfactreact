import React from "react";
import logo from "../logo.svg";

const Header = () => {
  return (
    <header>
      <section className="logo">
        <img src={logo} alt="" />
        <h2>React Facts</h2>
      </section>
      <p>Project 1 - Learn React.Js</p>
    </header>
  );
}

export default Header;