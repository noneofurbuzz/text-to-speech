import { ReactNode, createContext, useState } from "react";

interface ITextContext {
    value: {text:string},
    setValue: React.Dispatch<React.SetStateAction<{
        text: string;
    }>>
}
const TextContext = createContext<ITextContext>({
    value : {text:""},
    setValue : () => {}
})
function TextProvider({children}:{children: ReactNode}){
    const [value,setValue] = useState({
        text: ""
    })
    return(
        <TextContext.Provider value={{value,setValue}}>
            {children}
        </TextContext.Provider>
    )
}


export {TextContext,TextProvider}