import { IFormState } from "../form/FormBook";

export function CardBook(book: IFormState){
    return(
        <div className="mx-w-25 rounded overflow-hidden shadow-lg mx-10 my-5">
            <img className="w-25" src={book.imagem} alt="" />
            <div className="px-6 py-4">
                <div className="font-Lara font-bold text-2xl mb-2 text-left">{book.nome}</div>
                <div className="font-bold text-xl mb-2 text-left">{book.autor}</div>
                <div className="font-bold text-xl mb-2 text-left">{book.editora}</div>
            </div>
        </div>
    )
}