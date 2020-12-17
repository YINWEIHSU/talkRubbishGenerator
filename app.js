const express = require ( 'express' )
const exphbs = require ( 'express-handlebars' )
const bodyParser = require ( 'body-parser' )
const generateTalkRubbish = require ( './generateTalkRubbish.js')
const handlebars = require('handlebars')

const app = express ()
const port = 3000

app.engine ( 'handlebars' , exphbs ({ defaultLayout : 'main' }) )
app.set ( 'view engine' , 'handlebars')
app.use ( bodyParser.urlencoded ({ extended : 'true' }) )

// register helper
handlebars.registerHelper('ifEquals', function (position, checked, options) {
  return (position === checked) ? options.fn(this) : options.inverse(this)
})


app.get ( '/' , ( req , res ) => {
    res.render ( 'index' )
})

app.post ( '/' , ( req , res ) => {
    const options = req.body.position
    const sentence = generateTalkRubbish( options )
    res.render ( 'index',{ sentence , options } )
})

app.listen ( port , () => {
    console.log ( `This Talk Rubbish Generator is running on http://localhost:${port}`)
})