const axios = require ('axios')
const { json } = require('body-parser')
const express = require('express')
const app = express()

app.get('/', async (req, res) => {
    res.json({msg: "OK"})    
})


app.get('/getrepos', async (req, res) => {
    try {
        const {data} = await axios ('https://api.github.com/orgs/takenet/repos')
        
        let retorno = data.filter((dt) => dt.language === "C#");

        return res.json(retorno)
    } catch (error) {
        return res.json(error)
    }
    
})

app.get('/teste', async (req, res) => {
    try {
        const {data} = await axios ('https://api.github.com/orgs/takenet/repos')
        
        let retorno = data.filter((dt) => dt.language === "C#");

        for (let index = 0; index < 4; index++) {
            retorno.forEach(function(valor, posicao) {
                let response = {
                name: [valor.full_name][index],//console.log(valor.full_name, posicao)
                descricao:  [valor.description][index]
        }
        return res.json(response)
        })
        }
        

        
    } catch (error) {
        return res.json(error)
    }
    
})

const PORT = process.env.PORT || 666

app.listen(PORT)