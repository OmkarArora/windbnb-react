import "./numberInput.css";
import { GrSubtract, GrAdd } from "react-icons/gr";

const NumberInput = ({setValue, inputValue}) => {
    return(
        <div className="container-numberInput">
            <button className="btn-numberInput" onClick={() => {if(inputValue>0)
                setValue(inputValue-1)}}>
                <GrSubtract className="icon"/>
            </button>
            <div className="value">{inputValue}</div>
            <button className="btn-numberInput" onClick={() => setValue(inputValue+1)}>
                <GrAdd className="icon"/>
            </button>
        </div>
    )
}

export default NumberInput;