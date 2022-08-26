import express from 'express'
import bodyParser from 'body-parser'
import '../config/db'
import cors from 'cors'
import path from 'path'
import router from './routes/index'

const app = express()

app.use(cors())
app.use(cors)
app.use(router)
app.use('/files', express.static(path.resolve(__dirname,'..','uploads')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.listen(4444, () => {
    console.log('servidor rodando')
})