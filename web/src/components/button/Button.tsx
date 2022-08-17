import { ReactNode } from "react"

interface props{
    children: React.ReactNode
}

export function Button({ children }: props){
    return (
        <button type="submit" className="
         mt-3 bg-colors-primaryLight p-1 rounded hover:bg-colors-primary hover:text-colors- transition-all active:bg-colors-bg-white focus:outline-none text-colors-primarySuperDark" 
        >
            { children }
        </button>
    )
}