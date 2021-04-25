import React from "react";
import Button from "./Button";

type clickType = {
    number: number
    setNumber: (number: number) => void
}

function Buttons(props: clickType) {

    const ClickButton = () => {
        props.setNumber(props.number + 1)
    }

    const ResetButton = () => {
        props.setNumber(0)
    }

    return <div className="buttons">
        <Button
            className={props.number === 5 ? 'disabled increment' : "increment"}
            onClick={ClickButton}
            title={'inc'}/>
        <Button
            className={props.number === 0 ? 'disabled reset' : "reset"}
            onClick={ResetButton}
            title={'reset'}/>
    </div>
}

export default Buttons;