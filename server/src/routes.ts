import express from 'express'
import multer from 'multer'
import { multerConfig } from '../config/multer'
export const routes = express.Router()

import BibliController from './controllers/BibliController'

routes.post('/postagem', multer(multerConfig).single('image'), BibliController.create)
routes.get('/read', BibliController.read)
routes.put('/update/:id', multer(multerConfig).single('image'), BibliController.update)
routes.delete('/delete/:id', BibliController.delete)