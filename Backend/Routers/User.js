const express = require('express');
const router = express.Router();
const model = require('../Models/User');

router.post('/add', (req,res)=>{
    console.log(req.body);

    //storing data to monogoDB
    new model(req.body).save()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
    });
});

module.exports = router;