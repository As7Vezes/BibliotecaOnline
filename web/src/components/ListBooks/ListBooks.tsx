import { useEffect, useState } from "react"
import { api } from "../../api/api"
import { CardBook } from "../CardBook/Cardbook"

import { IFormState } from "../form/FormBook"

export function ListBooks(){

    const [data, setData] = useState<IFormState[]>([])
    const [url, setUrl] = useState<string>('')
  
    const getImage = async () => {
        const response: any = await api.get('/read')
        
        setData(response.data.products)
        setUrl(response.data.url)
    }

    useEffect(() => {

        getImage()

    }, [])

    return(
        <div className="flex ">
            {data.map((data: IFormState) => (
                <CardBook key={data.id}
                    id={data.id} 
                    nome={data.nome} 
                    autor={data.autor} 
                    editora={data.editora}
                    imagem={data.imagem} />
            ))}
        </div>
    )
}