const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/donate")
.then(()=>{
console.log("Connection succesful");
}).catch((err)=>{
console.log(`No connection ${err}`)
})

const signupsch = new mongoose.Schema({
fname:{
type:String,
required:true,
trim:true
},
email: {
type: String,
required: true,
unique: true, 
trim: true
},
cardnumber:{
    type:String,
    required:true,
    unique:true,
    trim:true
    },
cvv:{
        type:String,
        required:true,
        unique:true,
        trim:true
 },
money: {
type: String,
required: true,
trim: true
}
})
const Student = mongoose.model("Paytm", signupsch);
module.exports = Student;