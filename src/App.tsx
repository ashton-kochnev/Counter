import React, {useState} from 'react';
import './App.css';
import Count from "./Count";
import Buttons from "./Buttons";

function App() {
    const [number, setNumber] = useState<number>(0)

    return (
        <div className="wrapper">
            <Count number={number}/>
            <Buttons
                number={number}
                setNumber={setNumber}/>
        </div>
    );
}

export default App;