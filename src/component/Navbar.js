import React, { useState, useEffect } from "react";
import styled from "styled-components";

import DarkMode from "../img/DarkMode.svg";
import LightMode from "../img/LightMode.svg";
import InfoIcon from "../img/Info.svg";
import DarkInfo from "../img/InfoDark.svg";

const Navbar = ({ dark, setDark }) => {
  const [toggle, setToggle] = useState(false);
  const themeHandler = () => {
    setDark(!dark);
    localStorage.setItem("isDark", !dark);
  };

  useEffect(() => {
    if (localStorage.getItem("isDark") === "false") {
      setDark(false);
    }
  }, [setDark]);

  const showInfoHandler = (e) => {
    setToggle(true);
    console.log(localStorage.getItem("isDark"));
  };
  const exitToggle = (e) => {
    if (
      e.target.classList.contains("shadow") ||
      e.target.classList.contains("close")
    ) {
      setToggle(false);
    }
  };

  return (
    <StyledNave>
      <h2>SaveIt</h2>
      <ul>
        <li>
          <img
            src={dark ? LightMode : DarkMode}
            alt="Mode"
            onClick={themeHandler}
          />
        </li>
        <li>
          <img
            src={dark ? DarkInfo : InfoIcon}
            alt="Info"
            onClick={showInfoHandler}
          />
        </li>
      </ul>
      {toggle && (
        <Shadow className="shadow" onClick={exitToggle}>
          <Info>
            <h4>SaveIt v1.0.0</h4>
            <p>An offline-capable Note taking app made with ReactJS.</p>
            <h4>Features</h4>
            <ul>
              <li>
                Offline Capable. Write notes which are then saved to the
                browser's localStorage.
              </li>
              <li>Super lightweight, Loads almost instantly.</li>
              <li>
                Privacy-focused - We'll never collect your precious data. Data
                are stored in your local Storage.
              </li>
              <li>It's open-source!</li>
            </ul>
            <button className="close" onClick={exitToggle}>
              CLOSE
            </button>
          </Info>
        </Shadow>
      )}
    </StyledNave>
  );
};

const StyledNave = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  min-height: 8vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 10rem;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%);
  h2 {
    font-size: 26px;
  }
  img {
    width: 100%;
    height: 1.5rem;
    cursor: pointer;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 5rem;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
    ul {
      justify-content: space-evenly;
    }
    h2 {
      padding: 0 1rem;
      font-size: 25px;
    }
    li {
      padding: 0rem 1rem;
    }
    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;
const Shadow = styled.nav`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
`;
const Info = styled.div`
  width: 20%;
  border-radius: 1rem;
  padding: 2rem;
  background: ${(props) => props.theme.background};
  position: relative;
  margin: 0 auto;
  top: 25%;
  line-height: 18px;
  color: ${(props) => props.theme.color};
  h4 {
    font-size: 1.2rem;
    padding: 10px 0;
  }

  ul {
    display: inline-block;
  }
  li {
    padding: 0;
    padding: 8px 0;
  }
  button {
    cursor: pointer;
    border: none;
    color: #ff5252;
    background: none;
    float: right;
  }
  @media screen and (max-width: 768px) {
    z-index: 999;
    width: 80%;
    top: 10%;
    line-height: 25px;
    button {
      float: right;
    }
  }
`;

export default Navbar;
