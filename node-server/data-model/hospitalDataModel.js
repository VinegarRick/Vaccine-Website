let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

//creates db with name vaccination or opens a connection if already present
mongooseObj.connect("mongodb://127.0.0.1/vaccination"); 

const hospitalSchema = new schemaObj({
    name : {type: String, required: true},
    address : {type: String, required: true},
    type : {type: String, required: true},
    vaccineList : {type: String}
},{
    versionKey: false //false - set to false then it wont create in mongodb
}
);

let HospitalModel = mongooseObj.model("hospital", hospitalSchema);

module.exports = HospitalModel;//this should be used in userRouter to build user api's