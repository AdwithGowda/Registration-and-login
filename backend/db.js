
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://AdwithGowda:Ag22187120@adwithgowda.mwyx3lv.mongodb.net/Register_Login?retryWrites=true&w=majority',{
})
.then((response) =>{
    console.log("connected to data base");
})
.catch((error) =>{
    console.log(error)
});