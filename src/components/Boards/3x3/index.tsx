import { useRef, useState } from "react";
import './style.css'

const BoardX3 = ()=>{
    const [value,setValue] = useState()

    const dragItem:any = useRef();
    const dragOverItem:any = useRef();
    
    const dragStart = (e:any, position:any) => {
      dragItem.current = position;
      console.log(e.target.innerHTML);
    };
    
    const dragEnter = (e:any, position:any) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
    };
  
    // const drop = (e:any) => {
    //   const copyListItems = [...];
    //   const dragItemContent = copyListItems[dragItem.current];
    //   copyListItems.splice(dragItem.current, 1);
    //   copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    //   dragItem.current = null;
    //   dragOverItem.current = null;
    //   setL1characters(copyListItems);
    // };
    const onDrop = (e:any) => {
        const items = e.dataTransfer.items;

    }


    return (

        <div className="containerX3">
            <div className="BoardX3">
                {Array.from({length:9}).map((_, i) => (
                    <div key={i} className='casaX3' id={`casa ${i}`} 
                    onDragStart={(e)=> dragStart(e,i)}
                onDragEnter={(e)=> dragEnter(e,i)}
                onDrop={onDrop}
                    >
                        
                    </div>
                ))}
            </div>
        </div>
    )

}

export default BoardX3;


