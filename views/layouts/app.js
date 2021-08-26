const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser")
const candidatos = require("./models/Cadastro")


app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Rotas
app.get('/candidatos', function (req, res) {
    res.render('candidatos');
});

app.get('/cad-candidatos', function (req, res) {
    res.render('cad-candidatos');
});

app.post('/add-candidatos', function (req, res) {
     candidatos.create({
         nome: req.body.nome,
         cargo: req.body.cargo
     }).then(function(){
         res.redirect('/candidatos')
         //res.send("Cadastro com sucesso")
    }).catch(function(erro){
        res.send("Não foi cadastrado com sucesso" + erro)
    }) 
    //res.send("Nome: " + req.body.nome + "<br>Cargo: " + req.body.cargo)
})

app.listen(3000);