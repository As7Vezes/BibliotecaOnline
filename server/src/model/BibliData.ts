import { Schema, model } from 'mongoose'

export interface IBook{
    editora: string,
    title: string,
    autor:string,
    image: string
}

const bibliSchema = new Schema<IBook>({
    editora: { type: String},
    title: { type: String},
    autor: { type: String},
    image: { type: String}
})

export default model<IBook>('biblioteca', bibliSchema)