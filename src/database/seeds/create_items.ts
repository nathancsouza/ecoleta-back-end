import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([
    { title: 'Lamps', image: 'lampadas.svg'},
    { title: 'Batteries', image: 'baterias.svg'},
    { title: 'Electronics', image: 'eletronicos.svg'},
    { title: 'Kitchen oil', image: 'oleo.svg'},
    { title: 'Organic Waste', image: 'organicos.svg'},
    { title: 'Cardboard', image: 'papeis-papelao.svg'},
  ]);
}