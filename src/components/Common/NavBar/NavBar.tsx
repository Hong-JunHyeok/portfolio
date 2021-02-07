import React from "react"
import "./NavBar.scss"
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai"
import { FaBlog } from "react-icons/fa"

const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="NavBar_logo"></div>
            <li className="NavBar_links">
                <AiFillFacebook className="NavBar_links_icon facebook" size={30} />
                <FaBlog className="NavBar_links_icon blog" size={30} />
                <AiFillInstagram className="NavBar_links_icon instagram" size={30} />
            </li>
        </div>
    )
}

export default NavBar
