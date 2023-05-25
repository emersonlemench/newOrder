const express = require('express')
const app = express()
const router = require('./src/routes/route')
const salto = require('./src/controllers/salto');



app.set('view engine', 'ejs');
app.set("views", __dirname + "/src/views");

app.use(express.urlencoded({extended:false}))

app.use(router)
app.use(express.static('public'));

app.listen(process.env.PORT || 3000, ()=>{
  console.log('Puerto 3000');
})

