import React from "react";
import { faRaspberryPi } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/'
import { Nav } from "react-bootstrap";
const i = <FontAwesomeIcon icon={faRaspberryPi} />
const Navbar = () => {
    return (
        <nav classN="navbar navbar-expand-sm navbar-dark" style="background-color: #e3f2fd;">
            <a classN="navbar-brand" href="#">Navbar</a>
            <button classN="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div classN="collapse navbar-collapse" id="collapsibleNavId">
                <ul classN="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li classN="nav-item active">
                        <a classN="nav-link" href="#">Home <span classN="sr-only">(current)</span></a>
                    </li>
                    <li classN="nav-item">
                        <a classN="nav-link" href="#">Link</a>
                    </li>
                    <li classN="nav-item dropdown">
                        <a classN="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div classN="dropdown-menu" aria-labelledby="dropdownId">
                            <a classN="dropdown-item" href="#">Action 1</a>
                            <a classN="dropdown-item" href="#">Action 2</a>
                        </div>
                    </li>
                </ul>
                <form classN="form-inline my-2 my-lg-0">
                    <input classN="form-control mr-sm-2" type="text" placeholder="Search"/>
                    <button classN="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )

}

export default Navbar;