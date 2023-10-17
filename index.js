const express = require('express')
const {engine} = require('express-handlebars')
const handlebars =require('handlebars')

const { allowInsecurePrototypeAccess }= require('@handlebars/allow-prototype-access')

const app = express()
app.engine('handlebars', engine(
    {handlebars:allowInsecurePrototypeAccess(handlebars)
}));
app.set('view engine', 'handlebars');
app.set('views', './views')
require('./models/db')

app.use(express.json())
app.use(express.urlencoded(extended=true))


app.use('/emp',require('./controller/emscontrol'))









const port= 3000
app.listen(port,()=>{console.log(`server is on ${port}`)})
