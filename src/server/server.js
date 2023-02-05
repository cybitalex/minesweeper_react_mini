const knex = require('knex')(require('../server/knexfile.js')["development"]);
const { response } = require('express');
const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    knex('users').select('*')
        .then(people => {
            let users = people.map(p => p.first_name)
            console.log(users)
            res.send(users)
        })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})