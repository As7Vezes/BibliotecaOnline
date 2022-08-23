import { useEffect, useState } from "react"
import { api } from "../../api/api"

export function ListBooks(){

    const [data, setData] = useState([])
    const [url, setUrl] = useState('')

    useEffect(() => {
        
        const getImage = async () => {
            const response = await api.get('/read')

            setData(response.data)
            setUrl(response.data.url)

            console.log(data)
        }

        getImage()

    }, [])

    return (
        <div></div>
    )
}