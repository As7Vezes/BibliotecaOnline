import { SetStateAction, useEffect, useState } from "react"
import { api } from "../../api/api"
import { CardBook } from "../CardBook/Cardbook"
import { collection, doc, getDoc, getDocFromCache, getDocs, query } from "firebase/firestore";
import { IFormState } from "../form/FormBook"
import { db, storage } from "../../config/firebase";
import { getDownloadURL, ref } from "firebase/storage";

export function ListBooks(){

    const [data, setData] = useState<IFormState[]>([])
    const [url, setUrl] = useState<SetStateAction<never[]>>([])
  
    useEffect( () => {
        const getImage = async () => {
            const response: any = await api.get('/read')
            
            setData(response.data.products)
            setUrl(response.data.url)
            console.log(response)
        }

        getImage()

    }, [])

    return(
        <div className="grid grid-cols-4 gap-4">
            {data.map((data: IFormState) => (
                <CardBook key={data.id}
                id={data.id}
                imagem={data.imagem}
                nome={data.nome}
                autor={data.autor}
                editora={data.editora}
                 />
            ))}
        </div>
    )
}