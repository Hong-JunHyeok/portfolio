import React, { ButtonHTMLAttributes } from "react"
import "./Button.scss"

interface propsType {
    text: string
    customStyle?: Object
    buttonColor?: "red" | "blue" | "black"
    textColor?: "white" | "black"
}

const Button = ({ text, customStyle, onClick }) => {
    return (
        <div className="Button" style={customStyle} onClick={onClick}>
            {text}
        </div>
    )
}

Button.defaultProps = {
    text: "Button Text",
}

export default Button
