import knex from "../database/connection";
import { Router, Request, Response } from 'express'

const booksRouter = Router()

booksRouter.get('/read', async (req: Request, res: Response) => {
    const books = await knex('books').select('*')

    const serializedBooks = books.map(item => {
        return {
            id: item.id,
            titulo: item.titulo,
            autor: item.autor,
            editora: item.editora,
            image_url: `http://localhost:4444/uploads${item.image}`
        }
    })

    console.log(serializedBooks)

    return res.json(serializedBooks)
})

export default booksRouter

