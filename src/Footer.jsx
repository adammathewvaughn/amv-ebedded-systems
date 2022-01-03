import React from "react";
import "./Footer.css"

let year = new Date().getFullYear();
const Footer = () => {
return (
    <footer className="adam-foot">
    <p>
        Made With <a className="IBLove" href="https://innovatebham.com" target="_blank" rel="noopener noreferrer">Love</a> by<a href="https://www.linkedin.com/in/adam-m-vaughn/" target="_blank" rel="noopener noreferrer">Adam Mathew Vaughn</a>Embedded Systems | Birmingham, AL &copy; {year}
    </p>
    &nbsp;
    <a href="https://github.com/adammathewvaughn" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://twitter.com/adammathewv" target="_blank" rel="noopener noreferrer">Twitter</a>| <a href="https://discord.gg/QDX6SpZe" target="_blank" rel="noopener noreferrer">Discord</a>
    </footer>
)
};

export default Footer;
