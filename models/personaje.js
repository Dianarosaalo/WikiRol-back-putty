const { default: mongoose } = require("mongoose");

let personajesSchema= new mongoose.Schema({
    nombre:{
        type:String,
        minlength:1,
        trim:true
    },
    titulo:{
        type:String,
        minlength:1,
        trim:true
    },
    descripcion: {
        type:String,
        trim:true
    },
    edad: {
        type: Number, //podría ser nada, pero solo Typescript me permitiría ésto
        min:0,
    },
    clases: {
        type: [{
            class: String,
            level: Number
          }],
    },
    campanya:{
        type: String,
        //enum:["Spin-Offs","Egathea","Caminos de Sangre","Aryma","Yggdrassil"],
    },
    fotoPerfil:{
        type:String,
    },
    reliquia:{
        type:[String],

    },
    intergalactico:{
        type:Boolean

    },
    singularidad:{
        type:[String]

    },
    facciones:{
        type:[String]

    },
    partidaAparicion:{
        type:Number

    },
    muerto:{
        type:Boolean

    },
    galeria:{
        type:[String]
    },
    lore:{
        type:String,
        trim:true
    },
    rasgos: {
        type: [{
          title: String,
          info: String,
          privacy:Boolean,
          type: {
            type: String,
            optional: true,
          },
        }],
        trim: true
      },
    pv:{
        type:Number,
    },
    ca:{
        type:Number,
    },
    fue:{
        type:Number,
    },
    des:{
        type:Number,
    },
    con:{
        type:Number,
    },
    int:{
        type:Number,
    },
    sab:{
        type:Number,
    },
    car:{
        type:Number,
    },
    jugador:{ //esto igual no
        type:String,
        //enum:["Diana","Furro","Marcos","Adriwebo","Barakiel","Jorge","Diego","Tito","Mario","Invitado"]
    },
    tipoJuego:{
        type:String,
        //enum:["DnD","Pathfinder","Warhammer40k","Anima","DnD Homebrew"]
    },
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    movimiento:{
        type:Number,
    },
    private:{
        type:Boolean
    },
    privateStats:{
        type:Boolean
    },
    tier:{
        type:String
    },
    canciones: {
        type: [{
          title: String,
          link: String,
          privacy:Boolean
        }],
        trim: true
    },
    reader:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    campanyasSecundarias:{
        type: [String]
    },
    deidad:{
        type:String,
    },
    altura:{
        type:Number
    },
    peso:{
        type:Number
    },
    competencia:{
        type:Number
    },
    salvaciones:{
        type:[Number]
    },
    percepcion:{
        type:Number
    },
    investigacion:{
        type:Number
    },
    experiencia:{
        type:Number
    },
    iniciativa:{
        type:Number
    },
    version: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Personaje",
        default: null,
    },
    hiddenInTierList:{
        type:Boolean
    },
    bestiario:{
        type:String,
    },
});

let Personaje = mongoose.model('personajes', personajesSchema);

module.exports = Personaje;