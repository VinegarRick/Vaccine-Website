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
})

const hospitalSchema = new schemaObj({
    name : {type: String, required: true},
    address : {type: String, required: true},
    type : {type: String, required: true},
    vaccineList : [vaccineSchema],
},{
    versionKey: false //false - set to false then it wont create in mongodb
}
);

let HospitalModel = mongooseObj.model("hospital", hospitalSchema);

module.exports = HospitalModel;//this should be used in userRouter to build user api's