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

            retorno.forEach( value=> {
                let response = {
                name: [retorno[0].full_name, retorno[1].full_name, retorno[2].full_name, retorno[3].full_name, retorno[4].full_name],//console.log(valor.full_name, posicao)
                descricao: [retorno[0].description, retorno[1].description, retorno[2].description, retorno[3].description, retorno[4].description] 
                }             
                

                return res.json(response)
        })

        
    } catch (error) {
        return res.json(error)
    }
    
})

const PORT = process.env.PORT || 666

app.listen(PORT)