import { useState, useEffect } from "react";

const TextH2 = () => {

    const [text, setText] = useState(" ");

    const handdleText = (e) => {
        setText(e.target.value);

    }

    useEffect(() => {

        console.log("El texto montado");

        return () => {
            console.log("El texto ha sido desmontado");
        }
    },[]);

    return(

        <div>
            <input type ="text " onChange = { handdleText}/>
            <h2>{text}</h2>
        </div>
       
    )
};

export default TextH2;