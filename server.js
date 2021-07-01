const axios = require ('axios')
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

app.listen('666')