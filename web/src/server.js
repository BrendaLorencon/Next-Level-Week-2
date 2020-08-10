//Dados
const proffys = [
    {
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" , 
        whatsapp: "16997598755", 
        bio: 'Entusiasta de melhores tecnologias de química avançada<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através da experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.', 
        subject: "Química", 
        cost: "20", 
        weekday: [0], 
        time_from: [720], 
        time_to:[1220]
    },
    {
        name: "Brenda Lorençon", 
        avatar: "https://avatars2.githubusercontent.com/u/49622638?s=460&u=874a1238a9d390fd987823f0997fbffe0ec7242d&v=4",
        whatsapp: "16997598777", 
        bio: 'Entusiasta de melhores tecnologias de química avançada<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através da experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.', 
        subject: "Matemática", 
        cost: "40", 
        weekday: [1], 
        time_from: [720], 
        time_to:[1220]
    },
    {
        name: "Mayke Brito", 
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsapp: "16997598788", 
        bio: 'Entusiasta de melhores tecnologias de química avançada<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através da experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.', 
        subject: "Ciência", 
        cost: "40", 
        weekday: [1], 
        time_from: [720], 
        time_to:[1220]
    }
]

const subjects =[
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays =[
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",

]

//Funcionalidades 

function getSubject(subjectNumber){
    const position = +subjectNumber - 1  
    return subjects[position]
}

function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}


function pageGiveClasses(req, res){
    const data = req.query

    //se tiver dados(data)
    const isNotEmpty = Object.keys(data).length > 0
    if(isNotEmpty){
        
        data.subject = getSubject(data.subject)
    // adicionar dados na lista de proffys
        proffys.push(data)

       return res.redirect("/study")
    }
    //se não , nao adiciona
    return res.render("give-classes.html", {subjects, weekdays})
}

//Servidor
const express = require('express')
const server = express()


//configurar nunjucks(template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})
//Inicio de configuração do servidor
server
// configurar arquivos estáticos (css, scripts, images)
.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//Starte no servidor
.listen(5500)

