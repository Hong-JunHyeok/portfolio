import { Pages } from "pages"
import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
    return (
        <Router>
            <Route exact path="/">
                <Pages.StartPage />
            </Route>
            <Route exact path="/:category">
                <Pages.MainPage />
            </Route>
        </Router>
    )
}

export default App
