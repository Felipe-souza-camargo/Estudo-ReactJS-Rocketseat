import knex from 'Knex';
import path from 'path';

//migrations - controlam a versão do bd

const db = knex({
    client: 'sqlite3',
    connection:{
        filename:path.resolve(__dirname,'database.sqlite') //dirname retorna o diretório e criar um arquivo para isso
    },
    useNullAsDefault:true,
});

export default db;