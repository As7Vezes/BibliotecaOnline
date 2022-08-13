import { connect } from 'mongoose'

const url: string = 'mongodb+srv://user:user@cluster0.ivy7n.mongodb.net/biblioteca'

run().catch(err => console.log(err));

export async function run(){
    await connect(url)

    // const book = new Bibli<IBook>({
    //     editora: 'apenas um nome',
    //     title: 'apenas uma título',
    //     autor: 'apenas um autor',
    //     image: 'apenas uma imagem.png'
    // })

    // await book.save()
}





