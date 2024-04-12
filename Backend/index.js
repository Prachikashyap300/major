const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

const userRouter = require('./Routers/User');

app.use(cors({
    origin: ['http://localhost:5173']
}))

//middleware
app.use(express.json());

app.use('/user', userRouter);

//server

app.listen(port , ()=>{
    console.log(`Server is running at port ${port}`);
})
