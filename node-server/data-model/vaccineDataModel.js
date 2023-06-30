let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

//creates db with name vaccination or opens a connection if already present
mongooseObj.connect("mongodb://127.0.0.1/vaccination"); 

const vaccineSchema = new schemaObj({
    name : {type: String, required : true},
    type : {type: String, required : true},
    price : {type: Number, required : true},
    sideEffects : {type: String, required : true},
    origin : {type: String, required : true}, // country developed
    dosesRequired : {type: Number, required : true},
    strainsCovered : String
},{
    versionKey: false //false - set to false then it wont create in mongodb
}
);

let VaccineModel = mongooseObj.model("vaccine", vaccineSchema);

module.exports = VaccineModel;//this should be used in userRouter to build user api's