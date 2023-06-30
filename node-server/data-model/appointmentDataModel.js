let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

//creates db with name vaccination or opens a connection if already present
mongooseObj.connect("mongodb://127.0.0.1/vaccination"); 

const userSchema = new schemaObj({
    username : {type: String, required : true},
    password: {type:String, required:true},
    email: String,
    mobile: String,
    address: String,
    age: Number,
    gender: String
})

const hospitalSchema = new schemaObj({
    name : {type: String, required: true},
    address : {type: String, required: true},
    type : {type: String, required: true},
    vaccineList : [vaccineSchema],
    appointments : [appointmentSchema]
})

const vaccineSchema = new schemaObj({
    name : {type: String, required : true},
    type : String,
    price : {type: Number, required : true},
    sideEffects : String,
    origin : String, // country developed
    dosesRequired : {type: Number, required : true},
    strainsCovered : String
})

let appointmentSchema = new schemaObj({
    person : {type: userSchema, required: true},
    hospital : {type: hospitalSchema, required: true},
    vaccine : {type: vaccineSchema, required: true},
    time: {type: Date, required: true}
},{
    versionKey: false //false - set to false then it wont create in mongodb
}
);

let AppointmentModel = mongooseObj.model("appointment", appointmentSchema);

module.exports = AppointmentModel;//this should be used in userRouter to build user api's