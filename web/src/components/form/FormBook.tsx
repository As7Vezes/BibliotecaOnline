import { api } from "../../api/api";
import { SetStateAction, useEffect, useState } from 'react'
import { Button } from "../button/Button";
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../../config/firebase";
import { v4 } from 'uuid'

export interface IFormState {
    id?: number,
    nome: string,
    autor: string ,
    editora: string ,
    data?: any,
    imagem?: string,
    url?: any
}

export function FormBook() {

    const [formState, setFormState] = useState<IFormState>({
        autor: '',
        editora: '',
        nome: ''
    })

    const [idImage, setIdImage] = ('')

    const [progess, setProgess] = useState<Number>(0)

    const postBook = async(event: any) => { 
        event.preventDefault()

        const file = event.target[3].files[0]
        console.log(file.type)
        
        if(!file) return

        const imageId = v4()

        const storageRef = ref(storage, `images/${imageId}.png`)

        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on(
          "state_changed",
          snaphot => {
            const progess = (snaphot.bytesTransferred / snaphot.totalBytes) * 100
            setProgess(progess)
          },
           
          error => {
            alert(error)
          },
          async () => {

            console.log(imageId)
            
            const response = await api.post('/post', {...formState, imagem: imageId})
            
            setFormState({ ...formState, ...response.data[0] })
          }
        )
    }
   

    return (
        <div className="w-80 bg-colors-primaryMedium rounded my-6 flex items-center m-auto">
            <form onSubmit={postBook} action="" className=" rounded p-5">
                <input className="block w-full mb-3 rounded p-2 outline-colors-primary focus:tracking-widest transition-all" type="text" name="nome" value={formState.nome} placeholder="Título da Obra" onChange={(e) => setFormState({...formState, nome: e.target.value || ''})}/>
                <input className="block w-full mb-3 rounded p-2 outline-colors-primary focus:tracking-widest transition-all" type="text" name="autor" value={formState.autor} placeholder="Nome do autor(a)" onChange={(e) => setFormState({...formState, autor: e.target.value || ''})}/>
                <input className="block w-full mb-3 rounded p-2 outline-colors-primary focus:tracking-widest transition-all" type="text" name="editora" value={formState.editora} placeholder="Nome da Editora" onChange={(e) => setFormState({...formState, editora: e.target.value || ''})}/>
                <div className="
                    w-full bg-colors-primaryDark h-full relative group flex items-center rounded hover:bg-colors-primarySuperDark hover:tracking-widest transition-all duration-100"
                    >
                    <div className="
                        w-full absolute flex items-center justify-center h-full text-colors-bg-white"
                        >
                        Selecionar Image
                    </div>
                    <input 
                        className="block w-full mb-3 rounded p-2 opacity-0" 
                        type="file" 
                        name="imagem"
                        accept='.jpeg, .jpg, .png, .webp, .svg'
                        />
                </div>
                <Button>Adicionar</Button>
            </form>
        </div>
    )
}


