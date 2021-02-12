import Footer from "components/Common/Footer"
import NavBar from "components/Common/NavBar"
import Main from "components/Main"
import React from "react"
import { useLocation } from "react-router-dom"

function MainPage() {
    const location = useLocation()
    return (
        <>
            <NavBar isMain />
            <Main location={location.pathname} />
            <Footer />
        </>
    )
}

export default MainPage
