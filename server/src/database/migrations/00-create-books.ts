import { Knex } from "knex";

export async function up(knex: Knex){
    return knex.schema.createTable('books', table => {
        table.increments
    })
}
