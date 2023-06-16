const { default: mongoose } = require("mongoose");
const Personaje = require("./personaje");

let partidaSchema=new mongoose.Schema({
    num:{
        type:Number,
        required:true,
    },
    titulo:{
        type:String,
        minlength:1,
        required:true
    },
    campanya:{
        type: String,
        enum:["Spin-Offs","Egathea","Caminos de Sangre","Aryma","Yggdrassil"],
        required:true
    },
    fechaJugada:{
        type:Date,
    },
    resumen:{
        type:String
    },
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    personajes:{
        type:[mongoose.Schema.Types.ObjectId],
        ref: "Personaje"
    }
});

let Partida = mongoose.model('partidas', partidaSchema);

module.exports = Partida;