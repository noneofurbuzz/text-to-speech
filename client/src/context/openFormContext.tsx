import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface IOpenForm{
    openForm : boolean,
    setOpenForm : Dispatch<SetStateAction<boolean>>
}

const OpenFormContext = createContext<IOpenForm>({
    openForm: false,
    setOpenForm : () => {}
})

function OpenFormProvider({children} : {children : ReactNode}){
    const [openForm,setOpenForm] = useState(false)
    return(
        <OpenFormContext.Provider value={{openForm,setOpenForm}}>
            {children}
        </OpenFormContext.Provider>
    )
}
export {OpenFormContext,OpenFormProvider}