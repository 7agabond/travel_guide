import React from "react"
import NavLogo from "./images/dlf.pt-view-icon-png-1566250.png"

export default function Nav() {
    return(
        <nav className="nav--container">
            <img src={NavLogo} className="nav--img" />
            <h1 className="nav--text">my travel bucket list.</h1>
        </nav>
    )
}