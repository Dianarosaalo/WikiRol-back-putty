const express=require("express");

let Escenario = require(__dirname + "/../models/escenario.js");
let router = express.Router();

router.get('/', (req, res) => {
    Escenario.find().then(resultado => {
        res.status(200).
            send({ escenarios: resultado});
    }); 
});

router.get('/:id', (req, res) => {
    Escenario.findById(req.params['id']).then(resultado => {
        res.status(200).send({escenario: resultado});
    });
});

router.post('/', (req,res)=>{
    let nuevoEscenario = new Escenario({

        nombre:req.body.nombre,
        descripcion:req.body.descripcion,
        galeria:req.body.galeria,
        creator:req.body.creator
    });

    nuevoEscenario.save().then(resultado => {
        res.sendStatus(200);
    }).catch(error => {
        console.error("Error añadiendo el escenario" + error);
    });
});

router.put('/:id', (req, res) => {
    Escenario.findByIdAndUpdate(req.params.id, {
        $set: {
            nombre:req.body.nombre,
            descripcion:req.body.descripcion,
            galeria:req.body.galeria,
            creator:req.body.creator
        }
    }, {new: true}).then(resultado => {
       
    }).catch(error => {
        console.error({error: "Error modificando el escenario"});
    });
});

router.delete('/:id', (req, res) => {
    Escenario.findByIdAndRemove(req.params.id).then(resultado => {
        res.sendStatus(200);
    }).catch(error => {
        console.error("Error eliminando el escenario" + error);
    });
});

module.exports = router;