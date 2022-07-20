const express = require("express");
const app = express();
var bodyParser = require('body-parser')
const cors = require('cors')
const fetch = require('node-fetch')
let apiCnpj;




app.use((req,res,next) => {
    res.header("Access-control-allow-Origin", "*");
    app.use(cors());
    next()
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/cnpj', (req,res) => {
     apiCnpj = req.body;
     res.status(200);
})


app.get("/", (req, res) => {
    async function buscaDadosApi() {
    const response = await fetch(`https://publica.cnpj.ws/cnpj/${apiCnpj.cnpj}`);
    const dados = await response.json();
    if(!dados){
        res.status(422).json({ msg: 'Não encontrado' })
    }

    res.status(200).json({ msg: dados })
}
buscaDadosApi()
   apiCnpj = "";
});




app.listen(3000);
