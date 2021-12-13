import { useState } from 'react'
import logo from './logo.png'
import Footer from './Footer';
import './App.css'
import TagManager from 'react-gtm-module'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const i = <FontAwesomeIcon icon={faCoffee} />

const tagManagerArgs = {
  gtmId: 'GTM-MW7CTZK'
}
TagManager.initialize(tagManagerArgs)

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="header">
        <div className=""></div>
        <div className=""></div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body className="App-body">
        <div className="amv-logo">
          <p className="name">Adam Mathew Vaughn</p>
          <hr />
          <p className="brand">Embedded<br />Systems</p>
        </div>
        <h4>—Automating a better tomorrow—</h4>
        <p> &nbsp;&nbsp;I'm Adam M. Vaughn and I'm an Embedded Systems engineer with an emphasis on incorporating Full-Stack Development and REST APIs into microcontrolled systems. 
        My goal as an embedded systems engineer is to combine my recent Full-Stack Web-Development education with my background in construction and my love for 
        hardware.As the juxtaposition of hardware and software has never been more at the forefront of our lives with the prevalence of the IoT and micro-controlled/automated embedded systems via Raspberry Pi and Arduino.
        Embedded systems is the natural arris of the adjacent technological disciplines, and I'm excited to begin my path in the field.
        I'm grateful for the opportunity to contribute to a better world through embedded systems and home automation, and I'm eagerly working to do more every day. 
        I would love to talk to like-minded people, companies, organizations who are interested in achieving similar goals.</p>
          <div className="LinksDiv">
          <a
            className="App-link"
            href="https://www.linkedin.com/in/vaughn-embedded-systems"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let's Connect<i className="fas fa-coffee"> {i}</i>
          </a>
          <a
            className="App-link"
            href="mailto:adam@adammathewvaughn.com"
            target="_blank"
            rel="noopener noreferrer"
          > Email
          </a>
          <a
            className="App-link"
            href="sms:+12052596791"
            target="_blank"
            rel="noopener noreferrer"
          >Text
          </a>
          <a
            className="App-link"
            href="tel:+12052596791"
            target="_blank"
            rel="noopener noreferrer"
          >Call
          </a>
          </div>
          </body>
          <Footer />
          </div>
  )
}

export default App