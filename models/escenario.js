const { default: mongoose } = require("mongoose");

let escenarioSchema=new mongoose.Schema({
    nombre:{
        type:String,
        minlength:1,
        required:true
    },
    descripcion:{
        type:String
    },
    galeria:{
        type:[String]
    },
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
});

let Escenario = mongoose.model('escenarios', escenarioSchema);

module.exports = Escenario;