const express=require("express");

let Personaje = require(__dirname + "/../models/personaje.js");
let router = express.Router();


router.get('/', (req, res) => {
    Personaje.find().then(resultado => {
        res.status(200)
            .send({personajes: resultado});
    }); 
});

router.get('/:id', (req, res) => {
    Personaje.findById(req.params['id']).then(resultado => {
        res.status(200).send({personaje: resultado});
    });
});

router.delete('/:id', (req, res) => {
    Personaje.findByIdAndRemove(req.params.id).then(resultado => {
        res.sendStatus(200);
    }).catch(error => {
        console.error("Error eliminando el personaje" + error);
    });
});


router.post('/', (req, res) => {
    let nuevoPersonaje = new Personaje({

        nombre:req.body.nombre,
        titulo:req.body.titulo,
        descripcion:req.body.descripcion,
        edad:req.body.edad,
        clases:req.body.clases,
        campanya:req.body.campanya,
        
        fotoPerfil:req.body.fotoPerfil,
        reliquia:req.body.reliquia,
        intergalactico:req.body.intergalactico,
        singularidad:req.body.singularidad,
        facciones:req.body.facciones,
        partidaAparicion:req.body.partidaAparicion,

        muerto:req.body.muerto,
        galeria:req.body.galeria,
        lore:req.body.lore,
        rasgos:req.body.rasgos,
        pv:req.body.pv,
        ca:req.body.ca,

        fue:req.body.fue,
        des:req.body.des,
        con:req.body.con,
        int:req.body.int,
        sab:req.body.sab,
        car:req.body.car,

        jugador:req.body.jugador,
        tipoJuego:req.body.tipoJuego,
        creator:req.body.creator,
        movimiento:req.body.movimiento,
        private:req.body.private,
        tier:req.body.tier,
        canciones:req.body.canciones
    });
    nuevoPersonaje.save().then(resultado => {
        res.sendStatus(200);
    }).catch(error => {
        console.error("Error añadiendo el personaje" + error);
    });
});

router.put('/:id', (req, res) => {
    Personaje.findByIdAndUpdate(req.params.id, {
        $set: {
            nombre:req.body.nombre,
            titulo:req.body.titulo,
            descripcion:req.body.descripcion,
            edad:req.body.edad,
            clases:req.body.clases,
            campanya:req.body.campanya,
            
            fotoPerfil:req.body.fotoPerfil,
            reliquia:req.body.reliquia,
            intergalactico:req.body.intergalactico,
            singularidad:req.body.singularidad,
            facciones:req.body.facciones,
            partidaAparicion:req.body.partidaAparicion,

            muerto:req.body.muerto,
            galeria:req.body.galeria,
            lore:req.body.lore,
            rasgos:req.body.rasgos,
            pv:req.body.pv,
            ca:req.body.ca,

            fue:req.body.fue,
            des:req.body.des,
            con:req.body.con,
            int:req.body.int,
            sab:req.body.sab,
            car:req.body.car,

            jugador:req.body.jugador,
            tipoJuego:req.body.tipoJuego,
            creator:req.body.creator,
            movimiento:req.body.movimiento,
            private:req.body.private,
            tier:req.body.tier,
            canciones:req.body.canciones
        }
    }, {new: true}).then(resultado => {
       
    }).catch(error => {
        console.error({error: "Error modificando personaje"});
    });
});

module.exports = router;