const mongoose = require('mongoose');
const url ="mongodb+srv://prachik3002:prachik3002@cluster0.8muaqrv.mongodb.net/Major?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(url)

.then((result) => {
    console.log('Connection to database successful');
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;