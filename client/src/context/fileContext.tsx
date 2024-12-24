import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface IFileContextType {
    file: File|undefined,
    setFile: Dispatch<SetStateAction<File|undefined>>
}

const FileContext = createContext<IFileContextType>({
    file : undefined,
    setFile: () => {}
})

function FileProvider({children}: {children: ReactNode}){
    const [file,setFile] = useState<File|undefined>(undefined)
    return(
    <FileContext.Provider value={{file,setFile}}>
        {children}
    </FileContext.Provider>
    )
}

export {FileContext,FileProvider}