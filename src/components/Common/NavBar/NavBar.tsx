import React from "react"
import "./NavBar.scss"
import { AiFillFacebook, AiFillInstagram, AiFillGithub } from "react-icons/ai"
import { FaBlog } from "react-icons/fa"
import { Link, NavLink } from "react-router-dom"

interface propsType {
    isMain?: boolean
}
const NavBar = ({ isMain }: propsType) => {
    return (
        <div className="NavBar">
            <li className="NavBar_links">
                <AiFillGithub
                    className="NavBar_links_icon"
                    size={30}
                    onClick={() => {
                        window.open("https://github.com/Hong-JunHyeok", "_blank")
                    }}
                />
                <AiFillFacebook
                    className="NavBar_links_icon facebook"
                    size={30}
                    onClick={() => {
                        window.open("https://www.facebook.com/programmingHong/", "_blank")
                    }}
                />
                <FaBlog
                    className="NavBar_links_icon blog"
                    size={30}
                    onClick={() => {
                        window.open("https://hong-jh.tistory.com/", "_blank")
                    }}
                />
                <AiFillInstagram className="NavBar_links_icon instagram" size={30} />
            </li>
            {isMain && (
                <ul className="NavBar_navigator">
                    <li>
                        <NavLink
                            className="link"
                            to="/home"
                            activeStyle={{
                                backgroundColor: "black",
                            }}
                        >
                            홈
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="link"
                            to="/projects"
                            activeStyle={{
                                backgroundColor: "black",
                            }}
                        >
                            프로젝트
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="link"
                            to="/history"
                            activeStyle={{
                                backgroundColor: "black",
                            }}
                        >
                            경력
                        </NavLink>
                    </li>
                </ul>
            )}
        </div>
    )
}

export default NavBar
