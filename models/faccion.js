const { default: mongoose } = require("mongoose");

let faccionSchema=new mongoose.Schema({
    titulo:{
        type:String,
        minlength:1,
        required:true
    },
    campanya:{
        type: String,
        //enum:["Spin-Offs","Egathea","Caminos de Sangre","Aryma","Yggdrassil"],
        required:true
    },
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

let Faccion = mongoose.model('facciones', faccionSchema);

module.exports = Faccion;