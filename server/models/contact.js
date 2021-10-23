let mongoose = require("mongoose");

//create model class
let contactModel = mongoose.Schema({
    name : String,
    number : Number,
    email : String,
},
{
    //name collections
    collection: "contacts"
})


module.exports = mongoose.model("Contact", contactModel);