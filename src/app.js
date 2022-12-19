import { useState } from "react";
import "./app.css";
import Button from "./components/Button"
import Input from "./components/Input"
import * as math from "mathjs";

function App() {
    const [text, settext] = useState ("");
    const [result, setresult] = useState ("");

    const addtoText = (val) => {
        settext((text) => [...text, val + ""])
    };

    const resetInput = () => {
        settext("")
        setresult("")
    };

    const calculateResult= () =>{
        const input = text.join("")
        setresult(math.evaluate(input));
    };
    const buttoncolor="#f2a33c"

    return (
        <div className="app">
            <div className="calc-wrapper">
                <Input text={text} result={result}/>
                <div className="row">
                <Button symbol="7" handleCick={addtoText}/>
                <Button symbol="8" handleCick={addtoText}/>
                <Button symbol="9" handleCick={addtoText}/>
                <Button symbol="/" color={buttoncolor} handleCick={addtoText}/>
                </div>
                <div className="row">
                <Button symbol="4" handleCick={addtoText}/>
                <Button symbol="5" handleCick={addtoText}/>
                <Button symbol="6" handleCick={addtoText}/>
                <Button symbol="." color={buttoncolor} handleCick={addtoText}/>
                </div>
                <div className="row">
                <Button symbol="1" handleCick={addtoText}/>
                <Button symbol="2" handleCick={addtoText}/>
                <Button symbol="3" handleCick={addtoText}/>
                <Button symbol="+" color={buttoncolor} handleCick={addtoText}/>
                </div>
                <div className="row">
                <Button symbol="0" handleCick={addtoText}/>
                <Button symbol="." handleCick={addtoText}/>
                <Button symbol="=" handleCick={calculateResult}/>
                <Button symbol="-" color={buttoncolor} handleCick={addtoText}/>
                </div>
                <Button symbol="Clear" color="red" handleCick={resetInput}/>
            </div>
        </div>
    );
}


export default App;