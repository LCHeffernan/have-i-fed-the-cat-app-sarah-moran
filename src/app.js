const express = require('express');
const { Cat } = require('./models')

const app = express();

app.use(express.json());

/*app.post('/',(req,res) =>  {


    Cat.create(req.body).then( cat => res.status(201).json(cat))
    
})*/

app.post("/cats", (req, res) => {
    Cat.create(req.body)
        .then(cat => res.status(201).json(cat))
        .catch((status, err) => {
            console.log('err');
            console.log(err);
        });
});

app.get('/cats', (req,res) => {
    Cat.findAll(req.body)
    .then(cat => res.status(201).json(cat))
})

app.get('/cats/:catId', (req,res) => {
    Cat.findByPk(req.params.catId)
    .then(cat => res.status(201).json(cat))
})

app.patch('/cats')

module.exports = app;