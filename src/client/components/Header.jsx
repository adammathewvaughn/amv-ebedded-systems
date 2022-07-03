import React from "react";
import logo from './src/assets/logo.png';
//import icon from "./favicon.png";
import "./src/client/utils/Header.css";

const Header = () => {
return (
<header className="head">
<img src={logo} className="App-logo" alt="logo" />
</header>

)
}

export default Header;