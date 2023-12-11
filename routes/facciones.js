const express=require("express");

let Faccion = require(__dirname + "/../models/faccion.js");
let router = express.Router();

router.get('/', (req, res) => {
    Faccion.find().then(resultado => {
        res.status(200).
            send({ facciones: resultado});
    }); 
});

router.get('/:id', (req, res) => {
    Faccion.findById(req.params['id']).then(resultado => {
        res.status(200).send({faccion: resultado});
    });
});

router.post('/', (req,res)=>{
    let nuevaFaccion = new Faccion({

        titulo:req.body.titulo,
        campanya:req.body.campanya,
        creator:req.body.creator,
    });

    nuevaFaccion.save().then(resultado => {
        res.sendStatus(200);
    }).catch(error => {
        console.error("Error añadiendo la facción" + error);
    });
});

router.put('/:id', (req, res) => {
    Faccion.findByIdAndUpdate(req.params.id, {
        $set: {
            titulo:req.body.titulo,
            campanya:req.body.campanya,
            creator:req.body.creator,
        }
    }, {new: true}).then(resultado => {
       
    }).catch(error => {
        console.error({error: "Error modificando la facción"});
    });
});

router.delete('/:id', (req, res) => {
    Faccion.findByIdAndRemove(req.params.id).then(resultado => {
        res.sendStatus(200);
    }).catch(error => {
        console.error("Error eliminando la facción" + error);
    });
});

module.exports = router;