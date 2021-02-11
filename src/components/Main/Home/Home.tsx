import React from "react"
import "./Home.scss"
import profile from "assets/images/intro_1.jpeg"
import { FiFacebook } from "react-icons/fi"

export default function Home() {
    const onClickTistory = () => {
        window.open("https://hong-jh.tistory.com/", "_blank")
    }
    const onClickGithub = () => {
        window.open("https://github.com/Hong-JunHyeok", "_blank")
    }
    const onClickFacebook = () => {
        window.open("https://www.facebook.com/programmingHong/", "_blank")
    }
    return (
        <div className="Home">
            <div className="Home_intro">
                <img src={profile} alt="프로필" />
                <h1 className="Home_intro_title">안녕하세요👋</h1>
            </div>
            <div className="Home_tistoryAndGithub">
                <div className="Home_tistory" onClick={onClickTistory}>
                    <h1 className="Home_tistory_title">나의 이야기를 들려드리죠.</h1>
                </div>
                <div className="Home_github" onClick={onClickGithub}>
                    <h1 className="Home_github_title">저의 기술을 톺아보세요!</h1>
                </div>
            </div>
            <div className="Home_facebook" onClick={onClickFacebook}>
                <FiFacebook
                    size={50}
                    style={{
                        background: "#f2f2f2",
                        padding: "1rem",
                        borderRadius: "70%",
                        color: "#1c7ed6",
                    }}
                />
                <h1 className="Home_facebook_title">저의 일상을 페이스북에 담았습니다!</h1>
            </div>
        </div>
    )
}
