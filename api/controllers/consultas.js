'use strict';

const knex = require('knex')({
    client: 'mssql',
    connection: {
        server: 'sql-2008',
        user: 'gsiconnectusr',
        password: 'Absolut2',
        options: {
            port: 1433,
            database: 'gsiconnectdb',
            encrypt: false
        }
    }
});

module.exports = {
    getQuerie : getQuerie//    GET     /servicio/{tipo}
}

function getQuerie(req, res){
    let tipo = req.swagger.params.tipo.value;
    console.log(tipo);
    res.status(200).json({
        "message": secciones
    });
}