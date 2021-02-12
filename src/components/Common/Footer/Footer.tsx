import React from "react"
import "./Footer.scss"

export default function Footer() {
    const getNowYear = () => {
        return new Date().getFullYear()
    }
    return (
        <div className="Footer">
            <ul className="Footer_myInfos">
                <li className="Footer_myInfos_info phoneNumber">010-5800-4720</li>
                <li className="Footer_myInfos_info email">edb1631@naver.com</li>
            </ul>
            <div className="Footer_copyright">
                Copyrightⓒ{getNowYear()} 이곳의 모든 저작권은 Hong-JunHyeok에게 있습니다.
            </div>
        </div>
    )
}
