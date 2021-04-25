import React from "react";

type countType = {
    number: number
}

function Count(props: countType) {
    return <div className='counter'>
        <span className={props.number === 5 ? 'red' : ""}> {props.number}</span>
    </div>
}

export default Count