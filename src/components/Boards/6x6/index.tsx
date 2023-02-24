import { useState } from "react";
import './style.css'

const BoardX6 = ()=>{
    const [value,setValue] = useState()

    return (

        <div className="containerX6">
            <div className="BoardX6">
                {Array.from({length:6*6}).map((_, i) => (
                    <div key={i} className='casaX6' id={`casaX6 ${i}`}>
                        
                    </div>
                ))}
            </div>
        </div>
    )

}

export default BoardX6;
