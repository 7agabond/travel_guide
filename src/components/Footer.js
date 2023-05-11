import React from "react"
import GitLogo from "./images/25231.png"
import LinkedInLogo from "./images/174857.png"

export default function Footer() {
    return(
        <footer className="footer">
            <div></div><a href="https://github.com/7agabond" target="_blank"><img src={GitLogo} className="footer--gitimg"/></a>
            <a href="https://www.linkedin.com/in/andres-garza-bb6966233/" target="_blank"><img src={LinkedInLogo} className="footer--linkedinimg"/></a>
            <small className="footer--text">© 2023 Garza development. All rights reserved.</small>
        </footer>
    )
}