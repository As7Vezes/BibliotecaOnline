import { useEffect, useState } from "react"
import { api } from "../../api/api"

export function ListBooks(){

    const [data, setData] = useState([])
    const [url, setUrl] = useState('')

    useEffect(() => {

        api.get('items').then(response => {
            console.log(response)
        })
        
        // const getImage = async () => {
        //     const response = await api.get('/read')
        //         .then(setData(response.data))


        //     console.log(response)
        //     setData(response.data)
        //     setUrl(response.data.url)

        //     console.log(data)
        // }

        // getImage()

    }, [])

    return (
        <div></div>
    )
}