const mongooes =require('mongoose')

const empschema = mongooes.Schema({
    email:{
        type: String
    },
    name:{
        type:String
    },
    pass:{
        type:String
    },
    mobile:{
        type:String
    },
    city:{
        type:String
    },

})
let employe= mongooes.model('employe',empschema)
module.exports =employe