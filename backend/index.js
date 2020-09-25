const app = require('express')()
const consign = require('consign')
const db = require('./config/db.js')

app.db = db


consign().then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(3070, () => console.log('Sever is running on port 3070'))