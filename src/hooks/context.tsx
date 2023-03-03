import {Context,createContext,ReactNode,useContext,useState,useEffect} from 'react'
import ICharacter from '../models/ICharacter'

export const AppContext:Context<any> = createContext<any>({})

interface IContextProps {children:ReactNode}

export function AppWrapper({children}:IContextProps) {
    const [player1,setPlayer1] = useState([])
    const [player2,setPlayer2] = useState([])
    const [chosenCharacter1,setChosenCharacter1] = useState<Array<ICharacter>>([])
    const [chosenCharacter2,setChosenCharacter2] = useState<Array<ICharacter>>([])
    const [renderCharacter,setRenderCharacter] = useState('')
    const [infoText1,setInfoText1] = useState('')
    const [infoText2,setInfoText2] = useState('')
    
    const [reload,setReload] = useState(false)
    useEffect(()=> {setReload(!reload)},[player1,player2])

    return (
        <AppContext.Provider value={{player1,setPlayer1,player2,setPlayer2,chosenCharacter1,setChosenCharacter1,chosenCharacter2,setChosenCharacter2,renderCharacter,setRenderCharacter,infoText1,setInfoText1,infoText2,setInfoText2}}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}