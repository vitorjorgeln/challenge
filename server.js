const axios = require ('axios')
const { json } = require('body-parser')
const express = require('express')
const app = express()

//criando rota
app.get('/getrepos', async (req, res) => {
    try {
        const {data} = await axios ('https://api.github.com/orgs/takenet/repos') // -> Pegando o retorno completo da api do git para os repositorios da take
        
        let retorno = data.filter((dt) => dt.language === "C#");// -> Filtrei os repositorios por liguagem. Isso me deu mais facilidade pra trabalhar com o retorno alem de me retornar o valores ja em ordem crescente. 

            //com certeza tinha um jeito melhor de pegar esses retornos, mas infelizmente este foi o jeito que consegui :(
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

// me certificando que, quando em producao minha rota ouca a porta que o heroku deu a ela. Mas, quando eu testar em local, ela rodara na porta que setei. 
const PORT = process.env.PORT || 666

app.listen(PORT)



// ********** testes ****************

//rota padrao, pra validar se tudo estava funcionando conforme o esperado

/*app.get('/', async (req, res) => {
    res.json({msg: "OK"})    
})


// primeira rota que criei, onde consegui filtrar os repos pela linguagem

app.get('/teste', async (req, res) => {
    try {
        const {data} = await axios ('https://api.github.com/orgs/takenet/repos')
        
        let retorno = data.filter((dt) => dt.language === "C#");

        return res.json(retorno)
    } catch (error) {
        return res.json(error)
    }
    
})*/