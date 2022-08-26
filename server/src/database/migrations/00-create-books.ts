import { Knex } from "knex";

export async function up(knex: Knex){
    return knex.schema.createTable('books', table => {
        table.increments('id').primary,
        table.string('titulo'),
        table.string('autor'),
        table.string('editora'),
        table.string('image')
    })
}

export async function  down(knex: Knex){
    return knex.schema.dropTable('books')
}