
const mongoose = require('mongoose');
mongoose.connect('mongoose_URL',{
})
.then((response) =>{
    console.log("connected to data base");
})
.catch((error) =>{
    console.log(error)
});
