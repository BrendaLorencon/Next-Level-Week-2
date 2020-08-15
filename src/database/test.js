const Database = require('./db')

Database.then((db) => {
    // Inserir dados

        proffy = {
            name: "Diego Fernandes", 
            avatar: "https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" , 
            whatsapp: "16997598755", 
            bio: "Entusiasta de melhores tecnologias de química avançada<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através da experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        }

        classValue = {
            subject: "Química", 
            cost: "20", 
            // o proffy id virá pelo banco de dados
        }

    classSchedule = [
        //class_id virá pelo banco de dados, após cadastramos o class
        {
           weekday: 1,
           time_from:720,
           time_to: 1220
        },
        {
            weekday: 0,
            time_from:520,
            time_to: 1220
         }
    ]

    //Consultar os dados inseridos
})