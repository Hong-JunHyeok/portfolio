import React from "react"
import "./Start.scss"
import Button from "../Common/Button"
import NavBar from "components/Common/NavBar"
import { useHistory } from "react-router-dom"

const Start = () => {
    const history = useHistory()
    const onClick = () => {
        history.push("/home")
    }
    return (
        <>
            <div className="Start">
                <div className="Start_sloganDiv">
                    <div className="Start_sloganDiv_slogan">
                        <h1>
                            보기 좋은 웹이 쓰기에도 좋다
                            <br />
                            개발자 <span className="Start_sloganDiv_name">홍준혁</span>입니다
                            <br />
                        </h1>
                    </div>
                </div>
                <div className="Start_getStartDiv">
                    <Button text="시작하기" onClick={onClick} customStyle={{}} />
                </div>
            </div>
        </>
    )
}

export default Start
