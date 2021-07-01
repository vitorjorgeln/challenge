const axios = require ('axios')
const { json } = require('body-parser')
const express = require('express')
const app = express()

//criando rota
app.get('/getrepos', async (req, res) => {
    try {
        const {data} = await axios ('https://api.github.com/orgs/takenet/repos') // -> Pegando o retorno completo da api do git para os repositorios da take
        
        let retorno = data.filter((dt) => dt.language === "C#");// -> Filtrei os repositorios por liguagem. Isso me deu mais facilidade pra trabalhar com o retorno alem de me retornar o valores ja em ordem crescente. 

            //com certeza tinha um jeito melhor de pegar esses retornos, mas infelizmente por limitação tecnica, essa foi a forma que consegui :(
            // tentei colocar um for dentro do forEach, e até consegui retornar os valores, mas tive dificuldade de montar um objeto parecido com o que eu consegui fazendo essa repeticao manualmente
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