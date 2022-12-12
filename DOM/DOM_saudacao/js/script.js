(function(){
    const nomeUsuario = null
    const elemento = document.querySelector(".top-bar p")

    if(nomeUsuario) {
        //define o texto
        //elemento.textContent += nomeUsuario
        
        //define o texto com tags html
        elemento.innerHTML += "<b>" + nomeUsuario + "</b>"
    } else {

        //removendo o elemento. funciona em navegadores modernos
        elemento.remove()

        /*
        para funcionar no IE11, eh necessario acessar o elemento pai, e a partir dali excluir o elemento filho

        const elementoParaRemover = elemento.parentElement
        elementoParaRemover.parentElement.removeChild(elementoParaRemover)
        */
    }
})()