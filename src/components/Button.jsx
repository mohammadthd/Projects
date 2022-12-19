import "./Button.css";

const Button =({symbol, color, handleCick})=> {
    return(
<div onClick={() => handleCick(symbol)} className="button-wrapper" style={{backgroundColor: color}}>{symbol}</div>
    );
}

export default Button;