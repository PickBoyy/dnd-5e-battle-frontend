import { useState } from "react";
import './style.css'

const BoardX9 = ()=>{
    const [value,setValue] = useState()

    return (

        <div className="containerX9">
            <div className="BoardX9">
                {Array.from({length:9*9}).map((_, i) => (
                    <div onClick={()=> console.log(i)} key={i} className='casaX9' id={`casaX9 ${i}`}>
                        
                    </div>
                ))}
            </div>
        </div>
    )

}

export default BoardX9;
