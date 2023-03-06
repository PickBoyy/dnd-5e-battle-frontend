import { useState } from "react";
import { useAppContext } from "../../../hooks/context";
import './style.css'

const BoardX9: React.FC = () => {
  const { renderCharacter,setRenderCharacter,setInfoText1,setInfoText2} = useAppContext();
  const [buttonValues, setButtonValues] = useState<string[]>(Array.from({ length: 9 * 9 }, () => ""));

  const handleBoardClick = (index:number) => {
    const newButtonValues = [...buttonValues];
    newButtonValues[index] = renderCharacter;
    setButtonValues(newButtonValues);
    setInfoText1('')
    setInfoText2('')
    setRenderCharacter('')

  }
  return (
    <div className="containerX9">
      <div className="BoardX9">
        {buttonValues.map((buttonValue, i) => (
          <button onClick={() => handleBoardClick(i)} key={i} className='casaX9' id={`casaX9 ${i}`}>
            <p className="textBoard">{buttonValue}</p>
          </button>
        ))}
      </div>
    </div>
  )
}

export default BoardX9;
