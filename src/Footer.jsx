import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/'
import "./Footer.css"
import { faDiscord, faGithub, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

const i = <FontAwesomeIcon icon={faDiscord} />
const j = <FontAwesomeIcon icon={faTwitterSquare} />
const k = <FontAwesomeIcon icon={faGithub} />
let year = new Date().getFullYear();
const Footer = () => {
return (
    <footer className="adam-foot">
    <p>
        Made With <a className="IBLove" href="https://innovatebham.com" target="_blank" rel="noopener noreferrer">Love</a> by<a href="https://www.linkedin.com/in/adam-m-vaughn/" target="_blank" rel="noopener noreferrer"><span className="brandName">Adam Mathew Vaughn</span></a>Embedded Systems | Birmingham, AL &copy; {year}
    </p>
    &nbsp;
    <span className="footer-icons"><a href="https://github.com/adammathewvaughn" target="_blank" rel="noopener noreferrer"> <i className="fas fa-github">{k}</i></a> <a href="https://twitter.com/adammathewv" target="_blank" rel="noopener noreferrer"> <i className="fas fa-twittersquare">{j}</i></a> <a href="https://discord.gg/QDX6SpZe" target="_blank" rel="noopener noreferrer"> <i className="fas fa-discord">{i}</i></a></span>
    </footer>
)
};

export default Footer;
