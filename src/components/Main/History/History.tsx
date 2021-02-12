import React from "react"
import histories from "data/histories.json"
import "./History.scss"
import HistoryItem from "./HistoryItem"
import { HistoryType } from "types/HistoryType"

export default function History() {
    const mapHistorys = histories.map((element: HistoryType, index) => (
        <HistoryItem key={index} background={element.background}>
            {element.history}
        </HistoryItem>
    ))
    return <ul className="histories">{mapHistorys}</ul>
}
