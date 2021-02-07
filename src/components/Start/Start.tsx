import React from "react"
import "./Start.scss"
import Button from "../Common/Button"

const Start = () => {
    return (
        <div className="Start">
            <div className="Start_sloganDiv">
                <h1>
                    <br />
                    좋은 사용자 경험이
                    <br />
                    좋은 웹사이트가 된다고 생각하는
                    <br />
                    개발자 <span className="Start_sloganDiv_name">홍준혁</span>입니다
                    <br />
                </h1>
            </div>
            <div className="Start_getStartDiv">
                <Button text="시작하기" />
            </div>
        </div>
    )
}

export default Start
