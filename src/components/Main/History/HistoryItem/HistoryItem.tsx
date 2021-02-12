import React from "react"
import "./HistoryItem.scss"

interface PropsType {
    children: React.ReactNode
    background: string
}

export default function HistoryItem({ children, background }: PropsType) {
    return (
        <li
            className="HistoryItem"
            style={{
                backgroundImage: `url(${background})`,
            }}
        >
            {children}
        </li>
    )
}
