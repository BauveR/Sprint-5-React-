import { useState } from "react";

const Counter= () => {

    const [number, setNumber ] = useState(0);

 
    const sumar = () => {
        setNumber(number + 1);

    }
    const restar = () => {
        setNumber(number - 1);
    }

    return(
        <div>
            <h2>
                {number}
            </h2>
            <button onClick={sumar}>sumar</button>
            <button onClick={restar}>restar</button>
        </div>
    )
};

export default Counter;