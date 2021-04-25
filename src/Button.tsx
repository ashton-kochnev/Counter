import React from "react";

type ButtonType = {
    className: string
    onClick: () => void
    title: string
}

function Button(props: ButtonType) {
    return (
        <input
            className={props.className}
            onClick={props.onClick}
            type="button"
            value={props.title}/>
    )
}

export default Button