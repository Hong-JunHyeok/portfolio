import { Pages } from "pages"
import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

const basename = "/portfolio"

function App() {
    return (
        <Router basename={basename}>
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
