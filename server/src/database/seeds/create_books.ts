import { Knex } from "knex"

export async function seed(knex: Knex){
    await knex('books').insert([
        {
            titulo: "Papéis e Papelão", 
            image: "papel.png",
            editora: "alguma coisa",
            autor: "algum autor"
        }
    ])
}