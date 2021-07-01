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
                name1: retorno[0].full_name,
                name2: retorno[1].full_name, 
                name3: retorno[2].full_name,
                name4: retorno[3].full_name,
                name5: retorno[4].full_name,
                descricao1: retorno[0].description,
                descricao2: retorno[1].description,
                descricao3: retorno[2].description,
                descricao4: retorno[3].description,
                descricao5: retorno[4].description
                }             
                

                return res.json(response)
        })

        
    } catch (error) {
        return res.json(error)
    }
    
})

const PORT = process.env.PORT || 666

app.listen(PORT)