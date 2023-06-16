const express=require("express");

let Partida = require(__dirname + "/../models/partida.js");
let router = express.Router();

router.get('/', (req, res) => {
    Partida.find().then(resultado => {
        res.status(200).
            send({ partidas: resultado});
    }); 
});

router.get('/:id', (req, res) => {
    Partida.findById(req.params['id']).then(resultado => {
        res.status(200).send({partida: resultado});
    });
});

router.post('/', (req,res)=>{
    let nuevaPartida = new Partida({

        num:req.body.num,
        titulo:req.body.titulo,
        campanya:req.body.campanya,
        fechaJugada:req.body.fechaJugada,
        resumen:req.body.resumen,
        creator:req.body.creator,
        personajes:req.body.personajes
        //personajesPresentes:req.body.personajesPresentes
    });

    nuevaPartida.save().then(resultado => {
        res.sendStatus(200);
    }).catch(error => {
        console.error("Error añadiendo la partida" + error);
    });
});

router.put('/:id', (req, res) => {
    Partida.findByIdAndUpdate(req.params.id, {
        $set: {
            num:req.body.num,
            titulo:req.body.titulo,
            campanya:req.body.campanya,
            fechaJugada:req.body.fechaJugada,
            resumen:req.body.resumen,
            creator:req.body.creator,
            personajes:req.body.personajes
        }
    }, {new: true}).then(resultado => {
       
    }).catch(error => {
        console.error({error: "Error modificando la partida"});
    });
});

router.delete('/:id', (req, res) => {
    Partida.findByIdAndRemove(req.params.id).then(resultado => {
        res.sendStatus(200);
    }).catch(error => {
        console.error("Error eliminando la partida" + error);
    });
});

module.exports = router;