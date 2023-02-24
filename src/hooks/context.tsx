import {Context,createContext,ReactNode,useContext,useState,useEffect} from 'react'

export const AppContext:Context<any> = createContext<any>({})

interface IContextProps {children:ReactNode}

export function AppWrapper({children}:IContextProps) {
    const [player1,setPlayer1] = useState([])
    const [player2,setPlayer2] = useState([])
    
    const [reload,setReload] = useState(false)
    useEffect(()=> {setReload(!reload)},[player1,player2])

    return (
        <AppContext.Provider value={{player1,setPlayer1,player2,setPlayer2,}}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}