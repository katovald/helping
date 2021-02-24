'use strict';

module.exports = {
    getQuerie : getQuerie   //    GET     /servicio/{tipo}
}

function getQuerie(req, res){
    let fechas = req.body;
    console.log(fechas);
    res.status(200).json({
        messaje : "listo"
    });
}