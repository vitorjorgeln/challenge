const axios = require ('axios')
const { json } = require('body-parser')
const express = require('express')
const app = express()

//criando rota
app.get('/getrepos', async (req, res) => {
    try {
        const {data} = await axios ('https://api.github.com/orgs/takenet/repos') //-> Pegando o retorno completo da api do git para os repositorios da take

        let retorno = data.filter((dt) => dt.language === "C#");// -> Filtrei os repositorios por liguagem. Isso me deu mais facilidade pra trabalhar com o retorno alem de me retornar o valores ja em ordem crescente. 
            var response = {}

            for (let i = 0; i < retorno.length; i++) {
                Object.assign(response, {
                    ['name'+i]: retorno[i].full_name,
                    ['description'+i]: retorno[i].description
                })
            }

            return res.json(response)

    } catch (error) {
        return res.json(error)
    }

})

// me certificando que, quando em producao minha rota ouca a porta que o heroku deu a ela. Mas, quando eu testar em local, ela rodara na porta que setei. 
const PORT = process.env.PORT || 666

app.listen(PORT)