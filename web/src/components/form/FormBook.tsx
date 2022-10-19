import { api } from "../../api/api";
import { useState } from 'react'
import { Button } from "../button/Button";

export interface IFormState {
    id: number,
    nome: string ,
    autor: string ,
    editora: string ,
    imagem: string ,
}

export function FormBook() {

    const [formState, setFormState] = useState<IFormState>({} as IFormState)

    const handleUploadFile = (e: any) => setFormState(e.target.files[0]);

    return (
        <div className="w-80 bg-colors-primaryMedium rounded my-6 flex items-center m-auto">
            <form action="" className=" rounded p-5">
                <input className="block w-full mb-3 rounded p-2 outline-colors-primary focus:tracking-widest transition-all" type="text" value={formState.nome} placeholder="Título da Obra" onChange={(e) => setFormState({...formState, nome: e.target.value || ''})}/>
                <input className="block w-full mb-3 rounded p-2 outline-colors-primary focus:tracking-widest transition-all" type="text" value={formState.autor} placeholder="Nome do aoutor(a)" onChange={(e) => setFormState({...formState, autor: e.target.value || ''})}/>
                <input className="block w-full mb-3 rounded p-2 outline-colors-primary focus:tracking-widest transition-all" type="text" value={formState.editora} placeholder="Nome da Editora" onChange={(e) => setFormState({...formState, editora: e.target.value || ''})}/>
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
                        value={formState.imagem} 
                        onChange={handleUploadFile}
                        accept='.jpeg, .jpg, .png, .webp, .svg'
                        />
                      
                </div>
                <Button>Adicionar</Button>
            </form>
        </div>
    )
}