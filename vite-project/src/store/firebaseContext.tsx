import {createContext,useState} from 'react'



export  const FirebaseContext =createContext<any>(null)



export  const AuthContext = createContext<any>(null)


interface ContextProps{
    children:React.ReactNode
}

export default function Context ({children}:ContextProps){
    const [user,setUser]= useState<any  >(null)

    return(
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    )

}