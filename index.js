const express = require("express");
const app = express();
const  swaggerUI  =  require ( 'swagger-ui-express' ) ; 
const  swaggerDocument  =  require ( './swagger.json' ) ;
const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'python21',
    database: 'jobnet'
})

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.get('/docs', function(req,res) {
    res.send('docs')
})

connection.connect()

// Rotas

app.get('/candidatosdb', function (req, res)  {
 // Busca no banco de dados
    connection.query('Select * from jobnet.candidatos', function (err, rows, fields){
        if (err) throw err
        
        res.send(rows)
    })
})
  



app.listen(3000, function () {
    console.log("Servidor rodando")
});


