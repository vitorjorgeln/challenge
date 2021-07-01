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
        
        let retorno = data.filter((dt) => dt.created_at === "2013-10-25T13:04:51Z");

        return res.json(retorno)
    } catch (error) {
        return res.json(error)
    }
    
})

const PORT = process.env.PORT || 666

app.listen(PORT)