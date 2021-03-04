'use strict';

/*COMETRA
    Servidor: 132.147.1.117
    BD : connected
    Usuario: sa
    Password: cometra0202#

    SEPSA
    Servidor: 132.147.46.249
    BD : connected
    Usuario: sa
    Password: GrupoGsi2016

    SEGURITEC
    Servidor: 132.147.200.102
    BD : connected
    Usuario: sa
    Password: Sgmex0740
*/

var knexCometra = require('knex')({
    client: 'mssql',
    connection: {
        server: '132.147.1.117',
        user: 'sa',
        password: 'cometra0202#',
        options: {
            port: 1433,
            database: 'connected',
            encrypt: false
        }
    }
});

var knexSepsa = require('knex')({
    client: 'mssql',
    connection: {
        server: '132.147.46.249',
        user: 'sa',
        password: 'GrupoGsi2016',
        options: {
            port: 1433,
            database: 'connected',
            encrypt: false
        }
    }
});

var knexSeguritec = require('knex')({
    client: 'mssql',
    connection: {
        server: '132.147.200.102',
        user: 'sa',
        password: 'Sgmex0740',
        options: {
            port: 1433,
            database: 'connected',
            encrypt: false
        }
    }
});

module.exports = {
    getQuerieCometra : getQuerieCometra,        //    GET     /servicio/cometra
    getQuerieSepsa : getQuerieSepsa,            //    GET     /servicio/sepsa
    getQuerieSeg : getQuerieSeg     //    GET     /servicio/seguritec
}

function getQuerieCometra(req, res){
    let fechas = req.body;
    console.log(fechas);
    knexCometra.raw(`SELECT ID_USUARIO, CHECADA FROM CONNECT_TRANSACTIONS  WHERE CHECADA BETWEEN '${fechas.fechaInicio} 00:00:00' AND '${fechas.fechaFin} 23:59:59'`)
    .then((results) => {
        res.status(200).json(results);
        return;
    }).catch((err) => {
        res.status(503).json({message:"Servicio no disponible"});
        return;
    });
}

function getQuerieSepsa(req, res){
    let fechas = req.body;
    console.log(fechas);
    knexSepsa.raw(`SELECT ID_USUARIO, CHECADA FROM CONNECT_TRANSACTIONS  WHERE CHECADA BETWEEN '${fechas.fechaInicio} 00:00:00' AND '${fechas.fechaFin} 23:59:59'`)
    .then((results) => {
        res.status(200).json(results);
        return;
    }).catch((err) => {
        res.status(503).json({message:"Servicio no disponible"});
        return;
    });
}

function getQuerieSeg(req, res){
    let fechas = req.body;
    console.log(fechas);
    knexSeguritec.raw(`SELECT ID_USUARIO, CHECADA FROM CONNECT_TRANSACTIONS  WHERE CHECADA BETWEEN '${fechas.fechaInicio} 00:00:00' AND '${fechas.fechaFin} 23:59:59'`)
    .then((results) => {
        res.status(200).json(results);
        return;
    }).catch((err) => {
        res.status(503).json({message:"Servicio no disponible"});
        return;
    });
}