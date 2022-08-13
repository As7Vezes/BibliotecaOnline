import biblioteca from '../model/BibliData'
import { Request, Response } from 'express'

export default {
    
    async create(req: Request,res: Response){

        if(req.file){ 
            const responseBibli = await biblioteca.create({
                ...req.body,
                image: req.file.filename
            })  
            return res.json(responseBibli)
        }else{
            const responseBibli = await biblioteca.create({
                ...req.body
            })
            return res.json(responseBibli)
        }
         
        
    },

    async read(req: Request, res: Response){
        const ReadBook = await biblioteca.find()

        return res.json({
            ReadBook,
            url: 'http://localhost:3434/files/'
        })
    },
    
    async update(req: Request, res: Response){
        const { id } = req.params

        if(req.file){
            const bibli = await biblioteca.findByIdAndUpdate({ _id: id}, {
                ...req.body,
                image: req.file.filename
            })

            await bibli.save()

            return res.json(bibli)
        }else {
            const bibli = await biblioteca.findByIdAndUpdate({ _id: id},{
                ...req.body
            })

            await bibli.save()

            return res.json(bibli)
        }
    },

    async delete(req: Request, res: Response){
        const { id } = req.params

        const deleteBook = await biblioteca.findByIdAndDelete({ _id: id})

        if(deleteBook){
            return res.json(deleteBook)
        }
    }
}