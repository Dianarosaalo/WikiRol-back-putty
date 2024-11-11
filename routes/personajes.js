const express=require("express");

let Personaje = require(__dirname + "/../models/personaje.js");
let router = express.Router();


router.get('/', (req, res) => {
    Personaje.find().then(resultado => {
        res.status(200)
            .send({personajes: resultado});
    }); 
});

/*router.get('/scroll', async (req, res) => {

    const pageNumber = parseInt(req.query.pageNumber) || 1;
    const pageSize = parseInt(req.query.pageSize) || 18;

    try {
        const resultado = await Personaje.find({})
          .skip((pageNumber - 1) * pageSize)
          .limit(pageSize);
    
        res.send({personajes:resultado});
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving characters.' });
      }
});*/

router.get('/scroll', async (req, res) => {
    const pageNumber = parseInt(req.query.pageNumber) || 1;
    const pageSize = parseInt(req.query.pageSize) || 18;
    const creator = req.query.creator; // Get the 'creator' parameter from the request query.
    const campanya = req.query.campanya;
    const partidaAparicion = req.query.partidaAparicion;

    try {
        const query = {};

        if (creator) {
            query.creator = creator; // Add a filter for the 'creator' if it's provided.
        }

        /*if (campanya) {
            query.campanya = campanya; // Add a filter for the 'campanya' if it's provided.
        }*/

        if (campanya) {
            // Add a filter for 'campanya' if it's provided.
            query.$or = [
                { campanya: campanya }, // Check if 'campanya' is equal.
                { campanyasSecundarias: campanya } // Check if 'campanyasSecundarias' contains the value.
            ];
        }

        if (partidaAparicion) {
            query.partidaAparicion = partidaAparicion; // Add a filter for the 'partidaAparicion' if it's provided.
        }

        const resultado = await Personaje.find(query)
            .skip((pageNumber - 1) * pageSize)
            .limit(pageSize);

        res.send({ personajes: resultado });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving characters.' });
    }
});

router.get('/tier', async (req, res) => {
    const tier = req.query.tier;

    try {
        const query = {};
        if (tier) {
            query.tier = tier; // Add a filter for the 'tier' if it's provided.
        }

        const resultado = await Personaje.find(query);
        res.send({ personajes: resultado });
        
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving characters.' });
    }
});

router.get('/busqueda', async (req, res) => {
    const nombre = req.query.nombre;
    const faccion = req.query.faccion;

    try {
        const query = {};
        if (nombre) {
            query.nombre = { $regex: new RegExp(nombre, 'i') };
        }

        if (faccion) {
            query.facciones = { $in: [faccion] };
        }

        const resultado = await Personaje.find(query);
        res.send({ personajes: resultado });
        
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving characters.' });
    }
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
        canciones:req.body.canciones,

        reader:req.body.reader,
        campanyasSecundarias:req.body.campanyasSecundarias,
        deidad:req.body.deidad,
        privateStats:req.body.privateStats,

        altura:req.body.altura,
        peso:req.body.peso,
        competencia:req.body.competencia,
        salvaciones:req.body.salvaciones,

        percepcion:req.body.percepcion, //new properties
        investigacion:req.body.investigacion,
        experiencia:req.body.experiencia,
        iniciativa:req.body.iniciativa,

        version:req.body.version,
        hiddenInTierList: req.body.hiddenInTierList
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
            canciones:req.body.canciones,

            reader:req.body.reader,
            campanyasSecundarias:req.body.campanyasSecundarias,
            deidad:req.body.deidad,
            privateStats:req.body.privateStats,

            altura:req.body.altura,
            peso:req.body.peso,
            competencia:req.body.competencia,
            salvaciones:req.body.salvaciones,

            percepcion:req.body.percepcion, //new properties
            investigacion:req.body.investigacion,
            experiencia:req.body.experiencia,
            iniciativa:req.body.iniciativa,

            version:req.body.version,
            hiddenInTierList: req.body.hiddenInTierList

        }
    }, {new: true}).then(resultado => {
       
    }).catch(error => {
        console.error({error: "Error modificando personaje"});
    });
});

module.exports = router;