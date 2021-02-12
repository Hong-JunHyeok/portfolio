import React, { useState } from "react"
import histories from "data/histories.json"
import "./History.scss"
import HistoryItem from "./HistoryItem"
import { HistoryType } from "types/HistoryType"
import Button from "components/Common/Button"
import scrollTop from "util/scrollTop"

export default function History() {
    const mapHistorys = histories.map((element: HistoryType, index) => (
        <HistoryItem key={index} background={element.background}>
            {element.history}
        </HistoryItem>
    ))

    return (
        <>
            <ul className="histories">{mapHistorys}</ul>
            <div className="last_history"></div>
        </>
    )
}
