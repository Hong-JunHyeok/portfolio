import React, { useEffect } from "react"
import "./Main.scss"
import Home from "./Home"
import Projects from "./Projects"
import History from "./History"

interface propsType {
    location: string
}

function Main({ location }: propsType) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="MainPage">
            {location === "/home" ? (
                <>
                    <Home />
                </>
            ) : location === "/projects" ? (
                <>
                    <Projects />
                </>
            ) : location === "/history" ? (
                <>
                    <History />
                </>
            ) : (
                <>잘못된 접근입니다</>
            )}
        </div>
    )
}

export default Main
