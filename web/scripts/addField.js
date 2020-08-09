//Procurar o botao
document.querySelector("#add-time")
.addEventListener('click',cloneField)
// Quando clicar  no botao 

// Executar uma ação
function cloneField() {
    // Duplicar os campos. Que campo?
      const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)//boolean: true or false

    //limpar os campos. Que campos?
      const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
      fields.forEach(function(field){
          //pegar o field do momento e limpa ele
          field.value = ""
      })

     // Colocar na página, onde?
     document.querySelector('#schedule-items').appendChild(newFieldContainer)
}