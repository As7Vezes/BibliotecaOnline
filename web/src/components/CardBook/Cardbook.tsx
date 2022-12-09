import { useState } from "react";
import { IFormState } from "../form/FormBook";
import { getDownloadURL, ref } from "firebase/storage";
import { db, storage } from "../../config/firebase";

export function CardBook(book: IFormState){

    const [url, setUrl] = useState<string>()

    const Image = async () => {
        const storageRef = ref(storage, `images/${book.imagem}.png`);
        console.log(book.imagem)

        const url = await getDownloadURL(storageRef)
        setUrl(url)
        console.log(url)
      }

      Image()

    return(
        <div key={book.id} className="mx-w-25 rounded overflow-hidden shadow-lg mx-10 my-5">
            <img className="w-25" src={url} alt="" />
            <div className="px-6 py-4">
                <div className="font-Lara font-bold text-2xl mb-2 text-left">{book.nome}</div>
                <div className="font-bold text-xl mb-2 text-left">{book.autor}</div>
                <div className="font-bold text-xl mb-2 text-left">{book.editora}</div>
            </div>
        </div>
    )
}