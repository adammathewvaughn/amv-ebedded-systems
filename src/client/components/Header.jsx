import React from "react";
import '/src/client/utils/index.css';

//import icon from "./favicon.png";
import "/src/client/utils/Header.css";
import logo from "/src/assets/logo.png";
const Header = () => {
return (
<header className="head">
<img src={logo} className="App-logo" alt="logo" />
</header>

)
}

export default Header;